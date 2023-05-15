import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import newsList from "../../utils/NewsDummyData";
import { Button, Image } from "antd";

const PromotionNewsDetail = () => {
  // news테이블이 없기에 임시방편으로 세워둠
  const { newsId } = useParams();
  const [id, setId] = useState(parseInt(newsId));

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
          <Button>이전</Button>
        </Link>
        <Link to={`http://localhost:3000/promotion/news/`}>
          <Button>목록으로</Button>
        </Link>
        <Link to={`http://localhost:3000/promotion/news/${id + 1}`}>
          <Button>다음</Button>
        </Link>
      </div>
    </div>
  );
};

export default PromotionNewsDetail;
