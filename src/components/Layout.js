import React from 'react'
import Nav from './navbar/Nav'
import Navigation from './navigation/Navigation'

export const Layout = (Comp) => {
  return (
    <div>
      <Nav/>
      <Navigation/>
      <Comp/>
    </div>
  )
}