import React, { useCallback, useEffect, useState } from "react";
import { Form, Rate, Button, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD_SCHOOL_REVIEW_REQUEST, UPDATE_SCHOOL_REVIEW_REQUEST } from "../constants/actionTypes";
import { notYourSchool } from "../utils/Message";
import {
  FormItem,
  FormItemP,
  FormItemWrapper,
  FormTitle,
  MessageWrapper,
  ReviewCancelBtn,
  ReviewWriteBtnWrapper,
  ReviewWriteForm,
} from "../styles/ReviewPostStyle";

const DetailReviewForm = ({ setWrite, review, editing, setEditing, setEditContent }) => {
  const { schoolId } = useParams();
  const { me } = useSelector((state) => state.user);
  const getUserRoleText = (userRole) => {
    if (userRole === 1) {
      return "재학생";
    } else if (userRole === 2) {
      return "선생님";
    } else if (userRole === 3) {
      return "부모님";
    } else if (userRole === 4) {
      return "예비재학생";
    } else {
      return "";
    }
  };

  const [form] = Form.useForm();

  const [trafficMessage, setTrafficMessage] = useState("평가해주세요.");
  const [facilityMessage, setFacilityMessage] = useState("평가해주세요.");
  const [cafeteriaMessage, setCafeteriaMessage] = useState("평가해주세요.");
  const [educationMessage, setEducationMessage] = useState("평가해주세요.");
  const [employmentMessage, setEmploymentMessage] = useState("평가해주세요.");

  const handleRateChange = (name, value) => {
    const message = getMessage(value);
    switch (name) {
      case "trafficRate":
        setTrafficMessage(message);
        break;
      case "facilityRate":
        setFacilityMessage(message);
        break;
      case "cafeteriaRate":
        setCafeteriaMessage(message);
        break;
      case "educationRate":
        setEducationMessage(message);
        break;
      case "employmentRate":
        setEmploymentMessage(message);
        break;
      default:
        break;
    }
  };

  const getMessage = (value) => {
    if (value === 1) {
      return "매우 나쁨";
    } else if (value === 2) {
      return "나쁨";
    } else if (value === 3) {
      return "보통";
    } else if (value === 4) {
      return "좋음";
    } else if (value === 5) {
      return "매우 좋음";
    } else {
      return "평가해주세요";
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (values) => {
      if (me.schoolId === parseInt(schoolId)) {
        if (editing) {
          dispatch({
            type: UPDATE_SCHOOL_REVIEW_REQUEST,
            data: {
              id: review.id,
              author: me.userId,
              tags: me.userRole,
              content: values.content,
              trafficRate: values.trafficRate,
              facilityRate: values.facilityRate,
              cafeteriaRate: values.cafeteriaRate,
              educationRate: values.educationRate,
              employmentRate: values.employmentRate,
              schoolId: schoolId,
              deleted: false,
            },
          });
          setEditing(false);
          setEditContent("");
        } else {
          dispatch({
            type: ADD_SCHOOL_REVIEW_REQUEST,
            data: {
              author: me.userId,
              tags: getUserRoleText(me.userRole),
              content: values.content,
              trafficRate: values.trafficRate,
              facilityRate: values.facilityRate,
              cafeteriaRate: values.cafeteriaRate,
              educationRate: values.educationRate,
              employmentRate: values.employmentRate,
              schoolId: schoolId,
              deleted: false,
            },
          });
        }
        form.setFieldsValue("");
        setWrite(false);
      } else {
        notYourSchool("해당학교에는 리뷰를 작성할 수 없습니다.");
      }
    },
    [form, me, schoolId, setWrite, dispatch, editing, review]
  );

  useEffect(() => {
    if (review) {
      form.setFieldsValue({
        content: review.content,
        trafficRate: review.trafficRate,
        facilityRate: review.facilityRate,
        cafeteriaRate: review.cafeteriaRate,
        educationRate: review.educationRate,
        employmentRate: review.employmentRate,
      });
    }
    setTrafficMessage(getMessage(review.trafficRate));
    setFacilityMessage(getMessage(review.facilityRate));
    setCafeteriaMessage(getMessage(review.cafeteriaRate));
    setEducationMessage(getMessage(review.educationRate));
    setEmploymentMessage(getMessage(review.employmentRate));
  }, [form, review]);

  return (
    <ReviewWriteForm form={form} onFinish={handleSubmit}>
      <FormTitle>리뷰작성</FormTitle>
      <FormItemP>학교의 리뷰</FormItemP>
      <Form.Item rules={[{ required: true }]} name="content">
        <TextArea
          style={{ resize: "none", width: "100%" }}
          placeholder="100자 이내로 입력해주세요."
          maxLength={100}
        />
      </Form.Item>
      <FormItemWrapper>
        <FormItemP>교통</FormItemP>
        <Form.Item name="trafficRate" rules={[{ required: true }]} style={{}}>
          <Rate onChange={(value) => handleRateChange("trafficRate", value)} />
        </Form.Item>
        <MessageWrapper>{trafficMessage}</MessageWrapper>
      </FormItemWrapper>
      <FormItemWrapper>
        <FormItemP>시설만족도</FormItemP>
        <FormItem name="facilityRate" rules={[{ required: true }]}>
          <Rate onChange={(value) => handleRateChange("facilityRate", value)} />
        </FormItem>
        <MessageWrapper>{facilityMessage}</MessageWrapper>
      </FormItemWrapper>
      <FormItemWrapper>
        <FormItemP>급식</FormItemP>
        <FormItem name="cafeteriaRate" rules={[{ required: true }]}>
          <Rate onChange={(value) => handleRateChange("cafeteriaRate", value)} />
        </FormItem>
        <MessageWrapper>{cafeteriaMessage}</MessageWrapper>
      </FormItemWrapper>
      <FormItemWrapper>
        <FormItemP>교육</FormItemP>
        <FormItem name="educationRate" rules={[{ required: true }]}>
          <Rate onChange={(value) => handleRateChange("educationRate", value)} />
        </FormItem>
        <MessageWrapper>{educationMessage}</MessageWrapper>
      </FormItemWrapper>
      <FormItemWrapper>
        <FormItemP>취업</FormItemP>
        <FormItem name="employmentRate" rules={[{ required: true }]}>
          <Rate onChange={(value) => handleRateChange("employmentRate", value)} />
        </FormItem>
        <MessageWrapper>{employmentMessage}</MessageWrapper>
      </FormItemWrapper>
      <ReviewWriteBtnWrapper>
        <Button htmlType="submit" type="primary">
          {editing ? "리뷰 수정" : "리뷰 작성"}
          {/* Show "리뷰 수정" button when in edit mode */}
        </Button>
        <ReviewCancelBtn
          onClick={() => {
            setWrite(false);
            setEditing(false);
            setEditContent("");
          }}
        >
          취소
        </ReviewCancelBtn>
      </ReviewWriteBtnWrapper>
    </ReviewWriteForm>
  );
};

export default DetailReviewForm;
