import React from "react";
import { Link } from "react-router-dom";
import { NewsDummyData as items } from "../../utils/NewsDummyData";
import { Image } from "antd";

const RecommendList = () => {
  const random = Math.floor(Math.random() * items.length);
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        <li>
          <h1>HIGHWAY TIMES</h1>
          <Link to={`news/${random}`}>
            <Image
              width={"45rem"}
              height={"25rem"}
              preview={false}
              src={`${items[random].src}`}
              style={{
                borderRadius: "5%",
              }}
            />
          </Link>
        </li>
      </ul>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link to={`news/${random}`}>
            <Image
              width={"15rem"}
              height={"6rem"}
              preview={false}
              src={`${items[random].src}`}
              style={{
                borderRadius: "5%",
              }}
            />
          </Link>
        </li>
        <li>
          <Link to={`news/${random}`}>
            <Image
              width={"15rem"}
              height={"6rem"}
              preview={false}
              src={`${items[random].src}`}
              style={{
                borderRadius: "5%",
              }}
            />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default RecommendList;
