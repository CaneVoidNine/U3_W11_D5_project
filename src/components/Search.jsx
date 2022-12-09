import React from "react";

import MySideBar from "./MySideBar";
import MyPlayer from "./MyPlayer";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import MySearch from "./MySearch";
export default function Search() {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <MySideBar />
        </Col>
        <Col md={10}>
          <MySearch />
        </Col>
      </Row>
      <MyPlayer />
    </Container>
  );
}
