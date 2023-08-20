import { Col, List, Tag } from "antd";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_SAVED_SCHOOL_REQUEST, LOAD_USER_POSTS_REQUEST } from "../../constants/actionTypes";
import SchoolList from "../../pages/SchoolList";
import { changeCategory } from "../../pages/Board/BoardMain";
import { Link } from "react-router-dom";
import {
  ItemWrapper,
  LikePostList,
  LikePostWrapper,
  ProfileTitle,
  SchoolWrapper,
} from "../../styles/ProfileStyle";

const ProfileRecentRecord = () => {
  const { followList } = useSelector((state) => state.school);
  const { schoolBoardPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const listRef = useRef(null);

  const loadSavedSchool = () => {
    dispatch({
      type: LOAD_SAVED_SCHOOL_REQUEST,
    });
  };

  const loadUserPosts = () => {
    dispatch({
      type: LOAD_USER_POSTS_REQUEST,
    });
  };

  useEffect(() => {
    loadSavedSchool();
    loadUserPosts();
  }, []);

  useEffect(() => {
    if (listRef.current) {
      const listHeight = listRef.current.offsetHeight;
      const parentHeight = listRef.current.parentNode.offsetHeight;
      if (listHeight > parentHeight) {
        listRef.current.parentNode.style.height = `${listHeight}px`;
      } else {
        listRef.current.parentNode.style.height = "auto";
      }
    }
  }, [schoolBoardPosts]);

  return (
    <>
      <Col xs={24} md={11}>
        <SchoolWrapper>
          <ProfileTitle>찜한 학교들</ProfileTitle>
          찜한 학교는 최대 10개까지 볼 수 있습니다.
          <div>
            <SchoolList schools={followList} />
          </div>
        </SchoolWrapper>
      </Col>
      <Col xs={24} md={11} offset={4}>
        <LikePostWrapper>
          <ProfileTitle>좋아요 누른 게시물</ProfileTitle>
          <LikePostList
            dataSource={schoolBoardPosts}
            pagination={{
              align: "center",
              onChange: (page) => {
                // console.log(page);
              },
              pageSize: 5,
            }}
            renderItem={(item) => (
              <Link to={`/schoolboard/${item.category}/${item.id}`}>
                <ItemWrapper className="hover-item">
                  <List.Item>
                    <Tag>{changeCategory(item.category)}</Tag> {item.title}
                  </List.Item>
                </ItemWrapper>
              </Link>
            )}
            ref={listRef}
          />
        </LikePostWrapper>
      </Col>
    </>
  );
};

export default ProfileRecentRecord;
