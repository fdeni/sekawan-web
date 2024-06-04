import {isMobile} from 'react-device-detect';
import { UncontrolledCarousel } from 'reactstrap';

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
  
  const itemsLandscape = [
    {
      src: require("assets/img/portofolio/landscape1.jpg"),
      className: "img-fluid",
      altText: "",
      caption: "",
      header: "",
    },
    {
      src: require("assets/img/portofolio/landscape2.jpg"),
      className: "img-fluid",
      altText: "",
      caption: "",
      header: "",
    },
    {
      src: require("assets/img/portofolio/landscape3.jpg"),
      className: "img-fluid",
      altText: "",
      caption: "",
      header: "",
    },
    {
      src: require("assets/img/portofolio/landscape4.jpg"),
      className: "img-fluid",
      altText: "",
      caption: "",
      header: "",
    },
    {
      src: require("assets/img/portofolio/landscape5.jpg"),
      className: "img-fluid",
      altText: "",
      caption: "",
      header: "",
    },
    {
      src: require("assets/img/portofolio/landscape6.jpg"),
      className: "img-fluid",
      altText: "",
      caption: "",
      header: "",
    },
    {
      src: require("assets/img/portofolio/landscape7.jpg"),
      className: "img-fluid",
      altText: "",
      caption: "",
      header: "",
    },
    {
      src: require("assets/img/portofolio/landscape8.jpg"),
      className: "img-fluid",
      altText: "",
      caption: "",
      header: "",
    },
    {
      src: require("assets/img/portofolio/landscape9.jpg"),
      className: "img-fluid",
      altText: "",
      caption: "",
      header: "",
    },
  ];
const PortofolioCorousel = () => {
    console.log('isMobilee======'+isMobile)
    if(isMobile) {
        return (
            <div> <UncontrolledCarousel items={items} /></div>
        )
    }
    return (
        <div> <UncontrolledCarousel items={itemsLandscape} /></div>
    );
};

export default PortofolioCorousel;