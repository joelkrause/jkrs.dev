import React from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";

import Header from "../components/global/header"
import Footer from "../components/global/footer"
import "../assets/styles/global.scss"

const Layout = ({ location,children }) => {
  return (
    <>
    <TransitionProvider
      location={location}
      mode="successive"
      enter={{
        opacity: 0,
        transform: "translateY(-25px)",
        config: {
          duration: 200
        }
      }}
      usual={{
        opacity: 1,
        transform: "translateY(0)"
      }}
      leave={{
        opacity: 0,
        transform: "translateY(-25px)",
        config: {
          duration: 200
        }
      }}
    >
      <Header/>
      <TransitionViews>
        {children}
      </TransitionViews>
      <Footer />
    </TransitionProvider>
    </>
  )
}
export default Layout