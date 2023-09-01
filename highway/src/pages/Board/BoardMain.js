import { SearchOutlined, SmileOutlined, TeamOutlined } from "@ant-design/icons";
import { Button, Col, Input, List, Menu } from "antd";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_POSTS_REQUEST } from "../../constants/actionTypes";

moment.locale("ko"); // 한국어 로케일 설정

export const formatDate = (dateString) => {
  const currentTime = moment();
  const targetTime = moment.utc(dateString).local(); // UTC 시간을 한국 시간으로 변환
  const duration = moment.duration(currentTime.diff(targetTime));

  if (duration.asSeconds() < 60) {
    return "방금 전";
  } else if (duration.asMinutes() < 60) {
    const minutes = Math.floor(duration.asMinutes());
    return `${minutes}분 전`;
  } else if (duration.asHours() < 24) {
    const hours = Math.floor(duration.asHours());
    return `${hours}시간 전`;
  } else if (duration.asDays() < 2) {
    return "어제";
  } else if (duration.asMonths() < 1) {
    const days = Math.floor(duration.asDays());
    return `${days}일 전`;
  } else {
    const months = Math.floor(duration.asMonths());
    return `${months}달 전`;
  }
};

export const changeCategory = (category) => {
  if (category === 0) {
    return "자유게시판";
  } else if (category === 1) {
    return "질문게시판";
  } else if (category === 2) {
    return "프로젝트 모집";
  } else if (category === 3) {
    return "IT";
  } else if (category === 4) {
    return "경영";
  }
};

const stripTags = (html) => {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

const BoardMain = () => {
  const MAX_CONTENT_LENGTH = 20; // 최대 글자수
  const { category } = useParams();
  const dispatch = useDispatch();
  const { schoolBoardPosts } = useSelector((state) => state.post);
  const me = JSON.parse(localStorage.getItem("USERINFO"));
  const [hoveredItem, setHoveredItem] = useState(null);
  const [sortOrder, setSortOrder] = useState("latest");
  const sortedData = [...schoolBoardPosts];
  const [searchText, setSearchText] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const loadPosts = (category) => {
    let schoolId = parseInt(category) === 10 ? 0 : me && me.schoolId ? me.schoolId : 0;
    dispatch({
      type: LOAD_POSTS_REQUEST,
      data: { category, schoolId },
    });
  };

  useEffect(() => {
    if (category) {
      loadPosts(category);
    }
  }, [category]);

  if (sortOrder === "latest") {
    sortedData.sort((a, b) => {
      return new Date(b.modifiedDate) - new Date(a.modifiedDate);
    });
  }

  let filteredData = sortedData;
  if (searchText) {
    filteredData = sortedData.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  const handleSortOrder = (order) => {
    setSortOrder((prevOrder) => (prevOrder === order ? "" : order));
  };

  const formatContent = (content, maxLength) => {
    if (!content) return null;
    const strippedContent = stripTags(content); // 태그 제거
    if (strippedContent.length <= maxLength) {
      return strippedContent;
    }
    const truncatedContent = strippedContent.slice(0, maxLength);
    return truncatedContent.trim() + "...";
  };
  const menuItems = [
    {
      key: "/schoolboard/0",
      icon: <SmileOutlined />,
      label: "자유게시판",
      onClick: () => {
        navigate("/schoolboard/0");
        // if (!me) {
        //   needLoginError("글쓰기는 로그인 후에 가능합니다.", navigate);
        // } else {
        //   navigate("/schoolboard/0");
        // }
      },
    },
    {
      key: "/schoolboard/1",
      icon: <SearchOutlined />,
      label: "질문게시판",
      onClick: () => {
        navigate("/schoolboard/1");
        // if (!me) {
        //   needLoginError("글쓰기는 로그인 후에 가능합니다.", navigate);
        // } else {
        //   navigate("/schoolboard/1");
        // }
      },
    },
    {
      key: "/schoolboard/2",
      icon: <TeamOutlined />,
      label: "프로젝트 모집",
      onClick: () => {
        navigate("/schoolboard/2");
        // if (!me) {
        //   needLoginError("글쓰기는 로그인 후에 가능합니다.", navigate);
        // } else {
        //   navigate("/schoolboard/2");
        // }
      },
    },
    {
      key: "/schoolboard/10",
      icon: <TeamOutlined />,
      label: "잼민",
      onClick: () => navigate("/schoolboard/10"),
    },
    ...(me?.tag
      ? me.tag.map((t) => ({
          key: `/schoolboard/${t.tagCode}`,
          label: `${t.tagName} 커뮤니티`,
          onClick: () => navigate(`/schoolboard/${t.tagCode}`),
        }))
      : []),
  ];
  return (
    <>
      <Col xs={24} md={4}>
        <Menu
          className="custom-menu"
          selectedKeys={location.pathname}
          style={{
            paddingBottom: "1rem",
            border: "0",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
          items={menuItems}
        />
        <div
          style={{
            backgroundColor: "#f2f2f2",
            padding: "1rem",
            borderRadius: "10px",
            fontWeight: "500",
            color: "#a1a1a1",
          }}
        >
          커뮤니티는 학교별 태그에 따라 생겨요
        </div>
      </Col>
      <Col xs={24} md={11}>
        <Input
          placeholder="궁금한 내용을 찾아보세요"
          style={{ padding: "1rem", marginBottom: "1rem" }}
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setSearchText(e.target.value);
            }
          }}
        />
        <div style={{ textAlign: "left", marginBottom: "1rem" }}>
          <Button
            type="text"
            style={{
              borderRadius: "50px",
              background: sortOrder === "latest" ? "#8282ff" : "transparent",
              color: sortOrder === "latest" ? "white" : "black",
            }}
            onClick={() => handleSortOrder("latest")}
          >
            최신순
          </Button>
        </div>

        <List
          itemLayout="vertical"
          size="large"
          dataSource={filteredData}
          grid={{
            gutter: 0,
            column: 2,
          }}
          renderItem={(item, index) => (
            <div
              style={{
                borderTop: "1px solid #f2f2f2",
                paddingTop: "1rem",
                paddingBottom: "1rem",
              }}
            >
              <Link to={`/schoolboard/${item.category}/${item.id}`}>
                <List.Item
                  key={item.title}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    textAlign: "left",
                    borderRadius: "10px",
                    padding: "1rem",
                    alignItems: "center",
                    background: hoveredItem === index ? "#f5f5f5" : "transparent",
                    transition: "background 0.3s",
                  }}
                >
                  <span style={{ color: "gray" }}>{changeCategory(item.category)}</span>
                  <List.Item.Meta
                    title={item.title}
                    description={
                      <div
                        style={{
                          height: "40px",
                          maxHeight: "40px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 1,
                        }}
                      >
                        <span
                          dangerouslySetInnerHTML={{
                            __html: formatContent(item?.content, MAX_CONTENT_LENGTH),
                          }}
                        ></span>
                      </div>
                    }
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 16,
                      right: 16,
                      textAlign: "right",
                      color: "#a2a2a2",
                    }}
                  >
                    {formatDate(item.modifiedDate)}
                  </div>
                </List.Item>
              </Link>
            </div>
          )}
        />
      </Col>
    </>
  );
};

export default BoardMain;
