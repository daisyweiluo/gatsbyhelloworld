import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact() {
  return (
    <div style={{color:  'purple'}}>
      <Link to="/">Home</Link>
      <Header headerText="Contact" />
      <p>This is the contact page</p>
    </div>
  )
}
