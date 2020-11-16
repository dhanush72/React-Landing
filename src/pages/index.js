import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Trips from "../components/Trips"
import { Helmet } from "react-helmet"
import Testimonials from "../components/Testimonials"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Hero />
    <Trips heading="Our Favourite Destinations" />
    <Testimonials />
  </Layout>
)

export default IndexPage
