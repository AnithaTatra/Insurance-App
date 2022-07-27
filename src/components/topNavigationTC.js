import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import "E:/NewREACTANDNODE/InsuranceApp/src/components/pages/style.css";
import FirstLogin from 'E:/NewREACTANDNODE/InsuranceApp/src/components/SecondRouter.js';

class TopNavigation extends Component {
  state = {
    collapse: false
  }
  onClick = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
 
  LogOut=()=>{
    const out=document.getElementById('logout').value;

     if(out==undefined || out=="undefined"){
      ReactDOM.render(<Router><FirstLogin /></Router>, document.getElementById('root'));

     }
  }
  render() {
    return (
      <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
        <MDBNavbarBrand href="/">
          <strong>TeleCaller</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.onClick} />
        <MDBCollapse isOpen={this.state.collapse} navbar>
          <MDBNavbarNav left>
          </MDBNavbarNav>
          <MDBNavbarNav right>
          <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                  <li class="dropdown">
                    <a class="dropdown-toggle"  id="logout" value="out"  onClick={this.LogOut} data-toggle="dropdown" role="button">Logout<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                    </ul>
                  </li>
                </ul>
              </div>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default TopNavigation;
