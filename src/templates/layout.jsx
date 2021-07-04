import React from "react"

import Header from "../components/global/header"
// import "../assets/styles/global.scss"

function checkDarkMode() {
  if(window.localStorage.getItem('mode') === 'dark'){
    return true
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return true
  }
  return false
}
console.log('is dark mode:',checkDarkMode())
if (checkDarkMode()) {
  console.log('add the dark class')
  setTimeout(() => {
    document.documentElement.classList.add('dark')
  }, 250);
} else {
  console.log('remove the dark class...')
  setTimeout(() => {
    document.documentElement.classList.remove('dark')
  }, 250);
}

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
