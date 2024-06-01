import loadPortofolioImages from "data/database/StorageDatasource";
import React from "react";
import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/portofolio/1.jpg"),
    className: "img-fluid",
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/portofolio/2.jpg"),
    className: "img-fluid",
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/portofolio/3.jpg"),
    className: "img-fluid",
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/portofolio/4.jpg"),
    className: "img-fluid",
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/portofolio/5.jpg"),
    className: "img-fluid",
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/portofolio/6.jpg"),
    className: "img-fluid",
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/portofolio/7.jpg"),
    className: "img-fluid",
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/portofolio/8.jpg"),
    className: "img-fluid",
    altText: "",
    caption: "",
    header: "",
  },
  {
    src: require("assets/img/portofolio/9.jpg"),
    className: "img-fluid",
    altText: "",
    caption: "",
    header: "",
  },
];

class Portofolio extends React.Component {
  state = {
    listImages: []
  };

  async componentDidMount() {
    const urls = await loadPortofolioImages();
    // console.log(listImages)
    this.setState({ listImages: urls });
  }

  render() {
    console.log(this.state.listImages)
    return (
      <>
        <section className="section-portofolio section-shaped" lg="6">
          <div className="shape-container d-flex align-items-center">
            {/* <UncontrolledCarousel items={this.state.listImages} /> */}
            <UncontrolledCarousel items={items} />
          </div>
        </section>
        <section className="section section-sm section-shaped">
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row className="justify-content-center mt-4">
                <Col lg="7">
                  <h2 className="display-4 text-black-50 text-center">
                    <span>Every Couple is Journey</span>
                  </h2>
                  <p className="text-black-50 mt-3 text-center">
                    Our passion for photography and videography capture moments with honesty and pure emotions, and we love telling those stories for you.
                    we believe that every couple has unique stories to tell.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>

          <Container className="shape-container d-flex align-items-center mt-5">
            <div className="col px-0">
              <Row className="align-items-center justify-content-center">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe title="portofolio" class="embed-responsive-item" src="https://www.youtube.com/embed/xFC8YYO5gy4?si=M-ZrnYHiFyFF3ewI" allowfullscreen></iframe>
                </div>
                {/* <Col className="text-center" lg="6">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/brand/sekawan-logo.png")}
                    style={{ width: "20%" }}
                  />

                </Col> */}
              </Row>
            </div>
          </Container>

        </section>
      </>
    );
  }
}

export default Portofolio;