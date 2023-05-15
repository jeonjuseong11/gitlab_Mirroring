import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import newsList from "../../utils/NewsDummyData";
import { Image } from "antd";

const PromotionNewsDetail = () => {
  const location = useLocation();
  // news테이블이 없기에 임시방편으로 세워둠
  const { newsId } = useParams();
  const id = parseInt(newsId);

  return (
    <div>
      <div>
        <div>
          <Image
            width={753}
            height={424}
            preview={false}
            src={newsList[id].src}
          />
        </div>
        <div>{newsList[id].newsTitle}</div>
        <div>{newsList[id].newsContent}</div>
      </div>
      <div>
        <Link to={`http://localhost:3000/promotion/news/${id - 1}`}>
          <button>이전</button>
        </Link>
        <Link to={`http://localhost:3000/promotion/news/`}>
          <button>목록으로</button>
        </Link>
        <Link to={`http://localhost:3000/promotion/news/${id + 1}`}>
          <button>다음</button>
        </Link>
      </div>
    </div>
  );
};

export default PromotionNewsDetail;
