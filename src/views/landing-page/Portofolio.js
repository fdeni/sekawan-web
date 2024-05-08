import React from "react";
import {  Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
    {
      src: require("assets/img/team/team-1.jpg"),
      altText: "",
      caption: "",
      header: "",
    },
    {
      src: require("assets/img/team/team-2.jpg"),
      altText: "",
      caption: "",
      header: "",
    },
  ];

class Portofolio extends React.Component {
    render() {
      return (
        <>
          <section className="section section-shaped">
            <div className="shape shape-style-1 ">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-md">
              {/* <Row className="justify-content-between align-items-center">
                <Col className="mb-5 mb-lg-0" lg="5">
                <img
                        alt="..."
                        className="img-fluid"
                        src={require("assets/img/brand/sekawan-logo.png")}
                        style={{ width: "40%" }}
                      />
                  <p className="text-black-50 mt-4">
                  We are a story telling wedding photography & cinematic video.
                  </p>
  
                  <p className="text-black-50 mt-1">
                  We capture moments with honesty and pure emotions, and we love telling those stories for you.
                  </p>
                  <p className="text-black-50 mt-1">
                  we believe that every couple has unique stories to tell.
                  </p>
  
                  <p className="text-black-50 mt-1">
                  Stories are like journeys, they have different paths and chapters. Let us be a part of your journey.
                  </p>
  
                  <p className="text-black-50 mt-1">
                  With Love,
                  </p>
                  <p className="text-black-50 mt-2">
                  Sekawan Stories.
                  </p>
  
                  <p className="text-white mt-4"></p>
                  <p className="text-white mt-4"></p>
                  <p className="text-white mt-4"></p>
  
                </Col>
                <Col className="mb-lg-auto" lg="6">
                  <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                    <UncontrolledCarousel items={items} />
                  </div>
                </Col>
              </Row> */}
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon className="fill-white" points="2560 0 2560 100 0 100" />
              </svg>
            </div>
          </section>
        </>
      );
    }
  }
  
  export default Portofolio;