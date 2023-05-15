import React from "react";
import { TestHeadLineWrapper } from "../../styles/PromotionStyle";
import { Link } from "react-router-dom";
import { NewsDummyData as items } from "../../utils/NewsDummyData";
import { Image } from "antd";

const RecommendList = () => {
  const random = Math.floor(Math.random() * items.length);
  return (
    <div>
      <h1>HIGHWAY TIMES</h1>
      <TestHeadLineWrapper>
        <Link to={`news/${random}`}>
          <Image
            width={700}
            height={400}
            preview={false}
            src={`${items[random].src}`}
          />
        </Link>
      </TestHeadLineWrapper>
    </div>
  );
};

export default RecommendList;
