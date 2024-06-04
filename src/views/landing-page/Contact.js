
import React from "react";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class Contact extends React.Component {
  render() {
    return (
      <>
        <footer className="section">
          <Container>
            <Row className=" row-grid align-items-center mb-5 mt-4">
              <Col lg="5">
                <p className="text-black-50 mb-2">
                 We're so happy to have you here. If you're interested in our works, that means you have a great taste in seeing pictures through photography just like us. Follow our media social below.
                </p>
                <h4 className=" mb-0 font-weight-light mt-5">
                  Let's get in touch.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
               <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="success"
                  href="https://wa.me/+6285156081975"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-whatsapp" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                 Chat us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="https://www.facebook.com/sekawan.stories"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="dribbble"
                  href="https://www.instagram.com/sekawan_stories/"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-instagram" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                 Follow us
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © 2020{" "}
                  <a
                    href="/#"
                    target="_blank"
                    className="text-black-50"
                  >
                    Sekawan Stories
                  </a>
                  .
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Contact;
