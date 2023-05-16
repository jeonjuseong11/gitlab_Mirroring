import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import newsList from "../../utils/NewsDummyData";
import { Button, Image } from "antd";

const PromotionNewsDetail = () => {
  const [minDisable, setMinDisable] = useState(false);
  const [maxDisable, setMaxDisable] = useState(false);

  const onChangeMaxDisable = () => {};
  // news테이블이 없기에 임시방편으로 세워둠
  const { newsId } = useParams();
  const id = parseInt(newsId);

  useEffect(() => {
    if (id === 0) {
      setMinDisable(true);
    } else if (id >= 1) {
      setMinDisable(false);
    }
    if (id === newsList.length - 1) {
      setMaxDisable(true);
    } else if (id <= newsList.length - 1) {
      setMaxDisable(false);
    }
  }, [id]);
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
          <button disabled={minDisable}>이전</button>
        </Link>
        <Link to={`http://localhost:3000/promotion/`}>
          <button>목록으로</button>
        </Link>
        <Link to={`http://localhost:3000/promotion/news/${id + 1}`}>
          <button disabled={maxDisable}>다음</button>
        </Link>
      </div>
    </div>
  );
};

export default PromotionNewsDetail;
