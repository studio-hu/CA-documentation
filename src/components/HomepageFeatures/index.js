import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '微信小程序',
    url: "/img/miniProgram.jpg",
    description: (
      <>
          本小程序是由广州软件学院计协开发的，暂且只有报修功能，之后会对该系统进行优化以及开发新功能。欢迎大家对该系统进行反馈，可通过微信公众号"GR计协"或邮箱"ca.sise@outlook.com"进行反馈。后续我们会为小程序开发反馈等功能!感谢大家对计协的支持!
      </>
    ),
  },
  {
    title: '报账系统',
      url: "/img/miniProgram.jpg",
    description: (
      <>
        报账系统有广州软件学院计算机协会开发，方便成员进行账单报销
      </>
    ),
  }
];

function Feature({url, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={url} />
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
