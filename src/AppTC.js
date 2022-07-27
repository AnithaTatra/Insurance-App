import React, { Component } from 'react';
import RoutesTC from '../src/components/RoutesTC';
import TopNavigationTC from './components/topNavigationTC';
import SideNavigationTC from './components/sideNavigationTC';
import Footer from './components/Footer';
import './index.css';

class App extends Component {
  
  render() {
    return (
        <div className="flexible-content">
          <TopNavigationTC/>
          <SideNavigationTC />
          <main id="content" className="p-5">
            
            <RoutesTC />
          </main>
          <Footer />
        </div>
    );
  }
}

export default App;
