import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import '../app.scss';

const ComponentMap = () => (
  <Layout>
    <h1 className="process-h1">Component Map</h1>
    <div className="nav">
      <Link to="/page-2/">next</Link>
    </div>
    <div className="image-container">
      <div class="image-container__img">
        <img src='/images/process/component-map.jpg' alt="Component Map" />
      </div>
      <div class="image-container__img">
        <img src='/images/process/component-map-mb.jpg' alt="Component Map - Mobile" />
      </div>
    </div>
  </Layout>
)

export default ComponentMap