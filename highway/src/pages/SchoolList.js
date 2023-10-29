import { UserOutlined } from "@ant-design/icons";
import { Card, List } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { Link } from "react-router-dom";
import { CardItem, IconText, TagsItem } from "../components/Card/CardStyle";

const SchoolList = ({ schools }) => {
  return (
    <div>
      <List
        style={{ marginTop: "1rem" }}
        itemLayout="horizontal"
        dataSource={schools}
        pagination={{
          align: "center",
          onChange: (page) => {},
          pageSize: 5,
          hideOnSinglePage: schools.length <= 5,
          total: schools.length,
        }}
        grid={{ gutter: 16, xs: 2, sm: 3, md: 1, lg: 2, xl: 3, xxl: 3 }}
        renderItem={(item) => (
          <List.Item key={item.id} style={{ marginTop: "1rem" }}>
            <Link to={`/schooldetail/${item.schoolId}`}>
              <Card
                hoverable
                bodyStyle={{
                  textAlign: "left",
                }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
              >
                <Meta title={item.schoolName} description={item.descript} />
                <Meta
                  description={
                    <CardItem>
                      {/* <IconText
                          icon={StarOutlined}
                          text={item.reviews.length}
                          key="list-vertical-star-o"
                        /> */}
                      <IconText
                        icon={UserOutlined}
                        text={item.studentCount}
                        key="list-vertical-message"
                      />
                    </CardItem>
                  }
                />
                <Meta
                  title={
                    <CardItem>
                      {item?.tag?.map((v, idx) => {
                        return (
                          <TagsItem key={idx} style={{ marginRight: "0.5rem" }}>
                            {v}
                          </TagsItem>
                        );
                      })}
                    </CardItem>
                  }
                />
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </div>
  );
};

export default SchoolList;
