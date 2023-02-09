import React, { useContext } from "react";
import { productsContext } from "../../../context/ProductsProvider.component";
import { ordersContext } from "../../../context/OrdersProvider.component";
import { usersContext } from "../../../context/UsersProvider.component";
import ProductsCard from "../../features/products/ProductsCard.component";
import VerticalBarChart from "../../features/Charts/VerticaBarChart.components";
import OrderPerMonthChart from "../../features/Charts/OrderPerMonthChart.component";
import DoughnutChart from "../../features/Charts/DoughnutChart.component";
import OrderPerDayChart from "../../features/Charts/OrderPerDayChart.component";
import HighestOrderDay from "../../features/orders/HighestOrderDay.component";
import GeoChart from "../../features/Charts/GeoChart.component";
import SmartTable from "../../features/Table/SmartTable.component";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card, CardContent } from "@mui/material";
export default function Dashboard() {
  const { products } = useContext(productsContext);
  const { orders } = useContext(ordersContext);
  const { users } = useContext(usersContext);
  return (
    <>
      <br />
      <Container>
        <Row>
          <Col>
            <VerticalBarChart items={products} />
          </Col>

          <Col>
            <OrderPerMonthChart items={orders} />
          </Col>

          <Col>
            <OrderPerDayChart items={orders} />
          </Col>
        </Row>

        <Row xs={1} md={2} className="g-4 justify-content-md-center mt-5 pt-5">
          <Col>
            <DoughnutChart items={products} />
          </Col>

          <Col xs lg="6">
            <div  className="d-block">
              <GeoChart items={users} />
            </div>
          </Col>
        </Row>
        <br/>
        <Row xs={1} md={2} className=" justify-content-md-center my-5 py-5">
          <Col className="mb-5 mt-5 pt-5 pb-5 d-block">
            <div >
              <HighestOrderDay className="" items={orders} />
            </div>
          </Col>

          <Col className="mt-5 pt-5">
            <ProductsCard items={products} />
          </Col>

        </Row>
     

          <Col xs lg="12" >
            <div  className="mt-5 pt-5">
            <SmartTable data={users} />
            </div>
          </Col>
      </Container>
    </>
  );
}
