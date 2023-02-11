import React, { useContext } from "react";
import { ordersContext } from "../../../context/OrdersProvider.component";
import OrderPerMonthChart from "../../features/Charts/OrderPerMonthChart.component";
import OrderPerDayChart from "../../features/Charts/OrderPerDayChart.component";
import OrderPerYearChart from "../../features/Charts/OrderPerYearChart";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export default function Dashboard() {
  const { orders } = useContext(ordersContext);

  return (
    <>
      <br />
      <Container>
        <Row>
          <Col>
            <OrderPerMonthChart items={orders} />
          </Col>

          <Col>
            <OrderPerDayChart items={orders} />
          </Col>
          <Col>
            <OrderPerYearChart items={orders} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
