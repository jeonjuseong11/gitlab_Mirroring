import { SearchOutlined, SmileOutlined, TeamOutlined } from "@ant-design/icons";
import { Button, Col, Input, List, Menu, Spin } from "antd";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_POSTS_REQUEST } from "../../constants/actionTypes";
import styled from "styled-components";

moment.locale("ko"); // 한국어 로케일 설정

const CustomMenu = styled(Menu)`
  padding-bottom: 1rem;
  border: 0;
  background-color: white;
`;
const CommunityInfo = styled.div`
  background-color: #f2f2f2;
  padding: 1rem;
  border-radius: 10px;
  font-weight: 500;
  color: #a1a1a1;
  word-break: keep-all;
`;
const SearchInput = styled(Input)`
  padding: 1rem;
  margin-bottom: 1rem;
`;
const StyledButton = styled(Button)`
  border-radius: 50px;
  background: ${(props) => (props.active ? "#8282ff" : "transparent")};
  color: ${(props) => (props.active ? "white" : "black")};
`;

const StyledListItem = styled(List.Item)`
  text-align: left;
  border-radius: 10px;
  align-items: center;
  background: ${(props) => (props.isHovered ? "#f5f5f5" : "transparent")};
  transition: background 0.3s;
`;

const StyledItemDescription = styled.div`
  height: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const StyledItemImg = styled.img`
  width: 6vw;
  height: 6vw;
  float: right;
  min-width: 3rem;
  min-height: 3rem;
  position: absolute;
  top: 16px;
  right: 16px;
`;

const DateContainer = styled.div`
  position: absolute;
  bottom: 16px;
  right: 20px;
  text-align: right;
  color: #a2a2a2;
`;

const SignUpLoginContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
`;

export const formatDate = (dateString) => {
  const currentTime = moment();
  const targetTime = moment.utc(dateString).local();
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
  const MAX_CONTENT_LENGTH = 20;
  const { category } = useParams();
  const dispatch = useDispatch();
  const { schoolBoardPosts, loadPostsLoading } = useSelector((state) => state.post);
  const { me } = useSelector((state) => state.user);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [sortOrder, setSortOrder] = useState("latest");
  const sortedData = [...schoolBoardPosts];
  const [searchText, setSearchText] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const loadPosts = (category) => {
    if (me) {
      let schoolId = parseInt(category) === 10 ? 0 : me && me.schoolId ? me.schoolId : 0;
      dispatch({
        type: LOAD_POSTS_REQUEST,
        data: { category, schoolId },
      });
    }
  };

  useEffect(() => {
    if (category) {
      loadPosts(category);
    }
  }, [category]);

  if (sortOrder === "latest") {
    sortedData.sort((a, b) => {
      return new Date(b?.board.modifiedDate) - new Date(a?.board.modifiedDate);
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
      key: "/schoolboard/01",
      icon: <SearchOutlined />,
      label: "질문게시판",
      onClick: () => {
        navigate("/schoolboard/01");
      },
    },
    {
      key: "/schoolboard/02",
      icon: <TeamOutlined />,
      label: "프로젝트 모집",
      onClick: () => {
        navigate("/schoolboard/02");
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
        <CustomMenu className="custom-menu" selectedKeys={location.pathname} items={menuItems} />
        <CommunityInfo>커뮤니티는 학교별 태그에 따라 생겨요</CommunityInfo>
      </Col>
      <Col xs={24} md={11}>
        <SearchInput
          placeholder="궁금한 내용을 찾아보세요"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setSearchText(e.target.value);
            }
          }}
        />
        <div style={{ textAlign: "left", marginBottom: "1rem" }}>
          <StyledButton
            type="text"
            active={sortOrder === "latest"}
            onClick={() => handleSortOrder("latest")}
          >
            최신순
          </StyledButton>
        </div>
        {loadPostsLoading ? (
          <Spin />
        ) : (
          <List
            itemLayout="vertical"
            size="large"
            dataSource={filteredData}
            grid={{
              gutter: 0,
              xs: 1,
              sm: 2,
              md: 2,
              lg: 2,
              xl: 2,
              xxl: 2,
            }}
            renderItem={(item, index) => (
              <div
                style={{
                  paddingTop: "1rem",
                  borderTop: "1px solid #f2f2f2",
                  filter: !me ? "blur(4px)" : "none",
                  pointerEvents: !me ? "none" : "auto",
                }}
              >
                <Link to={`/schoolboard/${item?.board?.category}/${item?.board?.id}`}>
                  <StyledListItem
                    key={item?.board?.id}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                    isHovered={hoveredItem === index}
                  >
                    <span style={{ color: "gray" }}>{changeCategory(item?.board?.category)}</span>
                    <List.Item.Meta
                      title={item?.board?.title}
                      description={
                        <StyledItemDescription>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: formatContent(item?.board?.content, MAX_CONTENT_LENGTH),
                            }}
                          ></span>
                          {item?.imageUrls?.length > 0 && (
                            <StyledItemImg
                              src={item?.imageUrls[0]} // 첫 번째 이미지 URL
                              alt={`게시글 이미지 - ${item?.board?.title}`}
                            />
                          )}
                        </StyledItemDescription>
                      }
                    />

                    <DateContainer>{formatDate(item?.board?.modifiedDate)}</DateContainer>
                  </StyledListItem>
                </Link>
              </div>
            )}
          />
        )}
        {!me && (
          <SignUpLoginContainer>
            <Button onClick={() => navigate("/signup")} style={{ height: "3rem" }} type="primary">
              회원가입
            </Button>
            <Button onClick={() => navigate("/login")} style={{ height: "3rem" }} type="default">
              로그인
            </Button>
          </SignUpLoginContainer>
        )}
      </Col>
    </>
  );
};

export default BoardMain;
