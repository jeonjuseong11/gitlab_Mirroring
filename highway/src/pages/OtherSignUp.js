import { AutoComplete, Button, Form, Radio, Select, Space } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CHECK_DUPLICATE_ID_REQUEST,
  SIGNUP_REQUEST,
} from "../constants/actionTypes";
import {
  ButtonWrapper,
  CancelBtn,
  StudentSignUpBtn,
  SignUpForm,
  SignUpInput,
  SignUpInputPassword,
  SignUpWrapper,
} from "../styles/SignUpStyle";
import {
  idRegExp,
  schoolValidate,
  validateAge,
  validateEmail,
  validateId,
  validateNickname,
  validatePassword,
} from "../utils/signUpValidator";
import { useSelector } from "react-redux";
import { error, info } from "../utils/Message";
const SignUp = () => {
  const { schools } = useSelector((state) => state.school);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const { idValid } = useSelector((state) => state.user);

  useEffect(() => {
    console.log(idValid);
  }, [idValid]);

  const onFinish = (values) => {
    dispatch({
      type: SIGNUP_REQUEST,
      data: values,
    });
    info("회원가입 성공! 로그인창으로 이동합니다");
    navigate("/login");
  };

  const onCheckUserId = () => {
    const userIdValue = form.getFieldValue("uid");
    if (!userIdValue) {
      error("아이디를 입력해주세요");
    } else if (!idRegExp.test(userIdValue)) {
      error("아이디는 1~20자이며 영어와 숫자 조합으로 입력해주세요");
    } else {
      dispatch({
        type: CHECK_DUPLICATE_ID_REQUEST,
        data: userIdValue,
      });
      if (idValid) {
        info("사용가능한 아이디입니다.");
      }
    }
    console.log(idValid);
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
    <SignUpWrapper>
      <SignUpForm
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          prefix: "86",
        }}
        scrollToFirstError
      >
        <h2>재학생 회원가입</h2>
        <label>아이디</label>
        <Form.Item
          name="uid"
          tooltip="아이디는 영어로 시작해여 숫자와의 조합으로 작성해주세요"
          rules={[{ validator: validateId }]}
          hasFeedback
          validateStatus={idValid.data ? "success" : "error"}
        >
          <Space.Compact style={{ width: "100%" }}>
            <SignUpInput
              allowClear
              placeholder="아이디를 입력해주세요"
              disabled={idValid.data}
            />
            <Button
              onClick={onCheckUserId}
              disabled={idValid.data}
              style={{ height: "3rem" }}
            >
              중복확인
            </Button>
          </Space.Compact>
        </Form.Item>
        {idValid.data ? (
          <p
            style={{
              color: "green",
              marginTop: "-1.5rem",
              marginBottom: "0rem",
            }}
          >
            사용가능한 아이디입니다
          </p>
        ) : (
          <></>
        )}
        <label>비밀번호</label>
        <Form.Item
          name="pwd"
          rules={[
            {
              validator: validatePassword,
            },
          ]}
          hasFeedback
        >
          <SignUpInputPassword
            allowClear
            placeholder="비밀번호를 입력해주세요(8~50)"
          />
        </Form.Item>
        <label>비밀번호 확인</label>
        <Form.Item
          name="confirm"
          dependencies={["userPw"]}
          hasFeedback
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value) {
                  return Promise.reject(new Error("비밀번호를 확인해주세요."));
                }
                if (getFieldValue("pwd") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("비밀번호가 일치하지 않습니다.")
                );
              },
            }),
          ]}
        >
          <SignUpInputPassword
            allowClear
            placeholder="비밀번호를 입력해주세요"
          />
        </Form.Item>
        <label>닉네임</label>
        <Form.Item name="name" rules={[{ validator: validateNickname }]}>
          <SignUpInput allowClear placeholder="닉네임을 입력해주세요" />
        </Form.Item>
        <label>이메일</label>
        <Form.Item name="email" rules={[{ validator: validateEmail }]}>
          <AutoComplete options={emailOptions} onChange={onEmailChange}>
            <SignUpInput placeholder="이메일을 입력해주세요" />
          </AutoComplete>
        </Form.Item>
        <label>나이</label>
        <Form.Item name="age" rules={[{ validator: validateAge }]}>
          <SignUpInput type="number" placeholder="나이를 입력해주세요" />
        </Form.Item>
        <label>성별</label>
        <div style={{ display: "flex", height: "3rem", alignItems: "center" }}>
          <Form.Item
            name="gender"
            rules={[
              {
                required: true,
                message: "성별를 선택해주세요",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="male">남성</Radio>
              <Radio value="female">여성</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        <Form.Item>
          <ButtonWrapper>
            <StudentSignUpBtn type="primary" htmlType="submit">
              가입하기
            </StudentSignUpBtn>
            <CancelBtn
              onClick={() => {
                navigate(`/signup`);
              }}
            >
              취소하기
            </CancelBtn>
          </ButtonWrapper>
        </Form.Item>
      </SignUpForm>
    </SignUpWrapper>
  );
};
export default SignUp;
