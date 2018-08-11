import React, { Component } from 'react'
import Nav from './navbar/Nav'
import Navigation from './navigation/Navigation'

export const Layout = (Compo) => () => {
  return (
    <div>
      <Nav/>
      <Navigation/>
      <Compo/>
    </div>
  )
}