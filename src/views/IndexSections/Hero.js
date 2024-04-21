/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Card,
  // CardBody,
  CardImg,
  // Badge,
  // Button,
  // CardImgOverlay
} from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          {/* <section className="section section-hero section-shaped">
      
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div> */}
          <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 shape-light">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="display-3 text-black-50">
                      {/* Every Couple is Journey{" "} */}
                      <span>Every Couple is Journey</span>
                    </h1>
                    <p className="lead text-black-50">
                      Our passion for photography and videography capture moments with honesty and pure emotions, and we love telling those stories for you.

                      we believe that every couple has unique stories to tell.
                    </p>
                    {/* <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Components</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            Download React
                          </span>
                        </Button>
                      </div> */}
                  </Col>
                </Row>
              </div>
            </Container>
            {/* <Container className="shape-container d-flex align-items-center py-lg"> */}
            <Container className="shape-container d-flex align-items-center">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/brand/sekawan-logo.png")}
                      style={{ width: "20%" }}
                    />
                    {/* <p className="lead text-white">
                      Our Service:
                    </p> */}
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
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
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardImg
                          alt="..."
                          src={require("assets/img/card/1.jpg")}
                        ></CardImg>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardImg
                          alt="..."
                          src={require("assets/img/card/2.jpg")}
                        ></CardImg>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardImg
                          alt="..."
                          src={require("assets/img/card/3.jpg")}
                        ></CardImg>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="row-grid justify-content-center">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardImg
                          alt="..."
                          src={require("assets/img/card/4.jpg")}
                        ></CardImg>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardImg
                          alt="..."
                          src={require("assets/img/card/5.jpg")}
                        ></CardImg>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
