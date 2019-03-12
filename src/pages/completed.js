import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Articles from '../components/articles/';
import Trending from '../components/trending/';
import '../app.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="wrapper__grid">
        <Articles />
        <Trending />
      </div>
  </Layout>
)

export default IndexPage