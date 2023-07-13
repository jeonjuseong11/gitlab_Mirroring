import React, { useState } from "react";
import { TermWrapper } from "../styles/TermsStyle";
import Service from "../components/Terms/Service";
import Private from "../components/Terms/Private";
import YoungPrivate from "../components/Terms/YoungPrivate";
import TermBtn from "../components/Terms/TermBtn";
import { Col, Modal, Row } from "antd";
import TermsContents from "../utils/TermsContents";

const Terms = () => {
  const [open, setOpen] = useState(false);

  return (
    <TermWrapper>
      <Row justify="center">
        <Col xs={12} md={9} style={{ border: "1px solid blakc" }}>
          <p style={{ color: "black" }}>이용약관(필수)</p>
          <TermsContents setOpen={setOpen} open={open} />
        </Col>
      </Row>
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
