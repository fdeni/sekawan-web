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
        <Card style={{ width: "17rem", overflowY: "auto", marginTop: "1.5rem" }} className="shadow border-0">
          <CardImg style={{height:"17rem"}}
            alt=""
            src={image}
            top
          />
          <CardBody>

            <div className="mt-2">
              <Row className="justify-content-center ">
                <h5 className="text-grey">{title}</h5></Row>
              <Row className="justify-content-center">
                <CardTitle> <NumericFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></CardTitle>
              </Row>
              <Row className="justify-content-center mb-3">
                <Link to="/booking" state={{ package: packageItem }} >
                  <Button color="primary" outline type="button" size="md">
                    Booking
                  </Button>
                </Link>
              </Row>
              {bodies.map((body, index) => (
                    <p style={{ fontSize: "0.68rem"}} className="mt-0 mb-0 text-muted" key={index}>{body}</p>
                ))
                }
                

            </div>

          </CardBody>
        </Card>
      </>
    );
  }
}

export default withRouter(Cards);
