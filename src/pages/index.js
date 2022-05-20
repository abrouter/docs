import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  if (typeof window !== null) {
      location.href =  siteConfig.baseUrl + 'docs/intro';
  }

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
      </main>
    </Layout>
  );
}
