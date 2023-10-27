import { Col, List, Radio, Tag } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LOAD_SAVED_SCHOOL_REQUEST,
  LOAD_USER_POSTS_REQUEST,
  LOAD_WROTE_POSTS_REQUEST,
} from "../../constants/actionTypes";
import SchoolList from "../../pages/SchoolList";
import { changeCategory } from "../../pages/Board/BoardMain";
import { Link } from "react-router-dom";
import {
  ItemWrapper,
  LikePostList,
  LikePostWrapper,
  ProfileTitle,
  SchoolWrapper,
  WrotePostsList,
} from "../../styles/ProfileStyle";

const ProfileRecentRecord = () => {
  const { followList } = useSelector((state) => state.school);
  const { schoolBoardPosts } = useSelector((state) => state.post);
  const { wrotePosts } = useSelector((state) => state.post);
  const [toggle, setToggle] = useState(false);
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

  const loadWrotePosts = () => {
    dispatch({
      type: LOAD_WROTE_POSTS_REQUEST,
    });
  };

  useEffect(() => {
    loadSavedSchool();
    loadUserPosts();
    loadWrotePosts();
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
          <p>찜한 학교는 최대 10개까지 볼 수 있습니다.</p>
          <div>
            <SchoolList schools={followList} />
          </div>
        </SchoolWrapper>
      </Col>
      {toggle ? (
        <Col xs={{ span: 24, offset: 0 }} md={{ span: 11, offset: 4 }}>
          <LikePostWrapper>
            <ProfileTitle>
              좋아요 누른 게시물
              <Radio.Group defaultValue="like" style={{ float: "right" }}>
                <Radio.Button
                  value="like"
                  onClick={() => {
                    setToggle(true);
                  }}
                >
                  좋아요
                </Radio.Button>
                <Radio.Button
                  value="wrote"
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  내가 쓴 글
                </Radio.Button>
              </Radio.Group>
            </ProfileTitle>
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
      ) : (
        <Col xs={{ span: 24, offset: 0 }} md={{ span: 11, offset: 4 }}>
          <WrotePostsList>
            <ProfileTitle>
              내가 작성한 게시글
              <Radio.Group defaultValue="wrote" style={{ float: "right" }}>
                <Radio.Button
                  value="like"
                  onClick={() => {
                    setToggle(true);
                  }}
                >
                  좋아요
                </Radio.Button>
                <Radio.Button
                  value="wrote"
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  내가 쓴 글
                </Radio.Button>
              </Radio.Group>
            </ProfileTitle>
            <LikePostList
              dataSource={wrotePosts}
              pagination={{
                align: "center",
                onChange: (page) => {
                  // console.log(page);
                },
                pageSize: 5,
              }}
              renderItem={(item) => (
                <Link to={`/schoolboard/${item.board.category}/${item.board.id}`}>
                  <ItemWrapper className="hover-item">
                    <List.Item>
                      <Tag>{changeCategory(item.board.category)}</Tag> {item.board.title}
                    </List.Item>
                  </ItemWrapper>
                </Link>
              )}
              ref={listRef}
            />
          </WrotePostsList>
        </Col>
      )}
    </>
  );
};

export default ProfileRecentRecord;
