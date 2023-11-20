import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import QrPath from './待替换成实验室公众号二维码.jpg';
import { MdEmail } from 'react-icons/md';

const FeatureList = [
  {
    link: 'https://github.com/inos2023/inos2023.github.io',
    Svg: require('@site/static/img/01-7GIthub.svg').default,
    description: (
      <div>
        <>Github</>
      </div>
    ),
    type: 'link',
  },
  {
    Svg: require('@site/static/img/01-8微信公众号.svg').default,
    description: <>INOS微信公众号</>,
    type: 'img',
  },
  {
    link: 'mailto:inos@163.com',
    Svg: require('@site/static/img/01-9邮箱.svg').default,
    // Svg: (<MdEmail />).default,
    description: <>inos2023@163.com</>,
    type: 'link',
  },
];

function Feature({ link, Svg, description, type }) {
  return (
    // <div className={clsx('col col--4')}>
    <div
      class={`${styles.cloumnCenter}`}
      onClick={() => {
        if (type == 'link') {
          window.open(link);
        }
      }}
    >
      <div>
        <Svg className={styles.featureSvg} role="img"></Svg>
      </div>
      <div className={`${styles.descripFont}`}>
        <p>{description}</p>
      </div>
      {/* </div> */}
      {type == 'img' && (
        <div className={`${styles.hoverClass}`}>
          <img src={QrPath} styles={{ width: '100px', height: '100px' }}></img>
        </div>
      )}
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.backUnset}>
        <div class={styles.alignCenter}>
          <div class={styles.mediaBody}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
