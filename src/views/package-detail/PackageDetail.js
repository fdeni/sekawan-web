import React from "react";
import db from '../../data/database/Firestore'
import { collection ,getDocs} from 'firebase/firestore';
// reactstrap components
import { CardImg, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Contact from "views/landing-page/Contact";


class PageDetail extends React.Component {
  async componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
    const services = collection(db, 'services');
    const servicesSnapshot = await getDocs(services);
    const servicesList = servicesSnapshot.docs.map(doc => doc.data());
    console.log(servicesList)
    return servicesList;
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
       
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
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
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                <Card className="card-lift--hover shadow border-0">
                        <CardImg
                          alt="..."
                          src={require("assets/img/card/1.jpg")}
                        ></CardImg>
                      </Card>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <Contact />
      </>
    );
  }
}

export default PageDetail;
