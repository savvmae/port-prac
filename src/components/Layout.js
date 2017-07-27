import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class BaseLayout extends Component {
  render() {
    // INLINE STYLING
    let titleStyle = {
      "fontFamily": "Bad Script",
      "fontSize": "12rem"
    }
    let subtitleStyle = {
      "fontFamily": "Raleway",
      "fontSize": "10rem"
    }
    let headerStyle = {
      "textAlign": "center",
      "height": "600px",
      "color": "#fff",
      "backgroundImage": "url(./images/def-4.jpeg)",
      "backgroundSize": "cover",
      "backgroundPosition": "center",
      "boxShadow": "rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
      "textShadow": "1px 1px 2px black",
      "fontFamily": "decorative",
    }
    let navTitle = {
      "fontFamily": "Bad Script",
      "fontSize": "180%"
    }
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li style={navTitle}>
                  <NavLink activeStyle={{color: "yellow"}} exact to="/">Savannah</NavLink>
                </li>
                <li>
                  <NavLink activeStyle={{color: "yellow"}} exact to="/Home">Home</NavLink>
                </li>
                <li>
                  <NavLink activeStyle={{color: "yellow"}} exact to="/About">About</NavLink>
                </li>
                <li>
                  <NavLink activeStyle={{color: "yellow"}} exact to="/Portfolio">Portfolio</NavLink>
                </li>
                <li>
                  <NavLink activeStyle={{color: "yellow"}} exact to="/Contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink activeStyle={{color: "yellow"}} exact to="/References">References</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-12 header"
            style={headerStyle}>
            <div className="header-title">
              <div
                className="dev-name"
                style={titleStyle}>
                Savannah Cosby
              </div>
              <div className="subtitle" style={subtitleStyle}>
                When Fire Meets Code
              </div>
            </div>
          </div>
        </nav>

        {this.props.children}
        <footer className="col-lg-11">
          <span className="footer-title">Savannah Cosby </span>
          <span>
            322 Sumter Street, Charleston SC | (843) 906-3556
          </span>
        </footer>
      </div>
    );
  }
}
