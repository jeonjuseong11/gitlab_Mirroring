import { List, Row } from "antd";
import styled from "styled-components";

export const ProfileWrapper = styled.div`
  background-color: #f2f2f2;
`;
export const ProfileRow = styled(Row)`
  padding-top: 1rem;
`;
export const ProfileTable = styled.table`
  margin-top: 1rem;
  width: 90%;
  height: 10rem;
  margin: 0 auto;
  text-align: left;
`;
export const ProfileUserWrapper = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  min-width: 12rem;
`;
export const ProfileUserName = styled.h2`
  margin-top: 2rem;
`;
export const ProfileSchoolName = styled.h4`
  padding-top: 1rem;
`;
export const ItemWrapper = styled.div`
  padding-left: 1rem;
  border-radius: 10px;
  &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;
export const SchoolWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  text-align: left;
  padding: 2rem;
  min-height: 25rem;
`;
export const LikePostWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  text-align: left;
  padding: 2rem;
  margin-bottom: 2.4rem;
`;
export const LikePostList = styled(List)`
  margin-top: 1rem;
  min-height: 13rem;
`;
export const ProfileTitle = styled.h3`
  margin: 0;
`;
