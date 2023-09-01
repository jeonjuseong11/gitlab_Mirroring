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
import SearchForm from "../SearchForm";

const PromotionVideos = () => {
  const [count, setCount] = useState(3);
  const [disable, setDisable] = useState(false);
  const location = useLocation();
  const [autoPlay, setAutoPlay] = useState(0);
  const [mouseOver, setMouseOver] = useState(false);
  const [checkAutoPlay, setCheckAutoPlay] = useState();
  const [i, setI] = useState(6);
  const navigator = useNavigate();

  const test = videoList.map((it) => {
    if (i > count) {
      return (
        <Col xs={6}>
          <img style={{ width: "40%" }} src={it.image} />
          <h3>{it.title}</h3>
          <p>{it.content}</p>
        </Col>
      );
    }
  });

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
    <>
      <Row justify="center">{test}</Row>
      <Row>
        <Col xs={23} md={23} justify="center">
          <MoreVideosButton onClick={onMore} disabled={disable}>
            <DownOutlined />더 보기
          </MoreVideosButton>
        </Col>
      </Row>
    </>
  );
};

export default PromotionVideos;
