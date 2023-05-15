import React from "react";
import { TestHeadLineWrapper } from "../../styles/PromotionStyle";
import { Link, useLocation } from "react-router-dom";

const RecommendList = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div>
      <h1>HIGHWAY TIMES</h1>
      <TestHeadLineWrapper>
        <Link to={"/"}>
          <h2>제목</h2>
          <p>기사</p>
        </Link>
      </TestHeadLineWrapper>
    </div>
  );
};

export default RecommendList;
