
import React from "react";

// reactstrap components
// import { Container, Row } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";

// index page sections
import OurService from "./landing-page/OurService.js";
import About from "./landing-page/About.js";

import Contact from "./landing-page/Contact.js";
import Portofolio from "./landing-page/Portofolio.js";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <section id='service'><OurService /></section>
          <section id='about'><About /></section>
          <section id='portofolio'><Portofolio /></section>
          <section id='contact'><Contact /></section>
        </main>
      </>
    );
  }
}

export default Index;
