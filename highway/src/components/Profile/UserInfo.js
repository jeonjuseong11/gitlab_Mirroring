import { Avatar, Button, Col } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const { me } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <>
      <Col xs={24} md={11}>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            textAlign: "left",
            padding: "2rem",
          }}
        >
          <h3 style={{ margin: "0" }}>기본 정보</h3>
          <table style={{ marginTop: "1rem", width: "100%", height: "15rem" }}>
            <tbody>
              <tr>
                <th style={{ width: "5rem" }}>이름</th>
                <td>{me?.userName}</td>
              </tr>
              <tr>
                <th>아이디</th>
                <td>{me?.userId}</td>
              </tr>
              <tr>
                <th>이메일</th>
                <td>{me?.userEmail}</td>
              </tr>
              <tr>
                <th>성별</th>
                <td>{me?.userGender}</td>
              </tr>
              <tr>
                <th>소속학교</th>
                <td>{me?.schoolName}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            textAlign: "left",
            marginTop: "1rem",
            padding: "2rem",
          }}
        >
          <h3 style={{ marginTop: "0" }}>소속학교</h3>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar size={128}>학교로고</Avatar>
            <div style={{ marginLeft: "2rem" }}>
              <p>학교명</p>
              <h3>{me?.schoolName}</h3>
            </div>
          </div>
        </div>
        <Button danger>계정 탈퇴</Button> */}
      </Col>
    </>
  );
};

export default UserInfo;
