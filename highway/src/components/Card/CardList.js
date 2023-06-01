import React from "react";

import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Card, Col, List } from "antd";
import Meta from "antd/es/card/Meta";
import { CardItem, IconText, ListWrapper } from "./CardStyle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DepartsTags from "../DepartsTags";

const CardList = ({ filterValue }) => {
  const { schools } = useSelector((state) => state.school);
  const sliceSchools = schools.slice(0,5);//학교 리스트 렌더링 제한 5개까지
  // const filtedSchool = schools.map((it) => {
  //   const tags = it.tags;
  //   const FiltedTag = tags.map((item) => item.includes(filterValue));
  //   if (FiltedTag.includes(true)) {
  //     return it;
  //   }
  // });
  // const removeUndefinedList = filtedSchool.filter((it) => it !== undefined);
  return (
    <ListWrapper>
      <List
        grid={{ gutter: 8, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 5 }}
        dataSource={sliceSchools}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Col>
              <Link to={`/schooldetail/${item.id}/review`}>
                <Card
                  hoverable
                  bodyStyle={{
                    padding: "1rem",
                    textAlign: "left",
                  }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                >
                  <Meta title={item.name} description={item.descript} />
                  <Meta
                    description={
                      <CardItem>
                        {/* <IconText
                          icon={StarOutlined}
                          text={item.length}
                          key="list-vertical-star-o"
                        /> */}
                        {/* <IconText icon={LikeOutlined} text={item.good} key="list-vertical-like-o" /> */}
                        {/* <IconText
                          icon={MessageOutlined}
                          text={item.comments.length}
                          key="list-vertical-message"
                        /> */}
                      </CardItem>
                    }
                  />
                  {/* <Meta description={<DepartsTags schoolInfo={item} />} /> */}
                </Card>
              </Link>
            </Col>
          </List.Item>
        )}
      />
    </ListWrapper>
  );
};

export default CardList;
