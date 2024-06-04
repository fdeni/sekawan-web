
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,

} from "reactstrap";
import { HashLink } from "react-router-hash-link";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
    item: 5
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-9" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/sekawan-logo.png")}
                  style={{ width: "90px" }}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/sekawan-logo.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className=" align-items-lg-center mr-4" navbar>
                  <Nav className="navbar-nav-hover align-items-lg-center mr-4" navbar>
                    <UncontrolledDropdown nav>
                      <DropdownToggle nav>
                        {/* <i className="ni ni-collection d-lg-none mr-1" /> */}
                        <HashLink className="h10 text-dark" smooth to="/#portofolio">Portofolio</HashLink>
                      </DropdownToggle>
                    </UncontrolledDropdown>
                  </Nav>
                  <Nav className="navbar-nav-hover align-items-lg-center mr-4" navbar>
                    <UncontrolledDropdown nav>
                      <DropdownToggle nav>
                        {/* <i className="ni ni-collection d-lg-none mr-1" /> */}
                        <HashLink className="h10 text-dark" smooth to="/#service">Our Service</HashLink>
                      </DropdownToggle>
                    </UncontrolledDropdown>
                  </Nav>
                  <Nav className="navbar-nav-hover align-items-lg-center mr-4" navbar>
                    <UncontrolledDropdown nav>
                      <DropdownToggle nav>
                        {/* <i className="ni ni-collection d-lg-none mr-1" /> */}
                        <HashLink className="h10 text-dark" smooth to="/#about">About Us</HashLink>
                      </DropdownToggle>
                    </UncontrolledDropdown>
                  </Nav>
                  
                  <Nav className="navbar-nav-hover align-items-lg-center mr-4" navbar>
                    <UncontrolledDropdown nav>
                      <DropdownToggle nav>
                        {/* <i className="ni ni-collection d-lg-none mr-1" /> */}
                        <HashLink className="h10 text-dark" smooth to="/#contact">Contact</HashLink>
                      </DropdownToggle>
                    </UncontrolledDropdown>
                  </Nav>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
