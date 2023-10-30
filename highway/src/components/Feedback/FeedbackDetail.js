import { EllipsisOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Col,
  Dropdown,
  Menu,
  Modal,
  Row,
  Spin,
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  LOAD_FEEDBACK_REQUEST,
  LOAD_USER_REQUEST,
  REMOVE_FEEDBACK_REQUEST,
} from "../../constants/actionTypes";
import { changeCategory } from "../../pages/Board/BoardMain";
import {
  AuthorInfo,
  AuthorName,
  PostContent,
  PostDate,
  PostHeader,
  PostTitle,
  StyledAvatar,
  StyledBreadcrumbWrapper,
} from "../../styles/BoardStyle";
import { formatDate } from "../schoolBoardDetail/ToggleComment";
import FeedbackResponseInput from "./FeedbackResponseInput";

const FeedbackDetail = () => {
  const { id } = useParams();
  const { feedback, feedbackLoadLoading } = useSelector(
    (state) => state.feedback
  );
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [canEditOrDelete, setCanEditOrDelete] = useState(false);
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null); // 삭제 혹은 수정을 결정하는 state
  const showConfirmModal = (action) => {
    setConfirmAction(action); // 현재 액션(수정 혹은 삭제)을 상태로 저장
    setIsConfirmModalVisible(true);
  };

  const handleOkConfirm = () => {
    if (confirmAction === "edit") {
      navigate(`/`);
    } else if (confirmAction === "delete") {
      onRemoveFeedback(id);
    }
    setIsConfirmModalVisible(false);
  };

  const handleCancelConfirm = () => {
    setIsConfirmModalVisible(false);
  };

  const onRemoveFeedback = (id) => {
    dispatch({
      type: REMOVE_FEEDBACK_REQUEST,
      data: {
        id: id,
      },
    });
  };

  useEffect(() => {
    dispatch({
      type: LOAD_USER_REQUEST,
    });
    dispatch({
      type: LOAD_FEEDBACK_REQUEST,
      data: {
        id: id,
      },
    });
    console.log(me);
  }, []);
  return (
    <div
      style={{
        maxWidth: "65rem",
        width: "100%",
        marginTop: "0",
        marginBottom: "0",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: "1rem" }}>
        <Col xs={23} md={24} style={{ textAlign: "left" }}>
          {feedbackLoadLoading ? (
            <div
              style={{
                textAlign: "center",
                height: "10rem",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Spin size="large" />
            </div>
          ) : (
            <>
              <StyledBreadcrumbWrapper>
                <Breadcrumb
                  items={[
                    {
                      title: <a href={`/schoolboard/0`}>문의 종류</a>,
                    },
                    {
                      title: (
                        <>
                          <a href={`/schoolboard/${id}`}>
                            {changeCategory(feedback?.category)}
                          </a>
                        </>
                      ),
                    },
                  ]}
                />
              </StyledBreadcrumbWrapper>
              <PostHeader>
                <PostTitle>{feedback?.title}</PostTitle>
                <StyledAvatar size={32}>{feedback?.userName}</StyledAvatar>
                <AuthorInfo>
                  <AuthorName>{feedback?.userName}</AuthorName>
                  <br />
                  <PostDate>{formatDate(feedback?.createDate)}</PostDate>
                </AuthorInfo>
                {canEditOrDelete && (
                  <Dropdown
                    placement="bottomLeft"
                    overlay={
                      <Menu>
                        <Menu.Item
                          onClick={() => showConfirmModal("edit")} // 액션 타입을 전달하여 모달을 띄웁니다.
                        >
                          수정하기
                        </Menu.Item>
                        <Menu.Item
                          danger
                          onClick={() => showConfirmModal("delete")} // 액션 타입을 전달하여 모달을 띄웁니다.
                        >
                          삭제하기
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <EllipsisOutlined style={{ float: "right" }} />
                  </Dropdown>
                )}
              </PostHeader>
              <PostContent
                dangerouslySetInnerHTML={{
                  __html: feedback?.content,
                }}
              />

              <Modal
                title={confirmAction === "edit" ? "수정 확인" : "삭제 확인"}
                open={isConfirmModalVisible}
                onOk={handleOkConfirm}
                onCancel={handleCancelConfirm}
                centered={true}
                okButtonProps={{
                  danger: confirmAction === "delete",
                  style:
                    confirmAction === "delete"
                      ? { backgroundColor: "red" }
                      : {},
                }}
                // okButtonProps를 사용하여 삭제 동작일 때 '확인' 버튼을 빨간색으로 만듭니다.
              >
                <p>
                  {confirmAction === "edit"
                    ? "정말로 이 게시글을 수정하시겠습니까?"
                    : "정말로 이 게시글을 삭제하시겠습니까?"}
                </p>
              </Modal>
            </>
          )}
        </Col>
        {me?.role !== 0 ? <FeedbackResponseInput feedback={feedback} /> : <></>}
        {feedback.response ? <>{feedback.response}</> : <></>}
      </Row>
    </div>
  );
};

export default FeedbackDetail;
