import React, { useEffect, useState } from "react";
import AppLayout from "../AppLayout";
import PromotionVideoItem from "./PromotionVideoItem";
import videoList from "../../utils/VideoDummyData";
import { Button, Image, List, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import RecommendList from "./RecommendList";
import { items } from "../../utils/PromotionList";

const PromotionVideos = () => {
  const [count, setCount] = useState(4);
  const [disable, setDisable] = useState(false);
  const location = useLocation();
  const onMore = () => {
    setCount(count + 3);
  };
  useEffect(() => {
    if (count >= videoList.length) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [count]);
  return (
    <>
      <RecommendList type={"video"} infoData={videoList} />
      <Menu mode="horizontal" items={items} selectedKeys={location.pathname} />
      <ul style={{ listStyle: "none", width: "100%" }}>
        <li
          style={{
            width: "20rem",
            height: "500px",
            backgroundColor: "#d2d2d2",
            marginLeft: "75%",
            marginTop: "3%",
            borderRadius: "5%",
          }}
        >
          우측사이드
        </li>
        <li style={{ marginTop: "-41%" }}>
          <List
            itemLayout="horizontal"
            dataSource={videoList}
            renderItem={(item) => {
              if (item.id < count)
                return (
                  <List.Item
                    style={{ width: "70%", padding: "3%", marginLeft: "-4%" }}
                  >
                    <Link to={`/promotion/videos/${item.id}`}>
                      <Image
                        preview={false}
                        width={277}
                        height={122}
                        src={item.src}
                        style={{
                          borderRadius: "5%",
                        }}
                      />
                    </Link>
                    <List.Item.Meta
                      title={
                        <div
                          style={{
                            textAlign: "left",
                            marginLeft: "5%",
                          }}
                        >
                          <Link to={`/promotion/videos/${item.id}`}>
                            <h2 style={{ color: "black" }}>{item.title}</h2>
                          </Link>
                        </div>
                      }
                      description={
                        <div style={{ textAlign: "left", marginLeft: "5%" }}>
                          <Link to={`/promotion/videos/${item.id}`}>
                            <p style={{ color: "gray" }}>{item.content}</p>
                          </Link>
                        </div>
                      }
                    />
                  </List.Item>
                );
            }}
          />
        </li>
      </ul>
      <Button
        onClick={onMore}
        disabled={disable}
        style={{ marginBottom: "2%", marginTop: "5%" }}
      >
        <DownOutlined />더 보기
      </Button>
    </>
  );
};

export default PromotionVideos;
