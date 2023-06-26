import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import videoList from "../../utils/VideoDummyData";
import { Button, Col, Row } from "antd";
import { FieldTimeOutlined, ShareAltOutlined } from "@ant-design/icons";
import CopyToClipboard from "react-copy-to-clipboard";
import PromotionHomeItem from "./PromotionHomeItem";

const PromotionVideoDetail = () => {
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
          <ul style={{ listStyle: "none", textAlign: "left" }}>
            <li>
              <h2>{videoList[id].title}</h2>
            </li>
            <li>
              <p>부제목</p>
            </li>
            <li>
              <p>
                <FieldTimeOutlined style={{ marginRight: "0.5rem" }} />
                생성 시간
              </p>
            </li>
          </ul>
          <hr />
          <iframe
            width="640rem"
            height="480rem"
            src={videoList[id].src}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col xs={23} md={5}>
          <div
            style={{
              width: "20rem",
              height: "30rem",
              backgroundColor: "#f2f2f2",
              marginTop: "2rem",
              marginLeft: "1.5rem",
              borderRadius: "10px",
            }}
          >
            우측사이드
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={20}>
          <CopyToClipboard
            text={nowLocation}
            onCopy={() => alert("주소가 복사되었습니다")}
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
        infoData={videoList}
        xs={22}
        md={5}
      />
    </>
  );
};

export default PromotionVideoDetail;
