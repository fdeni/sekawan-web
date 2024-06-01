
import React from "react";

import classnames from "classnames";

// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
  Container,
} from "reactstrap";
import { doc, getDoc } from "firebase/firestore";
import firebaseApps from "data/database/Firebase";
import DemoNavbar from "components/Navbars/DemoNavbar";
import Contact from "views/landing-page/Contact";
import Cards from "components/CardLink.js";

class TabsSection extends React.Component {
  state = {
    plainTabs: 0,
    service: []
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };
  async componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    // this.refs.main.scrollTop = 0;

    // const id = this.props.router.location.state.service;
    const services = doc(firebaseApps.db, 'services', 'sekawan-studio');
    const servicesSnapshot = await getDoc(services);
    let data = servicesSnapshot.data();
    console.log(data)
    this.setState({ service: [data] });
  }
  render() {
    return (
      <>
        <DemoNavbar />

        <section className="section-profile-cover section-shaped my-0">

          <div className="shape shape-style-1 shape-light">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-white"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
        <Container>
          <Row className="justify-content-center">
            <Col className="mt-5 mt-lg-0" xs="12" sm="12" lg="12">
              <div className="mb-3">
                {/* <small className="text-uppercase font-weight-bold">
                  With text
                </small> */}
              </div>
              <div className="nav-wrapper">
                <Nav
                  className="nav-fill nav-tabs flex-md-row"
                  id="tabs-icons-text"
                  pills
                  role="tablist"
                >
                  <NavItem>
                    <NavLink
                      aria-selected={this.state.plainTabs === 0}
                      className={classnames("mb-sm-3 mb-md-0", {
                        active: this.state.plainTabs === 0,
                      })}
                      onClick={(e) => this.toggleNavs(e, "plainTabs", 0)}
                      href="#pablo"
                      role="tab"
                    >
                      Wisuda
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      aria-selected={this.state.plainTabs === 1}
                      className={classnames("mb-sm-3 mb-md-0", {
                        active: this.state.plainTabs === 1,
                      })}
                      onClick={(e) => this.toggleNavs(e, "plainTabs", 1)}
                      href="#pablo"
                      role="tab"
                    >
                      Family
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      aria-selected={this.state.plainTabs === 2}
                      className={classnames("mb-sm-3 mb-md-0", {
                        active: this.state.plainTabs === 2,
                      })}
                      onClick={(e) => this.toggleNavs(e, "plainTabs", 2)}
                      href="#pablo"
                      role="tab"
                    >
                      Maternity
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      aria-selected={this.state.plainTabs === 3}
                      className={classnames("mb-sm-3 mb-md-0", {
                        active: this.state.plainTabs === 3,
                      })}
                      onClick={(e) => this.toggleNavs(e, "plainTabs", 3)}
                      href="#pablo"
                      role="tab"
                    >
                      Prewedding
                    </NavLink>
                  </NavItem>
                  {/* <NavItem>
                    <NavLink
                      aria-selected={this.state.plainTabs === 5}
                      className={classnames("mb-sm-3 mb-md-0", {
                        active: this.state.plainTabs === 5,
                      })}
                      onClick={(e) => this.toggleNavs(e, "plainTabs", 5)}
                      href="#pablo"
                      role="tab"
                    >
                      Other
                    </NavLink>
                  </NavItem> */}
                </Nav>
              </div>
              <Card className="shadow">
                <CardBody>
                  <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                    <TabPane tabId="plainTabs0">
                      {/* <Container> */}
                      <div>
                        <Row className="justify-content-center">
                          {this.state.service.map((item) => (
                            item.services[this.state.plainTabs].packages.map((prop, index) => (
                              <Col key={index} xs="6" sm="6" md="4" lg="3" className="mb-4 d-flex justify-content-center">
                                <Cards
                                  image={require("assets/img/card/wedding.jpg")}
                                  title={prop.title}
                                  price={prop.price}
                                  packageItem={[item.services[this.state.plainTabs].name, prop]}
                                  bodies={prop.items}
                                />
                              </Col>

                            ))
                          ))}
                        </Row>
                      </div>
                      {/* </Container> */}
                    </TabPane>
                    <TabPane tabId="plainTabs1">
                      <div>
                        <Row className="justify-content-center">
                          {this.state.service.map((item) => (
                            item.services[this.state.plainTabs].packages.map((prop, index) => (
                              <Col key={index} xs="6" sm="6" md="4" lg="3" className="mb-4 d-flex justify-content-center">
                                <Cards
                                  image={require("assets/img/card/wedding.jpg")}
                                  title={prop.title}
                                  price={prop.price}
                                  packageItem={[item.services[this.state.plainTabs].name, prop]}
                                  bodies={prop.items}
                                />
                              </Col>

                            ))
                          ))}
                        </Row>
                      </div>
                    </TabPane>
                    <TabPane tabId="plainTabs2">
                      <div>
                        <Row className="justify-content-center">
                          {this.state.service.map((item) => (
                            item.services[this.state.plainTabs].packages.map((prop, index) => (
                              <Col key={index} xs="6" sm="6" md="4" lg="3" className="mb-4 d-flex justify-content-center">
                                <Cards
                                  image={require("assets/img/card/wedding.jpg")}
                                  title={prop.title}
                                  price={prop.price}
                                  packageItem={[item.services[this.state.plainTabs].name, prop]}
                                  bodies={prop.items}
                                />
                              </Col>

                            ))
                          ))}
                        </Row>
                      </div>
                    </TabPane>
                    <TabPane tabId="plainTabs3">
                      <div>
                        <Row className="justify-content-center">
                          {this.state.service.map((item) => (
                            item.services[this.state.plainTabs].packages.map((prop, index) => (
                              <Col key={index} xs="6" sm="6" md="4" lg="3" className="mb-4 d-flex justify-content-center">
                                <Cards
                                  image={require("assets/img/card/wedding.jpg")}
                                  title={prop.title}
                                  price={prop.price}
                                  packageItem={[item.services[this.state.plainTabs].name, prop]}
                                  bodies={prop.items}
                                />
                              </Col>

                            ))
                          ))}
                        </Row>
                      </div>
                    </TabPane>
                    {/* <TabPane tabId="plainTabs5">
                      <p className="description">
                        ddd
                      </p>
                    </TabPane> */}
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* </section> */}
        <Contact />
      </>
    );
  }
}

export default TabsSection;
