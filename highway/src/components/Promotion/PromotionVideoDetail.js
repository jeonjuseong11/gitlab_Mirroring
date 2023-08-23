import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import videoList from "../../utils/VideoDummyData";
import { Button, Col, List, Row } from "antd";
import {
  DownOutlined,
  FieldTimeOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import CopyToClipboard from "react-copy-to-clipboard";
import PromotionHomeItem from "./PromotionHomeItem";
import { info } from "../../utils/Message";
import {
  MoreVideosButton,
  PromotionVideoDetailIcon,
  PromotionVideoDetailIframe,
  PromotionVideoDetailUl,
  PromotionVideoIframe,
  PromotionVideosDiv,
  PromotionVideosImage,
  PromotionVideosListItem,
  PromotionVideosTitle,
  PromotionVideosWriter,
  SideBarDiv,
  SideVideosContent,
  SideVideosTitle,
  SideVideosWrapper,
} from "../../styles/PromotionStyle";
import PromotionSilder from "./PromotionSilder";

const PromotionVideoDetail = () => {
  const [count, setCount] = useState(3);
  const [disable, setDisable] = useState(false);
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
  const [minDisable, setMinDisable] = useState(false);
  const [maxDisable, setMaxDisable] = useState(false);
  const random = Math.floor(Math.random() * videoList.length);

  const onChangeMaxDisable = () => {};
  // news테이블이 없기에 임시방편으로 세워둠
  const { videoId } = useParams();
  const id = parseInt(videoId);
  const location = useLocation();
  const nowLocation = `http://localhost:3000${location.pathname}`;

  useEffect(() => {
    if (id === 0) {
      setMinDisable(true);
    } else if (id >= 1) {
      setMinDisable(false);
    }
    if (id === videoList.length - 1) {
      setMaxDisable(true);
    } else if (id <= videoList.length - 1) {
      setMaxDisable(false);
    }
  }, [id]);
  return (
    <>
      <Row justify="center">
        <Col xs={24} md={10}>
          <PromotionVideoDetailIframe
            src={videoList[id].src}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <PromotionVideoDetailUl>
            <li>
              <h2>{videoList[id].title}</h2>
            </li>
            <li>
              <p>{videoList[id].content}</p>
            </li>
          </PromotionVideoDetailUl>
        </Col>
        <Col xs={23} md={5}>
          <SideBarDiv>
            <Col xs={24} md={10}>
              <List
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
                        <Col xs={24} md={15}>
                          <List.Item.Meta
                            title={
                              <SideVideosWrapper style={{ marginLeft: "1rem" }}>
                                <Link to={`/promotion/videos/${item.id}`}>
                                  <SideVideosTitle>
                                    {item.title}
                                  </SideVideosTitle>
                                  <SideVideosContent>
                                    {item.content}
                                  </SideVideosContent>
                                </Link>
                              </SideVideosWrapper>
                            }
                          />
                        </Col>
                      </PromotionVideosListItem>
                    );
                  }
                }}
              />
            </Col>
            <Col xs={23} md={23} justify="center">
              <MoreVideosButton onClick={onMore} disabled={disable}>
                <DownOutlined />더 보기
              </MoreVideosButton>
            </Col>
          </SideBarDiv>
        </Col>
      </Row>
      {/* <Row gutter={[16, 16]}>
        <Col xs={24} md={20}>
          <CopyToClipboard
            text={nowLocation}
            onCopy={() => info("주소가 복사되었습니다.")}
            style={{ margin: "2rem" }}
          >
            <div className="URL">
              <Button>
                <ShareAltOutlined /> 공유하기
              </Button>
            </div>
          </CopyToClipboard>
        </Col>
      </Row>
      <PromotionHomeItem
        random={random}
        title={"다른 학교 홍보영상"}
        type={"videos"}
        infoData={videoList}
        xs={22}
        md={5}
      /> */}
      {/* <PromotionSilder /> */}
    </>
  );
};

export default PromotionVideoDetail;
