import { Col, Input } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UPDATE_FEEDBACK_REQUEST } from "../../constants/actionTypes";

const FeedbackResponseInput = ({ feedback }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { id } = useParams();
  const [commentValue, setCommentValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputRef = useRef(null);

  const handleSubmitComment = (values) => {
    if (me === null) {
      alert("로그인이 필요한 기능입니다.");
      return;
    }
    if (commentValue.trim() === "") {
      alert("빈칸이 있습니다.");
      return;
    }
    if (me.userRole === 0) {
      dispatch({
        type: UPDATE_FEEDBACK_REQUEST,
        data: {
          title: feedback.title,
          content: feedback.content,
          id: id,
          response: values,
        },
      });
    } else {
      alert("관리자 권환이 필요한 기능입니다.");
    }
    setIsSubmitting(true);

    setCommentValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !isSubmitting) {
      e.preventDefault();
      handleSubmitComment(e.target.value);
    }
  };

  const handleInputBlur = () => {
    if (commentValue.trim() !== "" && !isSubmitting) {
      handleSubmitComment();
    }
  };

  useEffect(() => {
    if (isSubmitting) {
      setIsSubmitting(false);
      if (inputRef.current) {
        setCommentValue("");
        inputRef.current.blur();
      }
    }
  }, [isSubmitting, feedback]);

  return (
    <>
      {/* <ToggleGoodAndCommentBtn /> */}
      <>
        <Col xs={23} md={24}>
          <Input.TextArea
            style={{ padding: "1rem", resize: "none" }}
            maxLength="100"
            value={commentValue}
            onChange={(e) => setCommentValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleInputBlur}
            placeholder="답변을 적어주세요.(100자 이내) &#13;&#10;작성 완료시 엔터키를 눌러주세요"
            ref={inputRef}
          />
        </Col>
      </>
    </>
  );
};

export default FeedbackResponseInput;
