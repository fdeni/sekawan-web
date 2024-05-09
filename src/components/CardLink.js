import React from "react";
import { NumericFormat } from "react-number-format";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Row,
} from "reactstrap";
import withRouter from "./WithRouterWrapper";
import { Link } from "react-router-dom";

class Cards extends React.Component {
  render() {
    const { title, packageItem, price, bodies, image } = this.props;
    return (
      <>
        <Card style={{ width: "15rem", height: "60rem", overflowY: "auto", marginTop: "1.5rem" }}>
          <CardImg
            alt=""
            src={image}
            top
          />
          <CardBody>
            <Row className="justify-content-center">
              <Link to={{
                pathname: "/booking",
                state: {
                  package: packageItem
                }
              }} >
                <Button color="primary">
                  Booking
                </Button>
              </Link>
            </Row>
            <div className="mt-2">
              <Row className="justify-content-center mt-3">
                <CardTitle><h5><strong>{title}</strong></h5></CardTitle></Row>
              <Row className="justify-content-center">
                <CardTitle> <NumericFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></CardTitle>
              </Row>

              {bodies.map((body, index) => (
                <p className="text-black-50" key={index}>{body}</p>
              ))}
            </div>

          </CardBody>
        </Card>
      </>
    );
  }
}

export default withRouter(Cards);
