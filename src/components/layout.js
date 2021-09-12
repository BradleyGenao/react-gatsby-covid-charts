import React from "react"
import { Header, Footer } from "."


import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout
