import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import styled, { keyframes } from "styled-components";
import { SmileOutlined, SolutionOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";

const Container = styled.div`
  text-align: center;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedButton = styled(Button)`
  display: flex;
  padding-top: 1rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease forwards;
  width: 6rem;
  height: 6rem;
  text-align: center;

  &:nth-child(1) {
    animation-delay: 0.2s;
  }
  &:nth-child(2) {
    animation-delay: 0.4s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
  &:nth-child(4) {
    animation-delay: 0.8s;
  }
  &:nth-child(5) {
    animation-delay: 1s;
  }
`;

const RoleSelector = () => {
  const navigate = useNavigate();
  const [isButtonsVisible, setIsButtonsVisible] = useState(false);

  useEffect(() => {
    setIsButtonsVisible(true);
  }, []);

  const handleRoleSelection = (role) => {
    navigate(`/signup/${role}`);
  };

  return (
    <Container>
      <h2>어떤 사용자 인가요??</h2>
      {isButtonsVisible && (
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <AnimatedButton onClick={() => handleRoleSelection(1)}>
            <UserOutlined />
            <p>학생</p>
          </AnimatedButton>
          <AnimatedButton onClick={() => handleRoleSelection(2)}>
            <SolutionOutlined />
            <p>선생님</p>
          </AnimatedButton>
          <AnimatedButton onClick={() => handleRoleSelection(3)}>
            <TeamOutlined />
            <p>부모님</p>
          </AnimatedButton>
          <AnimatedButton onClick={() => handleRoleSelection(4)}>
            <SmileOutlined />
            <p>예비 재학생</p>
          </AnimatedButton>
          <AnimatedButton style={{ display: "none" }}></AnimatedButton>
        </div>
      )}
    </Container>
  );
};

export default RoleSelector;
