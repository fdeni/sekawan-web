import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

class Cards extends React.Component {
  render() {
    const { title, price ,bodies, image} = this.props;
    return (
      <>
        <Card style={{ width: "18rem" , height: "900px", overflowY: "auto"}}>
        <CardImg
            alt=""
            src={image}
            top
          />
          <CardBody>
          <Button
              color="primary"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Booking
            </Button>
            <div className="mt-2">
            <CardTitle><h3><strong>{title}</strong></h3></CardTitle>
            <CardTitle><strong>{price}</strong></CardTitle>
            {bodies.map((body, index) => (
              <CardText key={index}>{body}</CardText>
            ))}
            </div>
            
          </CardBody>
        </Card>
      </>
    );
  }
}

export default Cards;
