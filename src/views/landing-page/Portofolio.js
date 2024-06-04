import loadPortofolioImages from "data/database/StorageDatasource";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import PortofolioCorousel from "components/PortofolioCorousel";



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
            <PortofolioCorousel></PortofolioCorousel>
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
        </section>
      </>
    );
  }
}

export default Portofolio;