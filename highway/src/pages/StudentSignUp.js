import { AutoComplete, Checkbox, Form, Input, Radio, Select } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonWrapper,
  CancelBtn,
  SignUpBtn,
  SignUpForm,
  SignUpInput,
  SignUpStudentWrapper,
} from "../styles/SignUpStyle";
import {
  agreeValidate,
  validateEmail,
  validateId,
  validateNickname,
  validatePassword,
} from "../utils/signUpValidator";

const SignUp = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("회원가입 데이터: ", values);
  };

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onEmailChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        ["@gmail.com", "@naver.com", "@hanmail.net"].map(
          (domain) => `${value}${domain}`
        )
      );
    }
  };
  const emailOptions = autoCompleteResult.map((email) => ({
    label: email,
    value: email,
  }));
  return (
    <SignUpStudentWrapper>
      <SignUpForm
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: "86",
        }}
        scrollToFirstError
      >
        <h2>회원가입</h2>
        <label>아이디</label>

        <Form.Item
          name="id"
          tooltip="아이디는 영어로 시작해여 숫자와의 조합으로 작성해주세요"
          rules={[{ validator: validateId }]}
        >
          <SignUpInput allowClear placeholder="아이디를 입력해주세요" />
        </Form.Item>
        <label>비밀번호</label>
        <Form.Item
          name="password"
          rules={[
            {
              validator: validatePassword,
            },
          ]}
          hasFeedback
        >
          <SignUpInput allowClear placeholder="비밀번호를 입력해주세요(8~50)" />
        </Form.Item>
        <label>비밀번호 확인</label>
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "비밀번호 확인해주세요",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("비밀번호가 일치하지 않습니다.")
                );
              },
            }),
          ]}
        >
          <SignUpInput allowClear placeholder="비밀번호를 입력해주세요" />
        </Form.Item>
        <label>닉네임</label>
        <Form.Item name="nickname" rules={[{ validator: validateNickname }]}>
          <SignUpInput allowClear placeholder="닉네임을 입력해주세요" />
        </Form.Item>
        <label>이메일</label>
        <Form.Item name="email" rules={[{ validator: validateEmail }]}>
          <AutoComplete options={emailOptions} onChange={onEmailChange}>
            <SignUpInput placeholder="이메일을 입력해주세요" />
          </AutoComplete>
        </Form.Item>
        <label>성별</label>
        <Form.Item
          name="gender"
          rules={[
            {
              required: true,
              message: "성별을 선택해주세요!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="male">남성</Radio>
            <Radio value="female">여성</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[{ validator: agreeValidate }]}
        >
          <Checkbox>
            <a href="">이용약관</a>에 동의합니다
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <ButtonWrapper>
            <SignUpBtn type="primary" htmlType="submit">
              가입하기
            </SignUpBtn>
            <CancelBtn
              onClick={() => {
                navigate(-1);
              }}
            >
              취소하기
            </CancelBtn>
          </ButtonWrapper>
        </Form.Item>
      </SignUpForm>
    </SignUpStudentWrapper>
  );
};
export default SignUp;
