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
  PromotionVideosWriter,
} from "../../styles/PromotionStyle";
import { SearchInput, SearchInputIcon } from "../../styles/SearchFormStyle";
import PromotionVideoItem from "./PromotionVideoItem";

const PromotionVideosVer2 = () => {
  const [count, setCount] = useState(3);
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
  console.log(result);
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
          width: "40%",
          backgroundColor: "#f2f2f2",
          borderRadius: "10px",
          border: " #f2f2f2",
          height: "3.5rem",
        }}
        placeholder="검색"
        prefix={<SearchInputIcon />}
      />
      <Row justify="center">
        <List
          dataSource={result}
          renderItem={(item) => {
            const randomOne = Math.floor(Math.random() * result.length);
            const randomTwo = Math.floor(Math.random() * result.length);
            const randomThree = Math.floor(Math.random() * result.length);
            return (
              <List.Item>
                <Col xs={20} md={6}>
                  <PromotionVideoItem item={result[randomOne]} />
                </Col>
                <Col style={{ marginLeft: "2rem" }} xs={20} md={6}>
                  <PromotionVideoItem item={result[randomTwo]} />
                </Col>
                <Col style={{ marginLeft: "2rem" }} xs={20} md={6}>
                  <PromotionVideoItem item={result[randomThree]} />
                </Col>
                <Col style={{ marginLeft: "2rem" }} xs={20} md={6}>
                  <PromotionVideoItem item={result[randomOne]} />
                </Col>
              </List.Item>
            );
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
