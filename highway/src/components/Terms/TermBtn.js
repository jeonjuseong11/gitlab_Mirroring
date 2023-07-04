import React from "react";
import { useNavigate } from "react-router-dom";
import { BackToSign, GoToToSign } from "../../styles/TermsStyle";

const TermBtn = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const handleSign = () => {
    navigate("/signup");
  };
  return (
    <>
      <GoToToSign type="primary" onClick={handleSign}>
        동의하기
      </GoToToSign>
      <BackToSign onClick={handleBack}>돌아가기</BackToSign>
    </>
  );
};

export default TermBtn;
