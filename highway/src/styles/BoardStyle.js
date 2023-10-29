import { Input } from "antd";
import styled from "styled-components";
import { Avatar, Modal } from "antd";
import { EllipsisOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";

export const BoardSearchInput = styled(Input)`
  height: 3.5rem;
  margin-top: 2rem;
`;

export const StyledBreadcrumbWrapper = styled.div``;

export const PostHeader = styled.div`
  padding-bottom: 14px;
  border-bottom: 1px solid #f2f2f2;
`;

export const PostTitle = styled.h2``;

export const StyledAvatar = styled(Avatar)`
  margin-top: -1.2rem;
  margin-right: 1rem;
  background-color: #d2d2d2;
`;

export const AuthorInfo = styled.div`
  margin-left: 1rem;
  display: inline-block;
`;

export const AuthorName = styled.span`
  font-weight: 600;
  font-size: 1rem;
`;

export const PostDate = styled.span`
  font-size: 0.8rem;
`;

export const EditDeleteIcon = styled(EllipsisOutlined)`
  position: absolute;
  right: 1rem;
`;

export const PostContent = styled.div`
  height: 20rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
`;

export const ImagePreviewWrapper = styled.div`
  display: flex;
`;

export const ImagePreview = styled.div`
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  width: 6rem;
  height: 6rem;
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    border-color: #aaa;
    transform: scale(1.15);
  }
`;

export const StyledImage = styled.img`
  max-width: 5rem;
  max-height: 5rem;
`;

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 45vh;
    background-color: #f2f2f2;
  }
`;

export const StyledLeftIcon = styled(LeftOutlined)``;

export const StyledRightIcon = styled(RightOutlined)``;
