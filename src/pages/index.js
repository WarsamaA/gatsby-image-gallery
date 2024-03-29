import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout title="Gatsby Image" url="/">
    <SEO title="Home" />

    <Link to="/about/">About</Link>
  </Layout>
);

export default IndexPage;
