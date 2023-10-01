import { Input } from "antd";
import styled from "styled-components";
import { Avatar, Modal } from "antd";
import { EllipsisOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";

export const BoardSearchInput = styled(Input)`
  height: 3.5rem;
  margin-top: 2rem;
`;

export const StyledBreadcrumbWrapper = styled.div`
  borderbottom: 1px solid #f2f2f2;
`;

export const PostHeader = styled.div`
  borderbottom: 1px solid #f2f2f2;
`;

export const PostTitle = styled.h2``;

export const StyledAvatar = styled(Avatar)`
  margin-top: -1.2rem;
  margin-right: 1rem;
  backgroundcolor: #d2d2d2;
`;

export const AuthorInfo = styled.div`
  marginleft: 1rem;
  display: inline-block;
`;

export const AuthorName = styled.span`
  fontweight: 600;
`;

export const PostDate = styled.span`
  fontsize: 0.5rem;
`;

export const EditDeleteIcon = styled(EllipsisOutlined)`
  position: absolute;
  right: 1rem;
`;

export const PostContent = styled.div`
  height: 20rem;
  padding: 1rem;
`;

export const ImagePreviewWrapper = styled.div`
  display: flex;
`;

export const ImagePreview = styled.div`
  border: 1px solid #c2c2c2;
  borderradius: 5px;
  width: 6rem;
  height: 6rem;
  marginright: 0.5rem;
  display: flex;
  justifycontent: center;
  alignitems: center;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    bordercolor: #aaa;
    transform: scale(1.15);
  }
`;

export const StyledImage = styled.img`
  maxwidth: 5rem;
  maxheight: 5rem;
`;

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    minheight: 45vh;
    backgroundcolor: #f2f2f2;
  }
`;
export const StyledLeftIcon = styled(LeftOutlined)`
  // 여기에 스타일 추가
`;

export const StyledRightIcon = styled(RightOutlined)`
  // 여기에 스타일 추가
`;
