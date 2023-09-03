import React, { useEffect, useState } from "react";
import { Col, Breadcrumb, Avatar, Menu, Dropdown, Modal, Row, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_POST_REQUEST, REMOVE_POST_REQUEST } from "../../constants/actionTypes";
import { useNavigate, useParams } from "react-router-dom";
import ToggleComment from "../../components/schoolBoardDetail/ToggleComment";
import { changeCategory, formatDate } from "./BoardMain";
import { EllipsisOutlined, LeftOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";

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
    loadPost(postId);
    // console.log(category);
  }, [postId, category]);

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
            <Breadcrumb
              items={[
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
            <div>
              <div style={{ borderBottom: "1px solid #f2f2f2" }}>
                <h2>{schoolBoardPost?.board?.title}</h2>
                <Avatar
                  style={{ marginTop: "-1rem", backgroundColor: "#d2d2d2" }}
                  size={32}
                  icon={<UserOutlined />}
                />
                <div style={{ marginLeft: "1rem", display: "inline-block" }}>
                  <span style={{ fontWeight: "600" }}>{schoolBoardPost?.userName}</span>
                  <br></br>
                  <span style={{ fontSize: "0.5rem" }}>
                    {formatDate(schoolBoardPost?.board?.modifiedDate)}
                  </span>
                  <span style={{ position: "absolute", right: "1rem" }}>
                    {canEditOrDelete && (
                      <Dropdown
                        placement="bottomLeft"
                        overlay={
                          <Menu>
                            <Menu.Item
                              onClick={() => {
                                navigator(`/schoolboard/${schoolBoardPost?.board.id}/update`);
                              }}
                            >
                              수정하기
                            </Menu.Item>
                            <Menu.Item
                              danger
                              onClick={() => {
                                removePost();
                              }}
                            >
                              <a href={`/schoolboard/${category}`}>삭제하기</a>
                            </Menu.Item>
                          </Menu>
                        }
                        trigger={["hover"]}
                      >
                        <EllipsisOutlined />
                      </Dropdown>
                    )}
                  </span>
                </div>
                <p style={{ marginLeft: "1rem" }}></p>
              </div>
              <div
                style={{ height: "20rem", padding: "1rem" }}
                dangerouslySetInnerHTML={{
                  __html: schoolBoardPost?.board?.content,
                }}
              />
              <div style={{ display: "flex" }}>
                {schoolBoardPost?.imageUrls.map((imageUrl, index) => (
                  <div
                    style={{
                      border: "1px solid #c2c2c2",
                      borderRadius: "5px",
                      width: "6rem",
                      height: "6rem",
                      marginRight: ".5rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      transition: "0.3s ease",
                    }}
                    onClick={() => openImageModal(index)}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = "#aaa";
                      e.currentTarget.style.transform = "scale(1.15)"; // 커지는 효과 추가
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = "#c2c2c2";
                      e.currentTarget.style.transform = "scale(1)"; // 원래 크기로 복원
                    }}
                  >
                    <img
                      key={index}
                      src={imageUrl}
                      alt={`게시글 이미지 - ${index}`}
                      style={{
                        maxWidth: "5rem",
                        maxHeight: "5rem",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
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
                      clickedImageIndex === schoolBoardPost?.imageUrls.length - 1
                        ? "#ccc"
                        : "#8282ff",
                    cursor:
                      clickedImageIndex === schoolBoardPost?.imageUrls.length - 1
                        ? "not-allowed"
                        : "pointer", // disable 상태일 때 커서를 not-allowed로 변경
                    transition: "color 0.3s ease",
                    transform:
                      clickedImageIndex === schoolBoardPost?.imageUrls.length - 1
                        ? "scale(1)"
                        : "scale(1.15)", // disable 상태와 hover 효과에 따른 스케일 조정
                  }}
                  onClick={() => {
                    if (clickedImageIndex < schoolBoardPost?.imageUrls.length - 1) {
                      setClickedImageIndex(clickedImageIndex + 1);
                    }
                  }}
                  disabled={clickedImageIndex === schoolBoardPost?.imageUrls.length - 1}
                  onMouseOver={(e) => {
                    if (clickedImageIndex !== schoolBoardPost?.imageUrls.length - 1) {
                      e.currentTarget.style.transform = "scale(1.15)";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (clickedImageIndex !== schoolBoardPost?.imageUrls.length - 1) {
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
