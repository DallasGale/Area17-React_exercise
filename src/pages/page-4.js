import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import '../app.scss';

const ComponentMap = () => (
  <Layout>
    <div className="nav">
      <Link to="/page-4/">next</Link>
    </div>
    <div className="image-container">
      <img src='/images/process/layout-flow-mb.png' alt="Component Map" />
    </div>
  </Layout>
)

export default ComponentMap