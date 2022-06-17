import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';

export default function IndexPage({data}) {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Whoozy's Wraps" />
          <Banner />
          <KeyFeature />
          <ServiceSection />
          <Feature data={data} />
          <CoreFeature />
          <WorkFlow />
          <Package />
          <TeamSection />
          {/* <TestimonialCard />  */}
        </Layout>
    </ThemeProvider>
  );
}

export async function getServerSideProps () {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=
  ${process.env.INSTAGRAM_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data,
    },
  };
};