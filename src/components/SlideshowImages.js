import React from 'react';
import { Fade } from 'react-slideshow-image';

const fadeImages = [
  require("assets/img/theme/photo.jpg"),
  require("assets/img/team/team-2.jpg"),
];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  autoplay:true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

class Slideshow extends React.Component {
  render() {
    return (
      <div>
        <Fade {...fadeProperties}>
          <div className="each-fade">
            <div className="image-container" >
              <img src={fadeImages[0]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[1]} />
            </div>
          </div>
        </Fade>
      </div>
    )
  }
}

export default Slideshow;