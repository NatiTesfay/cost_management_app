import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function HighestOrderDay({ items }) {

  const WeekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let OrdersDate = items.map(
    (item) => new Date(item.orderInfo.purchaserInfo.date)
  );

  let HighestOrderSum = items?.map((item) => item.orderInfo.purchaseSum);

  let HighestOrderObj = items?.find(
    (item) => item.orderInfo.purchaseSum === Math.max(...HighestOrderSum)
  );

  let HighObjDate = HighestOrderObj?.orderInfo.purchaserInfo.date;

  let date = new Date(HighObjDate);
  const day = WeekDays[date.getDay()];

  return (
    <div>
      <h6>The day with the highest num of orders per day</h6>
      <h1> {day} </h1>
      <h1>{Math.max(...HighestOrderSum)}</h1>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <h4>
            probability for
            <br /> next week
          </h4>
          <p> {WeekDays[new Date().getDay()]} </p>
        </Col>
        <Col>
          <h4>past stats</h4>
          <p> last month: {`${WeekDays[new Date().getDate()]}`}</p>
          <p> last week: {`${OrdersDate[4]}`}</p>
          <p> 2 weeks ago: {`${OrdersDate[2]}`}</p>
        </Col>
      </Row>
    </div>
  );
}
