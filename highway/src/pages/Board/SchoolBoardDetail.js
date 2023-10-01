import React, { useEffect, useState } from "react";
import { Col, Breadcrumb, Avatar, Menu, Dropdown, Modal, Row, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_POST_REQUEST, REMOVE_POST_REQUEST } from "../../constants/actionTypes";
import { useNavigate, useParams } from "react-router-dom";
import ToggleComment from "../../components/schoolBoardDetail/ToggleComment";
import { changeCategory, formatDate } from "./BoardMain";
import { EllipsisOutlined, LeftOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";
import {
  AuthorInfo,
  AuthorName,
  EditDeleteIcon,
  ImagePreview,
  ImagePreviewWrapper,
  PostContent,
  PostDate,
  PostHeader,
  PostTitle,
  StyledAvatar,
  StyledBreadcrumbWrapper,
  StyledImage,
} from "../../styles/BoardStyle";

const SchoolBoardDetail = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { me } = useSelector((state) => state.user);
  const { schoolBoardPost, loadPostLoading } = useSelector((state) => state.post);
  const { postId, category } = useParams();
  const canEditOrDelete = me?.userNo === schoolBoardPost?.userNo;
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [clickedImageIndex, setClickedImageIndex] = useState(0);

  const openImageModal = (index) => {
    setClickedImageIndex(index);
    setImageModalVisible(true);
  };

  const closeImageModal = () => {
    setImageModalVisible(false);
  };
  const removePost = () => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: {
        id: schoolBoardPost?.board?.id,
      },
    });
  };

  const loadPost = (postId) => {
    dispatch({
      type: LOAD_POST_REQUEST,
      data: postId,
    });
  };
  useEffect(() => {
    if (postId && category) {
      loadPost(postId);
    }
  }, []);

  return (
    <Row gutter={[16, 16]} justify="center" style={{ paddingTop: "1rem" }}>
      <Col xs={23} md={15} style={{ textAlign: "left", padding: "1rem" }}>
        {loadPostLoading ? (
          <div
            style={{
              textAlign: "center",
              height: "10rem",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Spin tip="Loading" size="large" />
          </div>
        ) : (
          <>
            <StyledBreadcrumbWrapper>
              <Breadcrumb
                items={[
                  {
                    title: <a href={`/schoolboard/0`}>커뮤니티</a>,
                  },
                  {
                    title: (
                      <>
                        <a href={`/schoolboard/${category}`}>
                          {changeCategory(schoolBoardPost?.board.category)}
                        </a>
                      </>
                    ),
                  },
                ]}
              />
            </StyledBreadcrumbWrapper>
            <PostHeader>
              <PostTitle>{schoolBoardPost?.board?.title}</PostTitle>
              <StyledAvatar size={32}>{schoolBoardPost?.userName[0]}</StyledAvatar>
              <AuthorInfo>
                <AuthorName>{schoolBoardPost?.userName}</AuthorName>
                <br />
                <PostDate>{formatDate(schoolBoardPost?.board?.modifiedDate)}</PostDate>
                <EditDeleteIcon />
              </AuthorInfo>
            </PostHeader>
            <PostContent
              dangerouslySetInnerHTML={{
                __html: schoolBoardPost?.board?.content,
              }}
            />
            <ImagePreviewWrapper>
              {schoolBoardPost?.imageUrls?.map((imageUrl, index) => (
                <ImagePreview onClick={() => openImageModal(index)}>
                  <StyledImage key={index} src={imageUrl} alt={`게시글 이미지 - ${index}`} />
                </ImagePreview>
              ))}
            </ImagePreviewWrapper>
            <Modal visible={imageModalVisible} onCancel={closeImageModal} footer={null} centered>
              <div
                style={{
                  marginTop: "1.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  minHeight: "45vh",
                  backgroundColor: "#f2f2f2",
                }}
              >
                <LeftOutlined
                  style={{
                    fontSize: "24px",
                    color: clickedImageIndex === 0 || clickedImageIndex === 0 ? "#ccc" : "#8282ff",
                    cursor: clickedImageIndex === 0 ? "not-allowed" : "pointer", // disable 상태일 때 커서를 not-allowed로 변경
                    transition: "color 0.3s ease",
                    transform: clickedImageIndex === 0 ? "scale(1)" : "scale(1.15)", // disable 상태와 hover 효과에 따른 스케일 조정
                  }}
                  onClick={() => {
                    if (clickedImageIndex > 0) {
                      setClickedImageIndex(clickedImageIndex - 1);
                    }
                  }}
                  disabled={clickedImageIndex === 0}
                  onMouseOver={(e) => {
                    if (clickedImageIndex !== 0) {
                      e.currentTarget.style.transform = "scale(1.15)";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (clickedImageIndex !== 0) {
                      e.currentTarget.style.transform = "scale(1)";
                    }
                  }}
                />
                <img
                  src={schoolBoardPost?.imageUrls[clickedImageIndex]}
                  alt={`게시글 이미지 - ${clickedImageIndex}`}
                  style={{ maxWidth: "100%", maxHeight: "100%", height: "20vh" }}
                />
                <RightOutlined
                  style={{
                    fontSize: "24px",
                    color:
                      clickedImageIndex === schoolBoardPost?.imageUrls?.length - 1
                        ? "#ccc"
                        : "#8282ff",
                    cursor:
                      clickedImageIndex === schoolBoardPost?.imageUrls?.length - 1
                        ? "not-allowed"
                        : "pointer", // disable 상태일 때 커서를 not-allowed로 변경
                    transition: "color 0.3s ease",
                    transform:
                      clickedImageIndex === schoolBoardPost?.imageUrls?.length - 1
                        ? "scale(1)"
                        : "scale(1.15)", // disable 상태와 hover 효과에 따른 스케일 조정
                  }}
                  onClick={() => {
                    if (clickedImageIndex < schoolBoardPost?.imageUrls?.length - 1) {
                      setClickedImageIndex(clickedImageIndex + 1);
                    }
                  }}
                  disabled={clickedImageIndex === schoolBoardPost?.imageUrls?.length - 1}
                  onMouseOver={(e) => {
                    if (clickedImageIndex !== schoolBoardPost?.imageUrls?.length - 1) {
                      e.currentTarget.style.transform = "scale(1.15)";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (clickedImageIndex !== schoolBoardPost?.imageUrls?.length - 1) {
                      e.currentTarget.style.transform = "scale(1)";
                    }
                  }}
                />
              </div>
            </Modal>
          </>
        )}
      </Col>
      <ToggleComment />
    </Row>
  );
};

export default SchoolBoardDetail;
