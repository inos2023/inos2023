import React, { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import KeyFeaturesSection from '@site/src/components/HomePage/KeyFeaturesSection';
// import CommunitySection from './CommunitySection';
// import IntroductionSection from './IntroductionSection';
import HeroBannerSection from './HeroBannerSection';
// import GetStartedSection from './GetStartedSection';
import HomepageFeatures from './HomepageFeatures';
import BodyTitle from './BodyTitle';
import FooterTitle from './FooterTitle';
import HomepageFooter from './HomepageFooter'

function HomePage() {
  console.log('aaaaaaaaaaaaaa',Layout)
  const { siteConfig } = useDocusaurusContext();
  const { title } = siteConfig;

  useEffect(() => {
    const nav = document.querySelector('.navbar');
    console.log('ssssssssssssssssssssssssss',nav)
    nav.classList.add('navbar--no-border');
  }, []);

  return (
    <Layout title={title}>
      <HeroBannerSection />
      {/* <IntroductionSection /> */}
      <BodyTitle />
      <HomepageFeatures />
      <FooterTitle />
      <HomepageFooter />
      {/* <KeyFeaturesSection /> */}
      {/* <CommunitySection /> */}
      {/* <GetStartedSection /> */}
    </Layout>
  );
}

export default HomePage;
