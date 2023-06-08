import React, { useEffect, useState } from "react";
import AppLayout from "../AppLayout";
import PromotionVideoItem from "./PromotionVideoItem";
import videoList from "../../utils/VideoDummyData";
import { Button, Image, List } from "antd";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";

const PromotionVideos = () => {
  const [count, setCount] = useState(4);
  const [disable, setDisable] = useState(false);
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
      <ul style={{ listStyle: "none", width: "100%" }}>
        <li>
          <List
            itemLayout="horizontal"
            dataSource={videoList}
            renderItem={(item) => {
              if (item.videoId < count)
                return (
                  <List.Item
                    style={{ width: "70%", padding: "3%", marginLeft: "-4%" }}
                  >
                    <Link to={`/promotion/news/${item.videoId}`}>
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
                          <Link to={`/promotion/news/${item.videoId}`}>
                            <h2 style={{ color: "black" }}>
                              {item.videoTitle}
                            </h2>
                          </Link>
                        </div>
                      }
                      description={
                        <div style={{ textAlign: "left", marginLeft: "5%" }}>
                          <Link to={`/promotion/news/${item.videoId}`}>
                            <p style={{ color: "gray" }}>{item.writer}</p>
                          </Link>
                        </div>
                      }
                    />
                  </List.Item>
                );
            }}
          />
        </li>
        <li
          style={{
            width: "25%",
            height: "500px",
            backgroundColor: "#d2d2d2",
            marginLeft: "75%",
            marginTop: "-51%",
            borderRadius: "5%",
          }}
        >
          우측사이드
        </li>
      </ul>
      <Button
        onClick={onMore}
        disabled={disable}
        style={{ marginBottom: "2%", marginTop: "2%" }}
      >
        <DownOutlined />더 보기
      </Button>
    </>
  );
};

export default PromotionVideos;
