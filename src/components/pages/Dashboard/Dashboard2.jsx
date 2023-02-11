import React, { useContext } from "react";
import { usersContext } from "../../../context/UsersProvider.component";
import { productsContext } from "../../../context/ProductsProvider.component";
import DoughnutChart from "../../features/Charts/DoughnutChart.component";
import GeoChart from "../../features/Charts/GeoChart.component";
import SmartTable from "../../features/Table/SmartTable.component";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Dashboard2() {
  const { users } = useContext(usersContext);
  const { products } = useContext(productsContext);


  return (
    <>
      <br />
      <Container>
        <Row xs={1} md={2} className="g-4 justify-content-md-center mt-5 pt-5">
          <Col xs lg="6">
            <div className="d-block">
              <GeoChart items={users} />
            </div>
          </Col>
        </Row>
        <br />
        <Col>
            <DoughnutChart items={products} />
          </Col>

        <Col xs lg="12">
          <div className="mt-5 pt-5">
            <SmartTable data={users} />
          </div>
        </Col>
      </Container>
    </>
  );
}
export default Dashboard2;

