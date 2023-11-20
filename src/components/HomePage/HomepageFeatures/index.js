import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import png1 from './01-3算力多样化.png';
import png2 from './01-4计算智能化.png';
import png3 from './01-5定制模块化.png';
import png4 from './01-6并行计算模型.png';

const FeatureList = [
  {
    title: '算力多样化',
    pic: png1,
    // Svg: require('@site/static/img/01-3算力多样化.svg').default,
    description: <>支持主流的CPU+xPU异构算力</>,
  },
  {
    title: '计算智能化',
    pic: png2,
    // Svg: require('@site/static/img/01-4计算智能化.svg').default,
    description: (
      <>
        内置轻量级AI框架
        <p>支持边/端智能计算</p>
      </>
    ),
  },
  {
    title: '定制模块化',
    pic: png3,
    // Svg: require('@site/static/img/01-5定制模块化.svg').default,
    description: <>支持按需定制模块</>,
  },
  {
    title: '并行计算模型',
    pic: png4,
    // Svg: require('@site/static/img/01-6并行计算模型.svg').default,
    description: (
      <>
        构建并行计算模型
        <p>实现CPU+xPU协同加速</p>
      </>
    ),
  },
];

function Feature({ pic, title, description }) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img src={pic} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
