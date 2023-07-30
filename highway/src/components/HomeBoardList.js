import { List } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  CustomListItem,
  HomeBoardCol,
  HomeBoardListWrapper,
  HomeBoardRow,
} from "../styles/HomeBoardListStyle";

const HomeBoardList = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const { schoolBoardPosts } = useSelector((state) => state.post);
  return (
    <HomeBoardRow justify="center" gutter={[16, 16]}>
      <HomeBoardCol xs={24} md={15}>
        <h3>Highway 커뮤니티에 물어보세요</h3>
        <p style={{ fontSize: "1.5rem" }}>자유게시판</p>
        <List
          size="large"
          dataSource={schoolBoardPosts.slice(0, 4)}
          itemLayout="horizontal"
          grid={{
            gutter: 0,
            column: 2,
          }}
          renderItem={(item, index) => (
            <HomeBoardListWrapper>
              <Link to={`/schoolboard/${item.category}/${item.id}`}>
                <CustomListItem
                  key={item.title}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <List.Item.Meta
                    title={item.title}
                    description={item.content}
                  />
                </CustomListItem>
              </Link>
            </HomeBoardListWrapper>
          )}
        />
      </HomeBoardCol>
    </HomeBoardRow>
  );
};

export default HomeBoardList;
