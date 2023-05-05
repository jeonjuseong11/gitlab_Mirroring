import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Card, List, Space } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import styled from "styled-components";

const IconList = styled(Space)`
  gap: 0px !important;
  margin: 0px 3px;
`;
const IconText = ({ icon, text }) => (
  <IconList>
    {React.createElement(icon)}
    {text}
  </IconList>
);

const School = [
  {
    id: 1,
    name: "학교 이름1",
    descript: "학교 랭킹1",
    tags: ["1", "2"],
    comments: [
      {
        id: 1,
        content: "hello",
      },
      {
        id: 2,
        content: "hello",
      },
      {
        id: 1,
        content: "hello",
      },
      {
        id: 2,
        content: "hello",
      },
    ],
    good: 10,
    followList: ["1", "2"],
  },
  {
    id: 2,
    name: "학교 이름2",
    descript: "학교 랭킹2",
    tags: ["2", "1"],
    comments: [],
    good: 9,
    followList: ["1", "2"],
  },
  {
    id: 3,
    name: "학교 이름3",
    descript: "학교 랭킹3",
    tags: ["1", "4"],
    comments: [],
    good: 1,
    followList: ["1", "2"],
  },
  {
    id: 4,
    name: "학교 이름4",
    descript: "학교 랭킹4",
    tags: ["4", "5"],
    comments: [
      {
        id: 1,
        content: "hello",
      },
      {
        id: 2,
        content: "hello",
      },
      {
        id: 4,
        content: "hello",
      },
      {
        id: 1,
        content: "hello",
      },
    ],
    good: 5,
    followList: ["1", "2"],
  },
  {
    id: 5,
    name: "학교 이름5",
    descript: "학교 랭킹5",
    tags: ["5", "7"],
    comments: [
      {
        id: 1,
        content: "hello",
      },
      {
        id: 2,
        content: "hello",
      },
    ],
    good: 15,
    followList: ["1", "2"],
  },
];
const DepartmentList = () => {
  return (
    <div style={{ margin: "0 auto", width: "60%" }}>
      <List
        grid={{ gutter: 16, column: 5 }}
        dataSource={School}
        loadMore={
          <div style={{ textAlign: "center", margin: "10px 0" }}>
            <Button>더 보기</Button>
          </div>
        }
        renderItem={(item) => (
          <List.Item style={{ marginTop: "20px" }}>
            <Card
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
            >
              <Meta
                title={item.name}
                description={
                  <>
                    <p>{item.descript}</p>
                    <IconText
                      icon={StarOutlined}
                      text={item.followList.length}
                      key="list-vertical-star-o"
                    />
                    <IconText
                      icon={LikeOutlined}
                      text={item.good}
                      key="list-vertical-like-o"
                    />
                    <IconText
                      icon={MessageOutlined}
                      text={item.comments.length}
                      key="list-vertical-message"
                    />
                  </>
                }
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default DepartmentList;
