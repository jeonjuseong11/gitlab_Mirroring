import React, { useCallback, useEffect, useState } from "react";
import { Form, Rate, Button } from "antd";
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
import TextArea from "antd/es/input/TextArea";

const rateMessages = {
  1: "매우 나쁨",
  2: "나쁨",
  3: "보통",
  4: "좋음",
  5: "매우 좋음",
};

const userRoles = {
  1: "재학생",
  2: "선생님",
  3: "부모님",
  4: "예비재학생",
};

const DetailReviewForm = ({ setWrite, review, editing, setEditing, setEditContent }) => {
  const { schoolId } = useParams();
  const { me } = useSelector((state) => state.user);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const rateInitialState = "평가해주세요.";
  const [messages, setMessages] = useState({
    trafficRate: rateInitialState,
    facilityRate: rateInitialState,
    cafeteriaRate: rateInitialState,
    educationRate: rateInitialState,
    employmentRate: rateInitialState,
  });

  const getMessage = (value) => rateMessages[value] || rateInitialState;

  const handleRateChange = (category, value) => {
    setMessages((prev) => ({
      ...prev,
      [category]: getMessage(value),
    }));
  };

  const dispatchData = (type, data) => {
    dispatch({
      type,
      data: {
        ...data,
        author: me.userId,
        schoolId,
        deleted: false,
      },
    });
  };

  const handleSubmit = useCallback(
    (values) => {
      if (me.schoolId === parseInt(schoolId)) {
        const commonData = {
          tags: userRoles[me.userRole] || "",
          content: values.content,
          ...values,
        };

        editing
          ? dispatchData(UPDATE_SCHOOL_REVIEW_REQUEST, {
              id: review.id,
              ...commonData,
            })
          : dispatchData(ADD_SCHOOL_REVIEW_REQUEST, commonData);

        form.resetFields();
        setWrite(false);
        setEditing(false);
        setEditContent("");
      } else {
        notYourSchool("해당학교에는 리뷰를 작성할 수 없습니다.");
      }
    },
    [form, me, schoolId, editing, review]
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
      setMessages({
        trafficRate: getMessage(review.trafficRate),
        facilityRate: getMessage(review.facilityRate),
        cafeteriaRate: getMessage(review.cafeteriaRate),
        educationRate: getMessage(review.educationRate),
        employmentRate: getMessage(review.employmentRate),
      });
    }
  }, [form, review]);

  const rateItems = [
    {
      name: "trafficRate",
      label: "교통",
      message: messages.trafficRate,
      requiredMessage: "교통 평점을 입력해주세요.",
    },
    {
      name: "facilityRate",
      label: "시설만족도",
      message: messages.facilityRate,
      requiredMessage: "시설 만족도 평점을 입력해주세요.",
    },
    {
      name: "cafeteriaRate",
      label: "급식",
      message: messages.cafeteriaRate,
      requiredMessage: "급식 평점을 입력해주세요.",
    },
    {
      name: "educationRate",
      label: "교육",
      message: messages.educationRate,
      requiredMessage: "교육 평점을 입력해주세요.",
    },
    {
      name: "employmentRate",
      label: "취업",
      message: messages.employmentRate,
      requiredMessage: "취업 평점을 입력해주세요.",
    },
  ];

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
      {rateItems.map((item) => (
        <FormItemWrapper key={item.name}>
          <FormItemP>{item.label}</FormItemP>
          <Form.Item
            name={item.name}
            rules={[
              { required: true, message: item.requiredMessage },
              { type: "number", min: 1, message: item.requiredMessage },
            ]}
          >
            <Rate onChange={(value) => handleRateChange(item.name, value)} />
          </Form.Item>
          <MessageWrapper>{item.message}</MessageWrapper>
        </FormItemWrapper>
      ))}
      <ReviewWriteBtnWrapper>
        <Button htmlType="submit" type="primary">
          {editing ? "리뷰 수정" : "리뷰 작성"}
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
