import React from "react";
import { TermWrapper } from "../styles/TermsStyle";
import Service from "../components/Terms/Service";
import Private from "../components/Terms/Private";
import YoungPrivate from "../components/Terms/YoungPrivate";
import TermBtn from "../components/Terms/TermBtn";
import { Col, Row } from "antd";

const Terms = () => {
  return (
    <TermWrapper>
      <Row justify="center">
        <Col xs={24} md={18}>
          <Service />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} md={18}>
          <Private />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} md={18}>
          <YoungPrivate />
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} md={18}>
          <TermBtn />
        </Col>
      </Row>
    </TermWrapper>
  );
};

export default Terms;
