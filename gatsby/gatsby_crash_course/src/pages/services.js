import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ServicesPage =()=> {
  return(
    <Layout>
    <Seo title="Services" />
    <h1>Our services</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aut expedita dolores voluptatum velit vero tenetur sequi ab qui vel!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aut expedita dolores voluptatum velit vero tenetur sequi ab qui vel!</p>
    <Link to="/">Home</Link> <br />
  </Layout>
  )
}


export default ServicesPage;