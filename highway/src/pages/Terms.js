import React, { useState } from "react";
import { Checkbox, Col, Form, Modal, Row } from "antd";
import TermsService from "../utils/TermsService";
import TermPravate from "../utils/TermPravate";
import TermYoungPrivate from "../utils/TermYoungPrivate";
import { useNavigate } from "react-router-dom";
import { BackToSign, GoToToSign } from "../styles/TermsStyle";
import { agreeValidate, validateAge } from "../utils/signUpValidator";
import { SignUpInput } from "../styles/SignUpStyle";

const Terms = () => {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [privateOpen, setPrivageOpen] = useState(false);
  const [youngOpen, setYoungOpen] = useState(false);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/login");
  };
  const onFinish = (values) => {
    navigate("/signup");
  };

  return (
    <Row justify="center">
      <Col xs={23} md={5} style={{ width: "20rem", marginTop: "12rem" }}>
        <Form
          onFinish={onFinish}
          style={{ border: "1px solid black", borderRadius: "10px" }}
        >
          <Form.Item name="service" rules={[{ validator: agreeValidate }]}>
            <Row justify="center">
              <Col xs={12} md={9}>
                <p
                  onClick={() => setServiceOpen(true)}
                  style={{ color: "black" }}
                >
                  이용약관(필수)
                </p>
                <Modal
                  centered
                  open={serviceOpen}
                  onOk={() => setServiceOpen(false)}
                  onCancel={() => setServiceOpen(false)}
                  width={1000}
                >
                  <TermsService />
                </Modal>

                <Checkbox value="service" />
              </Col>
            </Row>
          </Form.Item>
          <Form.Item name="private" rules={[{ validator: agreeValidate }]}>
            <Row justify="center">
              <Col xs={12} md={9}>
                <p
                  onClick={() => setPrivageOpen(true)}
                  style={{ color: "black" }}
                >
                  개인정보 동의(필수)
                </p>
                <Checkbox />
                <Modal
                  centered
                  open={privateOpen}
                  onOk={() => setPrivageOpen(false)}
                  onCancel={() => setPrivageOpen(false)}
                  width={1000}
                >
                  <TermPravate />
                </Modal>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item name="youngPrivate" rules={[{ validator: agreeValidate }]}>
            <Row justify="center">
              <Col xs={12} md={12}>
                <p
                  onClick={() => setYoungOpen(true)}
                  style={{ color: "black" }}
                >
                  개인정보 동의(필수)
                </p>
                <Checkbox />
                <Modal
                  centered
                  open={youngOpen}
                  onOk={() => setYoungOpen(false)}
                  onCancel={() => setYoungOpen(false)}
                  width={1000}
                >
                  <TermYoungPrivate />
                </Modal>
              </Col>
            </Row>
          </Form.Item>

          <Row justify="center">
            <Col xs={24} md={18}>
              <GoToToSign
                type="primary"
                htmlType="submit"
                style={{ width: "40%" }}
              >
                동의하기
              </GoToToSign>
              <BackToSign onClick={handleBack} style={{ width: "40%" }}>
                돌아가기
              </BackToSign>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default Terms;
