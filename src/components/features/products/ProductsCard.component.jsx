import './product.css'
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SaleInfo from "./SaleInfo.component";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function ProductsCard({ items }) {

  return (
    <>
      <Row xs={1} md={3} className="g-4">
        {items ? (
          items.slice(0,3).map(
            ({
              ProductName,
              img,
              department,
              price,
              quantity,
              isOnSale,
              sale,
              updatedAt,
              createdAt,
            },index) => (
              <Col sm='3'  key={index} >
                <Card >
                  <Card.Img variant="top" src={img} />
                  <Card.Body >
                    <Card.Title>{ProductName}</Card.Title>
                    <Card.Text>
                      <b>{department.departmentName}</b><br/>
                      <span>
                        price:{" "}
                        {isOnSale ? (
                          <span>
                            <b style={{ textDecoration: "line-through" }}>
                              {price}
                            </b>
                            {sale.salePrice}
                          </span>
                        ) : (
                          <span>{price}</span>
                        )}
                      </span><br/>
                      <span>quantity:<b>{quantity}</b></span><br/>
                      <span>added in: {createdAt.slice(0,11)}</span><br/>
                      <span>
                        sale:{" "}
                        {isOnSale ? (
                          <SaleInfo key={sale._id} info={sale} />
                        ) : (
                          <span>{ isOnSale }</span>
                        )}
                      </span><br/>
                      <span>last update: {updatedAt.slice(0,11)}</span><br/>
                    </Card.Text>
                    <Button variant="secondary">MORE DATA</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          )
        ) : (
          <Card style={{ width: "10rem" }}>
            <Card.Body>no products was found</Card.Body>
          </Card>
        )}
      </Row>
    </>
  );
}
