import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, List, Menu, Row, Segmented, Tag } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import SchoolList from "./SchoolList";

const UserProfile = () => {
  const { me } = useSelector((state) => state.user);
  const { schools } = useSelector((state) => state.school);
  const [selection, setSelection] = useState("학교");
  const data = [1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <Row gutter={[16, 16]} justify="center" style={{ paddingTop: "1rem" }}>
        <Col xs={24} md={4}>
          <div style={{ borderRadius: "10px", backgroundColor: "white" }}>
            <Menu style={{ paddingBottom: "1rem", borderRadius: "10px" }}>
              <div style={{ marginBottom: "2rem" }}>
                <Avatar size={100} icon={<UserOutlined />} style={{ margin: "2rem" }} />
                <h2>유저 닉네임 님</h2>
              </div>
              <Menu.Item>회원 정보</Menu.Item>
              <Menu.Item>나의 관심</Menu.Item>
              <Menu.Item>최근 기록</Menu.Item>
            </Menu>
          </div>
        </Col>
        <Col xs={24} md={11}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              textAlign: "left",
              padding: "2rem",
            }}
          >
            <h3>최근 본 {selection}</h3>
            최근 본 {selection}은 가장 마지막으로 본 {selection == "학교" ? 5 : 30}개까지 볼 수
            있습니다.
            <div>
              <Segmented
                block
                options={["학교", "게시물"]}
                value={selection}
                style={{ width: "100%", marginTop: "1rem" }}
                onChange={setSelection}
              />
              {selection == "학교" ? <SchoolList schools={schools} /> : <></>}
              {selection == "게시물" ? (
                <List
                  dataSource={data}
                  pagination={{
                    align: "center",
                    onChange: (page) => {
                      console.log(page);
                    },
                    pageSize: 5,
                  }}
                  renderItem={(item) => (
                    <List.Item>
                      <Tag>[ITEM]</Tag> {item}
                    </List.Item>
                  )}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </Col>
        <Col xs={24} md={11}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              textAlign: "left",
              padding: "2rem",
            }}
          >
            <h3 style={{ margin: "0" }}>내가 작성한 게시물</h3>
            <List
              dataSource={data}
              pagination={{
                align: "center",
                onChange: (page) => {
                  console.log(page);
                },
                pageSize: 5,
              }}
              renderItem={(item) => (
                <List.Item>
                  <Tag>[ITEM]</Tag> {item}
                </List.Item>
              )}
            />
          </div>
        </Col>
        <Col xs={24} md={11}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              textAlign: "left",
              padding: "2rem",
            }}
          >
            <h3 style={{ margin: "0" }}>회원 정보</h3>
            <p>이름</p> <p>닉네임</p> <p>이메일</p> <p>성별</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserProfile;
