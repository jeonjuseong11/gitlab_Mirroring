import { Image, Form } from "antd";
import styled from "styled-components";
import { NewsDummyData as items } from "../utils/NewsDummyData";

export const PromotionWrapper = styled(Form)`
  width: 50%;
  margin: 1% Auto;
`;

// RecommendList.js
export const RecommendWrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
`;
export const RecommendImage = styled(Image)`
  border-radius: 5%;
`;
export const TestHeadLineWrapper = styled.div`
  width: 700px;
  height: 400px;
  border-radius: 15px;
  background-image: url("${items[Math.floor(Math.random() * items.length)]
    .src}");
`;
// RecommendHeadLine.js
export const RecommendHeadLineWrapper = styled.div``;
// PromotionNewsDetail.js
export const PromotionNewsDetailWrapper = styled.div``;
// PromotionHome.js
export const PromotionHomeWrapper = styled.div`
  display: flex;
  width: 700px;
  height: 400px;
`;
export const PromotionHomeSection = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PromtionHomeSectionImage = styled(Image)`
  float: left;
`;
export const PromotionHomeTitleListWrapper = styled.div`
  display: flex;

  flex-direction: column;
`;
