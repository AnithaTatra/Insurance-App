import React from 'react';
import logo from "../assets/logo.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { Sidenav, Nav } from 'rsuite';
import { Rate } from '@rsuite/icons';
import PeoplesIcon from '@rsuite/icons/Peoples';
import LocationIcon from '@rsuite/icons/Location';
import UserChangeIcon from '@rsuite/icons/UserChange';
import OperatePeopleIcon from '@rsuite/icons/OperatePeople';
const TopNavigation = () => {

  return (
    <div className="sidebar-fixed position-fixed">
      <a href="#!" className="logo-wrapper waves-effect">
        <img alt=" Logo" className="img-fluid" src={logo} />
      </a>
      <MDBListGroup className="list-group-flush">
        {/* <NavLink exact={true} to="/" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3"/>
                        Dashboard
                    </MDBListGroupItem>
                </NavLink> */}
        {/* <NavLink to="/login" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                       Login
                       
                    </MDBListGroupItem>
                    
                </NavLink> */}
        {/* <NavLink to="/register" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                       Register
                    </MDBListGroupItem>
                </NavLink> */}
        {/* <NavLink to="/forgot" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                       Forgot Password
                    </MDBListGroupItem>
                </NavLink> */}

        <Nav>
          <NavLink to="/dashboard" activeClassName="activeClass">

            <MDBListGroupItem>
              <Nav.Menu eventKey="3" title="Role Management" icon={<PeoplesIcon id="peoplesicon" />} >
                <Nav.Item eventKey="3-1"><NavLink to="/addrole"> AddRole</NavLink></Nav.Item>
                <Nav.Item eventKey="3-2"><NavLink to="/viewRole"> ViewRole</NavLink></Nav.Item>
              </Nav.Menu>
            </MDBListGroupItem>
          </NavLink>

        </Nav>

        {/* Location */}
        <Nav>
          <NavLink to="/dashboard" activeClassName="activeClass">
            <MDBListGroupItem>
              <Nav.Menu eventKey="3" title="Location Manage" icon={<LocationIcon id="LocationIcon" />} >
                <Nav.Item eventKey="3-1"><NavLink to="/addLocation"> Add Location</NavLink></Nav.Item>
                <Nav.Item eventKey="3-2"><NavLink to="/viewLocation"> View Location</NavLink></Nav.Item>
              </Nav.Menu>
            </MDBListGroupItem>
          </NavLink>

        </Nav>
        <Nav>
          <NavLink to="/dashboard" activeClassName="activeClass">

            <MDBListGroupItem>
              <Nav.Menu eventKey="3" title="Line Of Business" icon={<OperatePeopleIcon id="OperatePeopleIcon" />} >
                <Nav.Item eventKey="3-1"><NavLink to="/addLob">Add Lob</NavLink></Nav.Item>
                <Nav.Item eventKey="3-2"><NavLink to="/viewLob"> View Lob</NavLink></Nav.Item>
              </Nav.Menu>
            </MDBListGroupItem>
          </NavLink>

        </Nav>
        <Nav>
          <NavLink to="/dashboard" activeClassName="activeClass">

            <MDBListGroupItem>
              <Nav.Menu eventKey="3" title="Language Master" icon={<Rate id="Rate" />} >
                <Nav.Item eventKey="3-1"><NavLink to="/addLanguage">Add Language</NavLink></Nav.Item>
                <Nav.Item eventKey="3-2"><NavLink to="/viewLanguage"> View Language</NavLink></Nav.Item>
              </Nav.Menu>
            </MDBListGroupItem>
          </NavLink>

        </Nav>

        <Nav>
          <NavLink to="/dashboard" activeClassName="activeClass">

            <MDBListGroupItem>
              <Nav.Menu eventKey="3" title="User Management" icon={<UserChangeIcon id="UserChangeIcon" />} >
                <Nav.Item eventKey="3-1"><NavLink to="/userManager">Add user</NavLink></Nav.Item>
                <Nav.Item eventKey="3-2"><NavLink to="/userManagerView"> View User</NavLink></Nav.Item>
              </Nav.Menu>
            </MDBListGroupItem>
          </NavLink>

        </Nav>

      </MDBListGroup>

    </div>
  );
}

export default TopNavigation;
