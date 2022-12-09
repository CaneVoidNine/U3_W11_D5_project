import React from "react";

import MySideBar from "./MySideBar";
import MyPlayer from "./MyPlayer";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";

import MyArtist from "./MyArtist";
export default function Artist() {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <MySideBar />
        </Col>
        <Col md={10}>
          <MyArtist />
        </Col>
      </Row>
      <MyPlayer />
    </Container>
  );
}
