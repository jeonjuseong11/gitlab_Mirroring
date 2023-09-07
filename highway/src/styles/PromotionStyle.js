import { FieldTimeOutlined } from "@ant-design/icons";
import { Button, Col, List } from "antd";
import styled from "styled-components";

// PromotionSideBar
export const SideBarDiv = styled.div`
  margin-top: 1.2rem;
  width: 20rem;
  height: 30rem;
  margin-left: 1.5rem;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    margin-top: 8rem;
  }
`;

// PromotionHome
export const PromotionHomeUl = styled.ul`
  list-style: none;
  padding: 0px;
`;
// PromotionHomeItem
export const PromotionHomeItemButton = styled(Button)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
export const PromotionHomeItemImageDiv = styled.div`
  width: 21rem;
  height: 18rem;
  border-radius: 10px;
  background: #f2f2f2;
  padding: 0px;
`;
// PromotionNews
export const PromotionNewsListItem = styled(List.Item)`
  padding: 2rem;
  margin-left: 1rem;
  border-bottom: 1px solid #f2f2f2;
`;
export const PromotionNewsCol = styled(Col)`
  border-radius: 10px;
  background: #f2f2f2;
`;
export const PromotionNewsImageDiv = styled.div`
  height: 9rem;
  margin-left: -2rem;
  border-radius: 10px;
`;
export const PromotionNewsListItemMetaDiv = styled.div`
  text-align: left;
  margin-left: 2rem;
`;
export const PromotionNewsTitle = styled.h2`
  color: black;
`;
export const PromotionNewsWriter = styled.p`
  color: gray;
`;
export const PromotionNewsMoreButton = styled(Button)`
  margin-bottm: 2rem;
  margin-top: 2rem;
`;
// PromotionNewsDetail
export const PromotionNewsDetailUl = styled.ul`
  list-style: none;
  text-align: left;
`;
export const PromotionNewsDetailIcon = styled(FieldTimeOutlined)`
  margin-right: 0.5rem;
`;
// PromotionNewsDetailItem
export const PromotionNewsDetailItemDiv = styled.div`
  width: 27rem;
  height: 19rem;
  background: #f2f2f2;
`;
// PromotionVideoDetail
export const PromotionVideoDetailUl = styled.ul`
  padding-left: 0.7rem;
  list-style: none;
  text-align: left;
`;
export const PromotionVideoDetailIcon = styled(FieldTimeOutlined)`
  margin-right: 0.5rem;
`;
export const SideVideosWrapper = styled.div`
  &:hover {
    text-decoration-line: underline;
  }
`;
export const PromotionVideoDetailIframe = styled.iframe`
  width: 100%;
  height: 29vw;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 400px;
    height: 100%;
  }
`;
export const SideVideosTitle = styled.h4`
  color: black;
  width: 8rem;
  text-align: left;
`;
export const SideVideosContent = styled.p`
  color: gray;
  width: 8rem;
  text-align: left;
`;
// PromotionVideoItem
export const PromotionVideoItemDiv = styled.div`
  width: 27rem;
  height: 19rem;
  background: #f2f2f2;
`;
// PromotionVideos
export const PromotionVideosListItem = styled(List.Item)`
  width: 80%;
  padding: 2rem;
  margin-left: 0.7rem;
  border-bottom: 1px solid #f2f2f21 @media screen and (max-width: 768px) {
    width: 10%;
  }
`;
export const PromotionVideosImage = styled.img`
  width: 12rem;
  height: 9rem;
  border-radius: 10px;
  transition: filter 0.3s ease;
  transition: border-radius 0.3s ease;
  &:hover {
    border-radius: 0px;
    filter: brightness(0%);
  }
  @media screen and (max-width: 768px) {
    margin-left: 2rem;
  }
`;
export const PromotionVideoIframe = styled.iframe`
  width: 188px;
  height: 141px;
  filter: brightness(0%);
  transition: filter 0.3s ease;
  &:hover {
    filter: brightness(100%);
  }
  @media screen and (max-width: 768px) {
    margin-left: 2rem;
  }
`;
export const PromotionVideosDiv = styled.div`
  text-align: left;
  margin-left: 2rem;
  &:hover {
    text-decoration-line: underline;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0rem;
  }
`;
export const PromotionVideosTitle = styled.h2`
  word-break: keep-all;
  color: black;
  @media screen and (max-width: 768px) {
    width: 70%;
    margin-left: 1rem;
  }
`;
export const PromotionVideosWriter = styled.p`
  color: gray;
  @media screen and (max-width: 768px) {
    margin-left: 1rem;
  }
`;
export const MoreVideosButton = styled(Button)`
  margin-bottom: 2rem;
  margin-top: 2rem;
`;
// RecommedComponent
// RecommnedList
export const RecommnedListCol = styled(Col)`
  height: 27rem;
  margin-left: 0.5rem;
  border-radius: 10px;
  background: #f2f2f2;
`;
// 이미지
export const RecommnedListImage = styled.div`
  width: 18rem;
  height: 10rem;
  background: #f2f2f2;
  border-radius: 10px;
`;
// 동영상
export const RecommnedListVideo = styled.div`
  width: 18rem;
  height: 10rem;
  background: #f2f2f2;
  border-radius: 10px;
`;
export const RecommendMainImg = styled.img`
  width: 100%;
  height: 22vw;
  border-radius: 10px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
    text-decoration-line: underline;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0.5rem;
    width: 100%;
    height: 100%;
  }
`;
export const RecommendSideImg = styled.img`
  width: 18rem;
  height: 10rem;
  border-radius: 10px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
    text-decoration-line: underline;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0.5rem;
    width: 96%;
    height: 100%;
  }
`;
export const RecommnedSideWrapper = styled.div``;
export const RecommnedSideTopDiv = styled.div`
  margin-top: 4.8rem;
  transition: transform 0.3s ease;
  &:hover {
    text-decoration-line: underline;
  }
`;
export const RecommnedSideBottomDiv = styled.div`
  transition: transform 0.3s ease;
  &:hover {
    text-decoration-line: underline;
  }
`;

// PromotionVideoVer2

export const PromotionVideosVerVideoList = styled.ul`
margin-left: 13.5vw
width: 10rem;
list-style: none;
text-align: left;
  @media screen and (max-width: 548px) {
    margin-left: 1rem;
  }
`;
