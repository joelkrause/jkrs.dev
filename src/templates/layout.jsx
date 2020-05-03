import React from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";

import Header from "../components/global/header"
import "../assets/styles/global.scss"

const Layout = ({ location,children }) => {
  return (
    <>
    <TransitionProvider
      location={location}
      mode="successive"
      enter={{
        opacity: 0,
        transform: "translateY(15px)",
        config: {
          duration: 150
        }
      }}
      usual={{
        opacity: 1,
        transform: "translateY(0)"
      }}
      leave={{
        opacity: 0,
        transform: "translateY(15px)",
        config: {
          duration: 150
        }
      }}
    >
      <Header/>
      <TransitionViews>
        {children}
      </TransitionViews>
    </TransitionProvider>
    </>
  )
}
export default Layout