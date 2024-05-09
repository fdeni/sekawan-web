import withRouter from "components/WithRouterWrapper";
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
} from "reactstrap";

class OurService extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          {/* <section className="section section-hero section-shaped">
      
            <div className="shape shape-style-1 shape-light">
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
            </div>
            </section> */}
          <section className="section section-shaped mt--150">
            <Container>
              <Row className="justify-content-center text-center mb-lg-n-7">
                <Col lg="9">
                  <h2 className="display-5">Choose your story.</h2>
                  <p className="lead text-muted">
                    Everybody has their own love story. and you have your own love story to tell.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg pt-lg-0 mt--100">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Link to="/detail/wedding">
                        <Card className="card-lift--hover shadow border-0">
                          <CardImg
                            alt="..."
                            src={require("assets/img/card/1.jpg")}
                          ></CardImg>
                        </Card>
                      </Link>
                    </Col>
                    <Col lg="4">
                      <Link to="/detail/pre-wedding">
                        <Card className="card-lift--hover shadow border-0">
                          <CardImg
                            alt="..."
                            src={require("assets/img/card/3.jpg")}
                          ></CardImg>
                        </Card>
                      </Link>
                    </Col>
                    <Col lg="4">
                      <Link to="/detail/lamaran">
                        <Card className="card-lift--hover shadow border-0">
                          <CardImg
                            alt="..."
                            src={require("assets/img/card/2.jpg")}
                          ></CardImg>
                        </Card>
                      </Link>
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

export default withRouter(OurService);
