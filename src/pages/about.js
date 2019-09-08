import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Image from '../components/image';

const About = () => {
  return (
    <Layout title="About" url="/about/">
      <SEO title="About" />
      <h1>Hello</h1>
      <Image url="https://source.unsplash.com/600x900/?dog" />
      <Link to="/">Home</Link>
    </Layout>
  );
};

export default About;
