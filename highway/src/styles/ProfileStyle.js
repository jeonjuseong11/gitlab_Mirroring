import { List, Row } from "antd";
import styled from "styled-components";

export const ProfileWrapper = styled.div`
  height: 100%;
  width: 100vw;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 1rem;
`;

export const ProfileRow = styled(Row)`
  max-width: 65rem;
  width: 100%;
`;

export const ProfileTable = styled.table`
  margin-top: 1rem;
  text-align: left;
`;

export const ProfileUserWrapper = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  min-height: 17.4rem;
  height: 100%;
  box-sizing: border-box;
`;

export const ProfileUserName = styled.h2`
  margin-top: 1rem;
`;

export const ProfileSchoolName = styled.h4``;

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
  min-height: 12rem;
  height: 100%;
  box-sizing: border-box;
`;

export const LikePostWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  text-align: left;
  padding: 2rem;
`;

export const LikePostList = styled(List)`
  margin-top: 1rem;
  min-height: 13rem;
`;

export const ProfileTitle = styled.h3`
  line-height: 2rem;
  font-size: 18px;
  margin: 0;
`;

export const WrotePostsList = styled.div`
  background-color: white;
  border-radius: 10px;
  text-align: left;
  padding: 2rem;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
  }
`;
