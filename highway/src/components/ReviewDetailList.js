import { EllipsisOutlined, StarFilled } from "@ant-design/icons";
import { Dropdown, List, Menu, Skeleton } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { REMOVE_SCHOOL_REVIEW_REQUEST } from "../constants/actionTypes";
import { TagsItem } from "./Card/CardStyle";
import {
  AverageReviewP,
  AverageReviewWrapper,
  DetailReviewAvatar,
  DetailReviewAvatarWrapper,
  DetailReviewContentWrapper,
  DetailReviewP,
  DetailReviewRate,
  DetailReviewUserTagsWrapper,
  DetailReviewsWrapper,
  ReviewButtonWrapper,
} from "../styles/ReviewDetailStyle";

const ReviewDetailList = ({ setWrite, setEditing, setEditContent }) => {
  const { schoolReviews, loadSchoolReviewsLoading } = useSelector((state) => state.school);
  const { me } = useSelector((state) => state.user);
  const userinfo = JSON.parse(localStorage.getItem("USERINFO"));
  const dispatch = useDispatch();
  const { schoolId } = useParams();

  const filteredReviews = schoolReviews.filter((item) => !item.deleted);

  const removeReview = (id) => {
    const access_TOKEN = localStorage.getItem("ACCESSTOKEN");
    axios.defaults.headers.common["ACCESS_TOKEN"] = `${access_TOKEN}`;
    dispatch({
      type: REMOVE_SCHOOL_REVIEW_REQUEST,
      data: { id: id, schoolId: schoolId },
    });
  };

  const handleEdit = (review) => {
    // 수정 상태로 변경하고 리뷰 데이터를 전달합니다.
    // console.log(review);
    setEditContent(review);
    setEditing(true);
    setWrite(true);
  };

  return (
    <>
      {filteredReviews.length > 0 ? (
        <List
          itemLayout="horizontal"
          dataSource={filteredReviews}
          pagination={{
            align: "center",
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 2,
          }}
          renderItem={(item) => (
            <List.Item key={item?.id}>
              <Skeleton loading={loadSchoolReviewsLoading} active>
                <List.Item.Meta
                  title={
                    <>
                      <DetailReviewAvatarWrapper>
                        <DetailReviewAvatar size={50}>
                          {item?.userName && item.userName.length > 0 ? item.userName[0] : ""}
                        </DetailReviewAvatar>
                        <AverageReviewWrapper>
                          <h3>{item?.userName}</h3>
                          <AverageReviewP>
                            <StarFilled style={{ color: "#FFDC82" }} />
                            {(item?.trafficRate +
                              item?.facilityRate +
                              item?.cafeteriaRate +
                              item?.educationRate +
                              item?.employmentRate) /
                              5}
                          </AverageReviewP>
                        </AverageReviewWrapper>

                        {item?.userName == me?.userId && (
                          <ReviewButtonWrapper
                            actions={[
                              <Dropdown
                                placement="bottomLeft"
                                overlay={
                                  <Menu>
                                    <Menu.Item onClick={() => handleEdit(item)}>수정하기</Menu.Item>
                                    <Menu.Item danger onClick={() => removeReview(item.id)}>
                                      삭제하기
                                    </Menu.Item>
                                  </Menu>
                                }
                                trigger={["hover"]}
                              >
                                <EllipsisOutlined />
                              </Dropdown>,
                            ]}
                          />
                        )}
                      </DetailReviewAvatarWrapper>
                      <DetailReviewUserTagsWrapper>
                        <TagsItem style={{ marginLeft: "1rem" }}>{item?.tags}</TagsItem>
                      </DetailReviewUserTagsWrapper>
                    </>
                  }
                  description={
                    <>
                      <DetailReviewsWrapper>
                        <DetailReviewP>교통</DetailReviewP>
                        <DetailReviewRate disabled allowHalf value={item.trafficRate} />
                        <DetailReviewP>시설만족도</DetailReviewP>
                        <DetailReviewRate disabled allowHalf value={item?.facilityRate} />
                        <DetailReviewP>급식</DetailReviewP>
                        <DetailReviewRate disabled allowHalf value={item?.cafeteriaRate} />
                        <DetailReviewP>수업만족도</DetailReviewP>
                        <DetailReviewRate disabled allowHalf value={item?.educationRate} />
                        <DetailReviewP>취업</DetailReviewP>
                        <DetailReviewRate disabled allowHalf value={item?.employmentRate} />
                      </DetailReviewsWrapper>
                      <DetailReviewContentWrapper>
                        {item?.content.split("\n").map((line, index) => (
                          <React.Fragment key={index}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </DetailReviewContentWrapper>
                    </>
                  }
                />
              </Skeleton>
            </List.Item>
          )}
        />
      ) : (
        <div style={{ marginBottom: "1rem" }}>
          <h2 style={{ fontWeight: "400" }}>첫번째 리뷰를 작성해주세요</h2>
        </div>
      )}
    </>
  );
};

export default ReviewDetailList;
