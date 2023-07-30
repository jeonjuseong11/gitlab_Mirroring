import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import newsList from "../../utils/NewsDummyData";
import { Button, Col, Row } from "antd";
import { FieldTimeOutlined, ShareAltOutlined } from "@ant-design/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import PromotionHomeItem from "./PromotionHomeItem";
import { info } from "../../utils/Message";
import {
  PromotionNewsDetailIcon,
  PromotionNewsDetailUl,
  SideBarDiv,
} from "../../styles/PromotionStyle";

const PromotionNewsDetail = () => {
  const [minDisable, setMinDisable] = useState(false);
  const [maxDisable, setMaxDisable] = useState(false);
  const random = Math.floor(Math.random() * newsList.length);

  const onChangeMaxDisable = () => {};
  // news테이블이 없기에 임시방편으로 세워둠
  const { newsId } = useParams();
  const id = parseInt(newsId);
  const location = useLocation();
  const nowLocation = `http://localhost:3000${location.pathname}`;

  useEffect(() => {
    if (id === 0) {
      setMinDisable(true);
    } else if (id >= 1) {
      setMinDisable(false);
    }
    if (id === newsList.length - 1) {
      setMaxDisable(true);
    } else if (id <= newsList.length - 1) {
      setMaxDisable(false);
    }
  }, [id]);
  return (
    <>
      <Row justify="center">
        <Col xs={24} md={10}>
          <PromotionNewsDetailUl>
            <li>
              <h2>{newsList[id].title}</h2>
            </li>
            <li>
              <p>부제목</p>
            </li>
            <li>
              <p>
                <PromotionNewsDetailIcon />
                생성 시간
              </p>
            </li>
          </PromotionNewsDetailUl>
          <hr />
          {newsList[id].content}
        </Col>
        <Col xs={23} md={5} justify="center">
          <SideBarDiv>우측사이드</SideBarDiv>
        </Col>
      </Row>
      <Row>
        <Col xs={24} md={20} justify="center">
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
        title={"직장 생활 치트키"}
        type={"news"}
        infoData={newsList}
        xs={22}
        md={5}
      />
    </>
  );
};

export default PromotionNewsDetail;
