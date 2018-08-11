import React from 'react';
import { Layout } from '../Layout';
import Nav from '../navbar/Nav';
import Navigation from '../navigation/Navigation';
import classNames from 'classnames';

class Manage extends React.Component {
  render() {
    return (
      <div className="Manage">
        <Nav />
        <Navigation />
        <div className="row">
          <div className="col-md-8 col-sm" style={{ backgroundColor: 'red', height: '1000px' }}>
          
          </div>
          <div className="col-md-4 col-sm" style={{backgroundColor: 'blue'}}>
          
          </div>
        </div>
      </div>
    );
  }
}

// export default Layout(Manage)
export default Manage;
