import React, { useEffect, useState } from "react";
import videoList from "../../utils/VideoDummyData";
import { Link } from "react-router-dom";
import { Image, List, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const PromotionVideoItem = () => {
  const [count, setCount] = useState(3);
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
    <List
      itemLayout="horizontal"
      dataSource={videoList}
      renderItem={(item) => (
        <List.Item>
          <Image preview={false} width={277} height={122} src={item.src} />
          <List.Item.Meta
            title={
              <Link to={`/promotion/news/${item.videoId}`}>
                {item.videoTitle}
              </Link>
            }
            description={item.writer}
          />
        </List.Item>
      )}
    />
  );
};

export default PromotionVideoItem;
