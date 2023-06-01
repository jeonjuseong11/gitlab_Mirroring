import { AutoComplete, Button, Checkbox, Form, Radio, Modal } from "antd";
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
  SmallFormItem,
  NickNameInput,
  DoubleCheckButton,
  AgeInput,
  SignUpFormItem,
} from "../styles/SignUpStyle";
import {
  agreeValidate,
  idRegExp,
  validateEmail,
  validateId,
  validateNickname,
  validatePassword,
} from "../utils/signUpValidator";
import { useSelector } from "react-redux";
import Terms from "../components/Terms/Terms";
const SignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const identity = "student";

  const { idValid } = useSelector((state) => state.user);
  useEffect(() => {
    console.log(idValid);
  }, [idValid]);

  const onFinish = (values) => {
    console.log(values);
    dispatch({
      type: SIGNUP_REQUEST,
      data: values,
    });
    alert("회원가입 성공! 로그인창으로 이동합니다");
    navigate("/login");
  };

  const onCheckUserId = () => {
    const userIdValue = form.getFieldValue("id");
    if (!userIdValue) {
      alert("아이디를 입력해주세요");
    } else if (!idRegExp.test(userIdValue)) {
      alert("아이디는 1~20자이며 영어와 숫자 조합으로 입력해주세요");
    } else {
      dispatch({
        type: CHECK_DUPLICATE_ID_REQUEST,
        data: userIdValue,
      });
      alert("사용가능한 아이디입니다.");
    }
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
        <SignUpFormItem
          name="userId"
          tooltip="아이디는 영어로 시작해여 숫자와의 조합으로 작성해주세요"
          rules={[{ validator: validateId }]}
          hasFeedback
          validateStatus={idValid ? "success" : "error"}
          style={{}}
        >
          <SignUpInput allowClear placeholder="아이디를 입력해주세요" />
          <DoubleCheckButton onClick={onCheckUserId} disabled={idValid}>
            중복확인
          </DoubleCheckButton>
        </SignUpFormItem>
        <label>비밀번호</label>
        <SignUpFormItem
          name="userPw"
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
        </SignUpFormItem>
        <label>비밀번호 확인</label>
        <SignUpFormItem
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
          <SignUpInputPassword
            allowClear
            placeholder="비밀번호를 입력해주세요"
          />
        </SignUpFormItem>
        <label>닉네임</label>
        <SignUpFormItem
          name="userName"
          rules={[{ validator: validateNickname }]}
        >
          <NickNameInput allowClear placeholder="닉네임을 입력해주세요" />
        </SignUpFormItem>
        <label>이메일</label>
        <SignUpFormItem name="userEmail" rules={[{ validator: validateEmail }]}>
          <AutoComplete options={emailOptions} onChange={onEmailChange}>
            <SignUpInput placeholder="이메일을 입력해주세요" />
          </AutoComplete>
        </SignUpFormItem>

        <SignUpFormItem>
          <SmallFormItem
            name="userSex"
            rules={[
              {
                required: true,
                message: "성별을 선택해주세요!",
              },
            ]}
          >
            <label>성별</label>
            <Form>
              <Radio value="male">남성</Radio>
              <Radio value="female">여성</Radio>
            </Form>
          </SmallFormItem>
          <SmallFormItem name="userAge">
            <label>나이</label>
            <AgeInput placeholder="나이를 입력해주세요!" />
          </SmallFormItem>
        </SignUpFormItem>
        <SignUpFormItem
          name="agreement"
          valuePropName="checked"
          rules={[{ validator: agreeValidate }]}
        >
          <Checkbox>이용약관에 동의합니다</Checkbox>
          <Button type="primary" onClick={showModal}>
            이용약관 보기
          </Button>
          <Modal
            title="이용약관"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1000}
          >
            <Terms />
          </Modal>
        </SignUpFormItem>
        <SignUpFormItem>
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
        </SignUpFormItem>
      </SignUpForm>
    </SignUpWrapper>
  );
};
export default SignUp;
