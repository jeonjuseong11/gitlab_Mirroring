import React, { useEffect, useState } from "react";
import videoList from "../../utils/VideoDummyData";
import { Button, Col, List, Row } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import {
  LeftSide,
  MoreVideosButton,
  PromotionVideoIframe,
  PromotionVideosCol,
  PromotionVideosDiv,
  PromotionVideosImage,
  PromotionVideosList,
  PromotionVideosListItem,
  PromotionVideosTitle,
  PromotionVideosWriter,
  RightSideBar,
} from "../../styles/PromotionStyle";

const PromotionVideos = () => {
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
    <>
      <Row justify="center">
        <PromotionVideosCol md={10} xs={24}>
          <PromotionVideosList
            itemLayout="horizontal"
            dataSource={videoList}
            renderItem={(item) => {
              if (item.id < count) {
                return (
                  <PromotionVideosListItem>
                    <Link to={`/promotion/videos/${item.id}`}>
                      {!mouseOver ? (
                        <>
                          <PromotionVideosImage
                            onMouseOver={() => {
                              setCheckAutoPlay(item.id);
                              setAutoPlay(1);
                              onMouse();
                            }}
                            src={item.image}
                          />
                        </>
                      ) : (
                        <>
                          {checkAutoPlay == item.id ? (
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
                                  item.src +
                                  `?mute=1&controls=0&disablekb=1&autoplay=${autoPlay}`
                                }
                              />
                            </>
                          ) : (
                            <>
                              <PromotionVideosImage
                                onMouseOver={() => {
                                  setCheckAutoPlay(item.id);
                                  setAutoPlay(1);
                                  onMouse();
                                }}
                                src={item.image}
                              />
                            </>
                          )}
                        </>
                      )}
                    </Link>
                    <Col xs={18} md={15}>
                      <List.Item.Meta
                        title={
                          <PromotionVideosDiv>
                            <Link to={`/promotion/videos/${item.id}`}>
                              <PromotionVideosTitle>
                                {item.title}
                              </PromotionVideosTitle>
                              <PromotionVideosWriter>
                                {item.content}
                              </PromotionVideosWriter>
                            </Link>
                          </PromotionVideosDiv>
                        }
                      />
                    </Col>
                  </PromotionVideosListItem>
                );
              }
            }}
          />
        </PromotionVideosCol>
        <Col xs={23} md={5} justify="center">
          <RightSideBar />
        </Col>
      </Row>
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
