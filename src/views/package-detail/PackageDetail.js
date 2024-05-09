import React from "react";
import db from '../../data/database/Firestore'
import { doc, getDoc } from 'firebase/firestore';
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Cards from "components/CardLink.js"
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Contact from "views/landing-page/Contact";
import withRouter from "components/WithRouterWrapper";



class PageDetail extends React.Component {

  state = {
    service: []
  };

  async componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    const id = this.props.router.params.id;
    const services = doc(db, 'services', id);
    const servicesSnapshot = await getDoc(services);
    let data = servicesSnapshot.data();
    console.log(data)
    this.setState({ service: [data] });
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-light">
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
                  <Row className="justify-content-center">
                    {/* {this.state.service.map(data => <p>{data.name}</p>)} */}

                    {
                      this.state.service.map((item) => (
                        item.packages.map((prop) => (
                          <Col className="col-6 col-md-3">
                            <Cards
                              image={require("assets/img/card/wedding.jpg")}
                              title={prop.title}
                              price={prop.price}
                              packageItem={prop}
                              bodies={prop.items}
                            />

                          </Col>
                        )
                        )
                      ))
                    }

                  </Row>
                </div>
              </div>

            </Container>
          </section>

        </main>

        <Contact />
      </>
    );
  }
}

export default withRouter(PageDetail);
