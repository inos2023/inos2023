---
slug: 2023-08-22-RoCE-on-kubernetes
date: 2023-08-22
title: 在 k8s 上使用 RoCE 网络
authors: [zhuyaguang]
tags: [video introduction, docusaurus]
keywords: ['k8s', 'RDMA', 'RoCE']
---

## 部署 k8s 集群

- 选择 合适的 容器网络

## 部署 k8s-device-plugin

选择最新的版本

- https://github.com/NVIDIA/k8s-device-plugin

## 部署 RDMA 插件

### 方案一：使用阿里的镜像

来自文章：[在 Kubernetes 上使用 RDMA](https://developer.aliyun.com/article/664961)

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: rdma-devices
  namespace: kube-system
data:
  config.json: |
    {
        "mode" : "hca"
    }

---
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: rdma-device-plugin
  namespace: kube-system
spec:
  selector:
    matchLabels:
      name: rdma-sriov-dp-ds
  template:
    metadata:
      annotations:
        scheduler.alpha.kubernetes.io/critical-pod: ''
      labels:
        name: rdma-sriov-dp-ds
    spec:
      hostNetwork: true
      tolerations:
        - key: CriticalAddonsOnly
          operator: Exists
      containers:
        - image: registry.cn-shanghai.aliyuncs.com/acs/rdma-device-plugin
          name: k8s-rdma-device-plugin
          imagePullPolicy: IfNotPresent
          securityContext:
            privileged: true
          volumeMounts:
            - name: device-plugin
              mountPath: /var/lib/kubelet/device-plugins
            - name: config
              mountPath: /k8s-rdma-sriov-dev-plugin
      volumes:
        - name: device-plugin
          hostPath:
            path: /var/lib/kubelet/device-plugins
        - name: config
          configMap:
            name: rdma-devices
            items:
              - key: config.json
                path: config.json
```

### 结论

镜像版本太老了，而且没有 device plugin 的源代码，无法维护。但是设置 hostNetwork pod 是可以 running 起来的，节点上也有 hca 资源。所以该方案不推荐！

### 方案二 k8s-rdma-shared-dev-plugin

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: rdma-devices
  namespace: kube-system
data:
  config.json: |
    {
        "periodicUpdateInterval": 300,
        "configList": [
           {
             "resourceName": "hca_shared_devices_b",
             "rdmaHcaMax": 500,
             "selectors": {
               "deviceIDs": ["101b"]
             }
           }
        ]
    }

---
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: rdma-shared-dp-ds
  namespace: kube-system
spec:
  selector:
    matchLabels:
      name: rdma-shared-dp-ds
  template:
    metadata:
      labels:
        name: rdma-shared-dp-ds
    spec:
      hostNetwork: true
      priorityClassName: system-node-critical
      containers:
        - image: ghcr.io/mellanox/k8s-rdma-shared-dev-plugin
          name: k8s-rdma-shared-dp-ds
          imagePullPolicy: IfNotPresent
          securityContext:
            privileged: true
          volumeMounts:
            - name: device-plugin
              mountPath: /var/lib/kubelet/
            - name: config
              mountPath: /k8s-rdma-shared-dev-plugin
            - name: devs
              mountPath: /dev/
      volumes:
        - name: device-plugin
          hostPath:
            path: /var/lib/kubelet/
        - name: config
          configMap:
            name: rdma-devices
            items:
              - key: config.json
                path: config.json
        - name: devs
          hostPath:
            path: /dev/
```

> 上面配置中，"deviceIDs": ["101b"] 通过 cat /sys/class/infiniband/mlx5_2/device/device 命令查出来。

如何判断，device plugin 安装成功呢，describe node 发现资源挂载成功就可以了

![image-20230821142528961](https://zhuyaguang-1308110266.cos.ap-shanghai.myqcloud.com/img/image-20230821142528961.png)

### 方案二 测试

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: mofed-test-pod
spec:
  restartPolicy: OnFailure
  nodeName: 10.106.124.3
  hostNetwork: true
  containers:
    - image: mellanox/rping-test
      name: mofed-test-ctr
      securityContext:
        capabilities:
          add: ['IPC_LOCK']
      resources:
        limits:
          rdma/hca_shared_devices_b: 1
      command:
        - sh
        - -c
        - |
          ls -l /dev/infiniband /sys/class/infiniband /sys/class/net
          sleep 1000000

---
apiVersion: v1
kind: Pod
metadata:
  name: mofed-test-pod2
spec:
  restartPolicy: OnFailure
  nodeName: 10.106.124.4
  hostNetwork: true
  containers:
    - image: mellanox/rping-test
      name: mofed-test-ctr
      securityContext:
        capabilities:
          add: ['IPC_LOCK']
      resources:
        limits:
          rdma/hca_shared_devices_b: 1
      command:
        - sh
        - -c
        - |
          ls -l /dev/infiniband /sys/class/infiniband /sys/class/net
          sleep 1000000
```

- 测试命令 1

```
ib\_read\_bw -q 30

ib\_read\_bw -q 30 10.106.156.3
```

![image-20230821142703589](https://zhuyaguang-1308110266.cos.ap-shanghai.myqcloud.com/img/image-20230821142703589.png)

- 测试命令 2

```
ib_write_bw -d mlx5_2  -F --report_gbits

ib_write_bw -d mlx5_2 -F --report_gbits 10.106.156.3
```

![image-20230821143421094](https://zhuyaguang-1308110266.cos.ap-shanghai.myqcloud.com/img/image-20230821143421094.png)

![image-20230821171553969](https://zhuyaguang-1308110266.cos.ap-shanghai.myqcloud.com/img/image-20230821171553969.png)

- 测试命令 3

  ```
  ib_send_bw -d mlx5_3 -i 1 -R --report_gbits
  ib_send_bw -d mlx5_3 -i 1 -R --report_gbits 10.106.156.4
  ```

- 测试命令 4

  ```
  ib_write_bw -d mlx5_3 -a -F

  ib_write_bw  -F -d mlx5_3 10.233.92.6 -D 10 --cpu_util --report_gbits
  ```

### 常用命令

- 查看存储 InfiniBand 设备节点的目录

  ls /dev/infiniband/

- 查看网卡

  ibdev2netdev

- 查询网卡 IP

  ip a show dev enp88s0

- 查看设备 ID

  cat /sys/class/infiniband/mlx5_bond_0/device/device

  cat /sys/class/infiniband/mlx5_2/device/device

- 查看网卡型号

`lspci -s 0000:17:00.0`

![image-20230821113834360](https://zhuyaguang-1308110266.cos.ap-shanghai.myqcloud.com/img/image-20230821113834360.png)

- 查看设备和网卡

  ls -la /dev/infiniband /sys/class/net

- 查询 InfiniBand（IB）设备的状态和配置信息

  ibv_devinfo

## 参考文档

[k8s RoCE 部署: k8s-rdma-shared-dev-plugin + macvlan cni](https://blog.csdn.net/sunshuying1010/article/details/124951208)

[在 Kubernetes 上使用 RDMA](https://developer.aliyun.com/article/664961)

### device plugin

https://github.com/Mellanox/k8s-rdma-shared-dev-plugin 推荐

**https://github.com/k8snetworkplumbingwg/sriov-network-device-plugin** 牛哥使用的，star 数最高

https://github.com/hustcat/k8s-rdma-device-plugin
