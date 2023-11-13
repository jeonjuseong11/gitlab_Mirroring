import { Dropdown, Modal } from "antd";
import styled from "styled-components";

export const TestSchoolCurriDiv = styled.div`
  @font-face {
    font-family: "NanumSquareRound";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  * {
    font-family: "NanumSquareRound";
  }
  .courseWrapper {
    background-color: rgb(230, 230, 230);
    width: 83%;
    border-radius: 10px;
    margin-left: -40px;
  }
  .common {
    font-weight: bold;
    font-size: 25px;
  }
  .course {
    font-weight: bold;
    font-size: 25px;
  }
  .gradeWrapper {
    background-color: rgb(230, 230, 230);
    width: 83%;
    margin-left: 6%;
    border-radius: 10px;
    margin-top: 0px;
    padding-top: 0.5px;
    padding-bottom: 40px;
  }
  .chapterWrapper {
    margin-top: 40px;
  }
  .chapter {
    font-weight: bold;
    font-size: 20px;
  }
  .lesson {
    list-style: upper-roman;
    margin-top: 10px;
    font-size: 16px;
  }
  .lesson li::marker {
    color: #8282ff;
  }
  .lesson li {
    font-size: 12px;
    list-style: disc;
  }
  ul {
    list-style: none;
  }
  .grade {
    font-weight: bold;
    font-size: 25px;
    margin-left: 20px;
  }
`;

export const CurriModal = styled(Modal)`
  .ant-modal-footer {
    width: 135px;
    margin: 0 auto 0 auto;
  }
  .ant-modal-close-x {
    transform: scale(1.5);
  }
`;

export const CurriModalDropdown = styled(Dropdown)``;
