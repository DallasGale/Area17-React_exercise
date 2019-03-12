import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../app.scss"

const ProofOfConceptDesk = () => (
  <Layout>
    <h1 className="process-h1">Layout Flow - Proof of concept (codesandbox)</h1>

    <div className="nav">
      <Link to="/completed/">completed</Link>
    </div>
    <div className="image-container">
      <div className="image-container__img">
        <img
          src="/images/process/proof-of-concept-desk.jpg"
          alt="Proof Of Concept - Desktop"
        />
      </div>
      <div className="image-container__img">
        <img
          src="/images/process/proof-of-concept-mb.png"
          alt="Proof Of Concept - Mobile"
        />
      </div>
    </div>
  </Layout>
)

export default ProofOfConceptDesk
