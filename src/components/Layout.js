import React, { Component } from 'react'
import Nav from './navbar/Nav'
import Navigation from './navigation/Navigation'

export const Layout = (Compo) => () => {
  return (
    <div className="container-fluid pd0">
        <Nav/>
      
      <div className="row Gtgte">
        <Navigation/>
        <Compo/>
      </div>
    </div>
  )
}