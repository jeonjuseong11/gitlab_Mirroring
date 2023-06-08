import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import videoList from "../../utils/VideoDummyData";
import { Button, Col, Image, Row } from "antd";
import { FieldTimeOutlined, ShareAltOutlined } from "@ant-design/icons";
import CopyToClipboard from "react-copy-to-clipboard";

const PromotionVideoDetail = () => {
  const [minDisable, setMinDisable] = useState(false);
  const [maxDisable, setMaxDisable] = useState(false);

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
      <Row style={{ width: "60%", marginLeft: "20%" }}>
        <Col style={{ width: "65%" }}>
          <ul style={{ listStyle: "none", textAlign: "left" }}>
            <li>
              <h2>{videoList[id].videoTitle}</h2>
            </li>
            <li>
              <p>부제목</p>
            </li>
            <li>
              <p>
                <FieldTimeOutlined style={{ marginRight: "2%" }} />
                생성 시간
              </p>
            </li>
          </ul>
          <hr style={{ width: "100%" }} />
          <iframe
            width="720 "
            height="480"
            src={videoList[id].src}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col style={{ width: "35%" }}>
          <div
            style={{
              width: "70%",
              height: "500px",
              backgroundColor: "#d2d2d2",
              marginTop: "5%",
              marginLeft: "10%",
              borderRadius: "5%",
            }}
          >
            우측사이드
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginLeft: "45%", marginTop: "10%" }}>
        <Col>
          <CopyToClipboard
            text={nowLocation}
            onCopy={() => alert("주소가 복사되었습니다")}
            style={{ margin: "15%" }}
          >
            <div className="URL">
              <Button>
                <ShareAltOutlined /> 공유하기
              </Button>
            </div>
          </CopyToClipboard>
          <div>
            <Link to={`http://localhost:3000/promotion/news/${id - 1}`}>
              <Button disabled={minDisable}>이전</Button>
            </Link>
            <Link to={`http://localhost:3000/promotion/news`}>
              <Button>목록으로</Button>
            </Link>
            <Link to={`http://localhost:3000/promotion/news/${id + 1}`}>
              <Button disabled={maxDisable}>다음</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default PromotionVideoDetail;
