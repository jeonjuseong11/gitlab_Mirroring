import { CommentOutlined, HeartOutlined } from "@ant-design/icons";
import { List, Tag } from "antd";
import React from "react";
import { NoDecoLink } from "../../styles/PageStyle";

const BoardMiddleList = ({ data }) => {
  return (
    <List
      style={{ textAlign: "left", borderRadius: "10px", backgroundColor: "white", padding: "1rem" }}
      header={
        <>
          <span style={{ fontSize: "1.2rem", marginLeft: "1rem" }}>인기글</span>
          <NoDecoLink to={`/schoolboard/list`} style={{ float: "right", marginRight: "1rem" }}>
            <span>더보기</span>
          </NoDecoLink>
        </>
      }
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          style={{ paddingLeft: "1rem", alignItems: "center" }}
          actions={[
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <span>
                <CommentOutlined />
                {3}
              </span>
              <span>
                <HeartOutlined />
                {4}
              </span>
            </div>,
          ]}
        >
          <Tag color="#8282ff">ITEM</Tag> {item}
        </List.Item>
      )}
    />
  );
};

export default BoardMiddleList;
