import React, { Component } from 'react'
import Nav from './navbar/Nav'
import Navigation from './navigation/Navigation'

export const Layout = (Compo) => () => {
  return (
    <div className="container-fluid">
      <Nav/>
      <div className="row">
        <Navigation/>
        <Compo/>
      </div>
    </div>
  )
}