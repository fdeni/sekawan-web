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
                        image={require("assets/img/card/wedding.jpg")}
                        title="Single"
                        price="Rp. 1.600.000"
                        bodies={[
                          "7 Jam Sesi Foto",
                          "Unlimited Foto",
                          "150 Foto Edit",
                          "Album 20 Halaman (100 Foto 4R)",
                          "1 Foto Cetak + Bingkai 12R",
                          "All File Flashdisk"
                        ]}
                      />

                    </Col>
                    <Col lg='4' className="pr-4 mb-4">
                      <Cards
                        image={require("assets/img/card/wedding.jpg")}
                        title="Double"
                        price="Rp. 3.300.000"
                        bodies={[
                          "7 Jam Sesi Foto",
                          "Unlimited Foto",
                          "2 Fotografer",
                          "1 Videografer",
                          "200 Foto Edit",
                          "Cinematic 2-4 Menit",
                          "Album 30 Halaman (160 Foto 4R)",
                          "1 Foto Cetak + Bingkai 16R",
                          "All File Flashdiksk & Google Drive"
                        ]}
                      />
                    </Col>
                    <Col lg='4'>
                      <Cards
                        image={require("assets/img/card/wedding.jpg")}
                        title="Special"
                        price="Rp. 2.500.000"
                        bodies={[
                          "Tanpa cetak Album dan Bingkai",
                          "7 Jam Sesi Foto",
                          "Unlimited Foto",
                          "200+ Foto Edit",
                          "2 Fotografer",
                          "1 Videografer",
                          "Cinematic 2 Menit",
                          "All File Google Drive"
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
