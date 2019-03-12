import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../app.scss"

const LayoutFlow = () => (
  <Layout>
    <h1 className="process-h1">Layout Flow</h1>
    <div className="nav">
      <Link to="/page-3/">next</Link>
    </div>
    <div className="image-container">
      <div className="image-container__img">
        <img src="/images/process/layout-flow.png" alt="Component Map" />
      </div>
      <div className="image-container__img">
        <img src="/images/process/layout-flow-mb.png" alt="Component Map" />
      </div>
    </div>
  </Layout>
)

export default LayoutFlow
