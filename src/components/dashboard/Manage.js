import React from 'react'
import { Layout } from '../Layout'
import Nav from '../navbar/Nav'
import Navigation from '../navigation/Navigation'

class Manage extends React.Component {
  render() {
    return(
      <div>
        <Nav/>
        <Navigation/>
        Manage
      </div>
    )
  }
}

// export default Layout(Manage)
export default Manage