import { FieldTimeOutlined } from "@ant-design/icons";
import { Button, Col, List } from "antd";
import styled from "styled-components";

// PromotionSideBar
export const SideBarDiv = styled.div`
  margin-top: 2rem;
  width: 20rem;
  height: 30rem;
  margin-left: 1.5rem;
  background-color: #f2f2f2;
  border-radius: 10px;
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
  list-style: none;
  text-align: left;
`;
export const PromotionVideoDetailIcon = styled(FieldTimeOutlined)`
  margin-right: 0.5rem;
`;
// PromotionVideoItem
export const PromotionVideoItemDiv = styled.div`
  width: 27rem;
  height: 19rem;
  background: #f2f2f2;
`;
// PromotionVideos
export const PromotionVideosListItem = styled(List.Item)`
padding : 2rem;
margin-left:1rem
border-bottom:1px solid #f2f2f2
`;
export const PromotionVideosImage = styled.img`
  height: 9rem;
  border-radius: 10px;
`;
export const PromotionVideosDiv = styled.div`
text-align:left;
margin-left-2rem;
`;
export const PromotionVideosTitle = styled.h2`
  color: black;
`;
export const PromotionVideosWriter = styled.p`
  color: gray;
`;
