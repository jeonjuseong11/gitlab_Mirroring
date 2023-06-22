import { Avatar, Button, Col, List, Menu, Row } from "antd";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LOAD_POSTS_REQUEST } from "../constants/actionTypes";
export const data = [
  {
    id: 1,
    title: "User1",
    good: 1,
  },
  {
    id: 2,
    title: "User2",
    good: 2,
  },
];
const SchoolBoard = () => {
  const { category } = useParams();
  useEffect(() => {
    loadPosts();
  }, []);
  const dispatch = useDispatch();
  const loadPosts = () => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  };
  const [title, setTItle] = useState("");
  useEffect(() => {
    // console.log(category);
    if (category == "all") {
      setTItle("커뮤니티");
    } else if (category == "free") {
      setTItle("자유게시판");
    } else if (category == "question") {
      setTItle("질문게시판");
    } else if (category == "project") {
      setTItle("프로젝트 모집");
    }
  }, [category]);

  const location = useLocation();
  return (
    <div>
      <Row gutter={[16, 16]} justify="center" style={{ paddingTop: "1rem" }}>
        <Col xs={23} md={15}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <h1 style={{ margin: "0", marginLeft: "1rem" }}>{title}</h1>
            <Link to="/schoolboard/post">
              <Button
                type="primary"
                style={{
                  width: "10rem",
                  height: "3rem",
                  display: "inline-block",
                  borderRadius: "50px",
                }}
              >
                글쓰기
                <EditOutlined />
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 16]} justify="center" style={{ paddingTop: "1rem" }}>
        <Col xs={24} md={4}>
          <Menu
            className="custom-menu"
            selectedKeys={location.pathname}
            style={{
              paddingBottom: "1rem",
              border: "0",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <Menu.Item key="/schoolboard">
              <NavLink to="/schoolboard">전체</NavLink>
            </Menu.Item>
            <Menu.Item key="/schoolboard/free">
              <NavLink to="/schoolboard/free">😀 자유게시판</NavLink>
            </Menu.Item>
            <Menu.Item key="/schoolboard/question">
              <NavLink to="/schoolboard/question">고민게시판</NavLink>
            </Menu.Item>
            <Menu.Item key="/schoolboard/project">
              <NavLink to="/schoolboard/project">프로젝트 모집</NavLink>
            </Menu.Item>
          </Menu>
          <div
            style={{
              border: "1px solid #f2f2f2",
              borderRadius: "10px",
              padding: "1rem",
              marginTop: "1rem",
            }}
          >
            <h3 style={{ marginTop: "0", textAlign: "left" }}>하이웨이 Top user</h3>
            <List
              className="custom-list"
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                      />
                    }
                    title={
                      <p
                        style={{
                          marginTop: "0.4rem",
                          marginLeft: "1rem",
                          fontSize: "0.8rem",
                          fontWeight: "500",
                          textAlign: "left",
                        }}
                      >
                        {item.title}
                      </p>
                    }
                  />
                  <p
                    style={{
                      marginTop: "0.4rem",
                      marginLeft: "1rem",
                      fontSize: "0.8rem",
                      fontWeight: "500",
                    }}
                  >
                    {item.good}
                  </p>
                </List.Item>
              )}
            />
          </div>
        </Col>
        <Outlet />
      </Row>
    </div>
  );
};

export default SchoolBoard;
