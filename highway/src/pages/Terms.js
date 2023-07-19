import React, { useState } from "react";
import { Checkbox, Form, Modal } from "antd";
import TermsService from "../utils/TermsService";
import TermPravate from "../utils/TermPravate";
import TermYoungPrivate from "../utils/TermYoungPrivate";
import { agreeValidate } from "../utils/signUpValidator";
import { RightOutlined } from "@ant-design/icons";

const Terms = ({ onFinish }) => {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [privateOpen, setPrivageOpen] = useState(false);
  const [youngOpen, setYoungOpen] = useState(false);

  return (
    <Form onFinish={onFinish} rules={[{ validator: agreeValidate }]}>
      <Form.Item name="service">
        <Checkbox>
          <div>
            이용약관(필수)
            <RightOutlined onClick={() => setServiceOpen(true)} />
          </div>
        </Checkbox>
        <Modal
          centered
          open={serviceOpen}
          onOk={() => setServiceOpen(false)}
          onCancel={() => setServiceOpen(false)}
          width={1000}
        >
          <TermsService />
        </Modal>
      </Form.Item>
      <Form.Item name="private">
        <Checkbox>
          <div>
            개인정보 동의(필수)
            <RightOutlined onClick={() => setPrivageOpen(true)} />
          </div>
        </Checkbox>
        <Modal
          centered
          open={privateOpen}
          onOk={() => setPrivageOpen(false)}
          onCancel={() => setPrivageOpen(false)}
          width={1000}
        >
          <TermPravate />
        </Modal>
      </Form.Item>
      <Form.Item name="youngPrivate">
        <Checkbox>
          <div>
            청소년 개인정보 동의(필수)
            <RightOutlined onClick={() => setYoungOpen(true)} />
          </div>
        </Checkbox>
        <Modal
          centered
          open={youngOpen}
          onOk={() => setYoungOpen(false)}
          onCancel={() => setYoungOpen(false)}
          width={1000}
        >
          <TermYoungPrivate />
        </Modal>
      </Form.Item>
    </Form>
  );
};

export default Terms;
