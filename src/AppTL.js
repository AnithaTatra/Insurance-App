import React, { Component } from 'react';
import RoutesTL from '../src/components/RoutesTL';
import TopNavigationTL from './components/topNavigationTL';
import SideNavigationTL from './components/sideNavigationTL';
import Footer from './components/Footer';
import './index.css';

class App extends Component {
  
  render() {
    return (
        <div className="flexible-content">
          <TopNavigationTL/>
          <SideNavigationTL />
          <main id="content" className="p-5">
            
            <RoutesTL />
          </main>
          <Footer />
        </div>
    );
  }
}

export default App;
