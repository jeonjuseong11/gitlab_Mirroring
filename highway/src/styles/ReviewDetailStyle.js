import { Avatar, List, Rate } from "antd";
import styled from "styled-components";

export const DetailReviewsWrapper = styled.div`
  text-align: left;
  font-size: 0.5rem;
  margin-top: 1rem;
  width: 6.5rem;
  float: left;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const AverageReviewWrapper = styled.div`
  width: 65%;
  text-align: left;
  display: flex;
  margin-left: 5rem;
`;
export const AverageReviewP = styled.p`
  margin-left: 1rem;
  padding-top: 4px;
`;
export const DetailReviewP = styled.p`
  margin: 0;
  color: black;
  width: 100%;
  box-sizing: border-box;
`;
export const DetailReviewAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
`;
export const DetailReviewAvatar = styled(Avatar)`
  margin-top: 2rem;
`;
export const DetailReviewUserTagsWrapper = styled.div`
  width: 15rem;
  margin-left: 1.5rem;
`;
export const DetailReviewContentWrapper = styled.div`
  color: black;
  word-break: break-all;
  height: 11vh;
  float: left;
  display: inline-block;
  text-align: left;
  margin-left: 1.5rem;
  margin-top: 0.5rem;
`;
export const DetailReviewRate = styled(Rate)`
  line-height: 0.4rem;
  align-items: center;
  font-size: 0.7rem;
  display: flex;
`;
export const ReviewButtonWrapper = styled(List.Item)`
  float: right;
`;
