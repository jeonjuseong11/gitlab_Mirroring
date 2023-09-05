import React, { useEffect, useState } from "react";
import videoList from "../../utils/VideoDummyData";
import { Button, Col, Input, List, Row } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import {
  MoreVideosButton,
  PromotionVideoIframe,
  PromotionVideosDiv,
  PromotionVideosImage,
  PromotionVideosListItem,
  PromotionVideosTitle,
  PromotionVideosVerVideoList,
  PromotionVideosWriter,
} from "../../styles/PromotionStyle";
import { SearchInput, SearchInputIcon } from "../../styles/SearchFormStyle";
import PromotionVideoItem from "./PromotionVideoItem";

const PromotionVideosVer2 = () => {
  const [count, setCount] = useState(6);
  const [disable, setDisable] = useState(false);
  const location = useLocation();
  const [autoPlay, setAutoPlay] = useState(0);
  const [mouseOver, setMouseOver] = useState(false);
  const [checkAutoPlay, setCheckAutoPlay] = useState();
  const [i, setI] = useState(6);
  const navigator = useNavigate();
  const [filterValue, setFilterValue] = useState("");
  const [filterData, setFilterData] = useState("title");

  const filtedVideos = videoList.map((it) => {
    return { tf: it?.title.includes(filterValue), it };
  });
  const result = filtedVideos.filter((word) => word.tf === true);
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
      <Input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setFilterValue(e.target.value);
          }
        }}
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
          width: "40remm",
          backgroundColor: "#f2f2f2",
          borderRadius: "10px",
          border: " #f2f2f2",
          height: "3.5rem",
        }}
        placeholder="검색"
        prefix={<SearchInputIcon />}
      />
      <Row>
        <List
          dataSource={result}
          renderItem={(item) => {
            if (item.it.id < count) {
              return (
                <Row style={{ float: "left" }}>
                  <PromotionVideosVerVideoList>
                    <li>
                      <iframe src={item.it.src} />
                    </li>
                    <li style={{ marginTop: "-1rem" }}>
                      <h3>{item.it.title}</h3>
                    </li>
                    <li style={{ marginTop: "-1rem" }}>
                      <p>{item.it.content}</p>
                    </li>
                  </PromotionVideosVerVideoList>
                </Row>
              );
            }
          }}
        />
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

export default PromotionVideosVer2;
