import React from "react";
import MySideBar from "./MySideBar";
import MyPlayer from "./MyPlayer";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCards from "./MyCards";

import { Container, Row, Col } from "react-bootstrap";
export default function Main() {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <MySideBar />
        </Col>
        <Col md={10}>
          <MyCards />
        </Col>
      </Row>
      <MyPlayer />
    </Container>
  );
}
