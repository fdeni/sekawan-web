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
          <section className="">
            <Container>
              <Row className="justify-content-center text-center mb-lg-n-2">
                <Col lg="7">
                  <h2 className="display-4 text-black-50 text-center"><span>Choose your story.</span></h2>
                  <p className="text-black-50 mt-3 text-center">
                    Everybody has their own love story. and you have your own love story to tell.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>

          {/* <section className="section section-md pt-md-0 mt--50"> */}
          <Container className="pd-sm-n-3">
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row row-cols-lg-3">
                  <Col className="col">
                    <Link to="/detail/package" state={{ service: "wedding" }}>
                      <Card className="card-lift--hover shadow border-0">
                        <CardImg
                          alt="..."
                          src={require("assets/img/card/1.jpg")}
                        ></CardImg>
                      </Card>
                    </Link>
                  </Col>
                  <Col className="col">
                    <Link to="/detail/package" state={{ service: "pre-wedding" }}>
                      <Card className="card-lift--hover shadow border-0">
                        <CardImg
                          alt="..."
                          src={require("assets/img/card/3.jpg")}
                        ></CardImg>
                      </Card>
                    </Link>
                  </Col>
                  <Col className="col">
                    <Link to="/detail/package" state={{ service: "lamaran" }}>
                      <Card className="card-lift--hover shadow border-0">
                        <CardImg
                          alt="..."
                          src={require("assets/img/card/2.jpg")}
                        ></CardImg>
                      </Card>
                    </Link>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                  <Col lg="12" xs="8" md="12">
                    <Row className="row row-cols-lg-3 justify-content-center">
                      <Col className="col-md-4">
                        <Card className="card-lift--hover shadow border-0">
                          <CardImg
                            alt="..."
                            src={require("assets/img/card/4.jpg")}
                          ></CardImg>
                        </Card>
                      </Col>
                      <Col className="col-md-4">
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
              </Col>
            </Row>
          </Container>
          {/* </section> */}
        </div>
      </>
    );
  }
}

export default withRouter(OurService);
