import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import Cards from "components/CardLink.js"

class PageDetail extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />

        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

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
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>

          <section className="section">
            <Container>
              <div className="mt--300">
                <div className="pr-4">
                  <Row>
                    <Col lg='4' className="pr-4 mb-4">
                      <Cards
                        image={require("assets/img/card/prewedding.jpg")}
                        title="Single"
                        price="Rp. 800.000"
                        bodies={[
                          "1 Fotografer",
                          "2 Looks outfit",
                          "2 Lokasi",
                          "1 Jam/Lokasi",
                          "50 Foto Edit",
                          "All File Google Drive"
                        ]}
                      />

                    </Col>
                    <Col lg='4' className="pr-4 mb-4">
                      <Cards
                        image={require("assets/img/card/prewedding.jpg")}
                        title="Double"
                        price="Rp. 2.000.000"
                        bodies={[
                          "2 Fotografer",
                          "2 Looks Outfit",
                          "2 lokasi",
                          "2 jam/lokasi",
                          "70 Foto Edit",
                          "Cinematic 1 Menit",
                          "1 Foto Cetak + Bingkai 16R"
                        ]}
                      />
                    </Col>
                    <Col lg='4'>
                      <Cards
                        image={require("assets/img/card/prewedding.jpg")}
                        title="Sekawan"
                        price="Rp. 5.000.000"
                        bodies={[
                          "3 Lokasi 1 Hari",
                          "Free Studio",
                          "Drone Pilot",
                          "Konsultasi Konsep & Lokasi",
                          "100+ Foto Edit",
                          "Cinematic 2-3 Menit",
                          "30s Teaser Vidio",
                          "All File Flashdisk+drive",
                          "2 Foto Cetak + Bingkai 16R",
                          "4 Crew"
                        ]}
                      />

                    </Col>

                  </Row>


                </div>
              </div>

            </Container>
          </section>

        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default PageDetail;
