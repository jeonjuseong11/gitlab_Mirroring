import React, { useEffect, useState } from "react";
import videoList from "../../utils/VideoDummyData";
import { Link } from "react-router-dom";
import { List } from "antd";

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
          <div
            preview={false}
            src={item.src}
            style={{
              width: "27rem",
              height: "19rem",
              background: "#f2f2f2",
            }}
          />
          <List.Item.Meta
            title={
              <Link to={`/promotion/videos/${item.videoId}`}>
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
