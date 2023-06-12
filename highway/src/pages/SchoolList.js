import { StarOutlined, UserOutlined } from "@ant-design/icons";
import { Card, Col, List } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { Link } from "react-router-dom";
import { CardItem, IconText } from "../components/Card/CardStyle";
import DepartsTags from "../components/DepartsTags";

const SchoolList = ({ schools }) => {
  return (
    <div>
      <List
        style={{ marginTop: "1rem" }}
        itemLayout="horizontal"
        dataSource={schools}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 5,
          align: "center",
        }}
        grid={{ gutter: 12, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 5 }}
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
                  <Meta title={item.schul_NM} description={item.descript} />
                  <Meta
                    description={
                      <CardItem>
                        <IconText
                          icon={StarOutlined}
                          text={item.reviews.length}
                          key="list-vertical-star-o"
                        />
                        <IconText
                          icon={UserOutlined}
                          text={item.members.length}
                          key="list-vertical-message"
                        />
                      </CardItem>
                    }
                  />
                  <Meta title={<DepartsTags schoolInfo={item} />} />
                </Card>
              </Link>
            </Col>
          </List.Item>
        )}
      />
    </div>
  );
};

export default SchoolList;
