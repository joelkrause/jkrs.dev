import React from "react"

import Header from "../components/global/header"
import Footer from "../components/global/footer"
// import "../assets/styles/global.scss"

const Layout = ({ location,children }) => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header/>
      <article className="flex-grow">
        {children}
      </article>
    </main>
  )
}
export default Layout