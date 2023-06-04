import React from "react";
import { Link } from "react-router-dom";
import { NewsDummyData as items } from "../../utils/NewsDummyData";
import { Image } from "antd";

const RecommendList = () => {
  const random = Math.floor(Math.random() * items.length);
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        <li style={{ marginLeft: "-35%" }}>
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
    </>
  );
};

export default RecommendList;
