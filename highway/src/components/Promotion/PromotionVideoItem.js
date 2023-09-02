import React, { useEffect, useState } from "react";
import videoList from "../../utils/VideoDummyData";
import { Button, Col, List, Row } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import {
  MoreVideosButton,
  PromotionVideoIframe,
  PromotionVideosDiv,
  PromotionVideosImage,
  PromotionVideosListItem,
  PromotionVideosTitle,
  PromotionVideosWriter,
} from "../../styles/PromotionStyle";

const PromotionVideoItem = ({ item }) => {
  const [count, setCount] = useState(3);
  const [disable, setDisable] = useState(false);
  const location = useLocation();
  const [autoPlay, setAutoPlay] = useState(0);
  const [mouseOver, setMouseOver] = useState(false);
  const [checkAutoPlay, setCheckAutoPlay] = useState();
  const navigator = useNavigate();

  const onMouse = () => {
    setTimeout(() => {
      if (mouseOver) {
        setMouseOver(false);
      } else {
        setMouseOver(true);
      }
    }, 1000);
  };
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
    <PromotionVideosListItem>
      <div style={{ width: "14rem" }}>
        <Link to={`/promotion/videos/${item.it.id}`}>
          {!mouseOver ? (
            <>
              <PromotionVideosImage
                onMouseOver={() => {
                  setCheckAutoPlay(item.it.id);
                  setAutoPlay(1);
                  onMouse();
                }}
                src={item.it.image}
              />
            </>
          ) : (
            <>
              {checkAutoPlay == item.it.id ? (
                <>
                  <PromotionVideoIframe
                    onClick={() => {
                      navigator("/");
                    }}
                    onMouseLeave={() => {
                      setCheckAutoPlay();
                      setAutoPlay(0);
                      onMouse();
                    }}
                    src={
                      item.it.src +
                      `?mute=1&controls=0&disablekb=1&autoplay=${autoPlay}`
                    }
                  />
                </>
              ) : (
                <>
                  <PromotionVideosImage
                    onMouseOver={() => {
                      setCheckAutoPlay(item.it.id);
                      setAutoPlay(1);
                      onMouse();
                    }}
                    src={item.it.image}
                  />
                </>
              )}
            </>
          )}
        </Link>
        <div style={{ textAlign: "left", marginLeft: "2rem" }}>
          <Link to={`/promotion/videos/${item.it.id}`}>
            <h2 style={{ color: "black" }}>{item.it.title}</h2>
            <p style={{ color: "black" }}>{item.it.content}</p>
          </Link>
        </div>
      </div>
    </PromotionVideosListItem>
  );
};

export default PromotionVideoItem;
