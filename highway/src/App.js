import { ConfigProvider, message, Modal } from "antd";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_USER_REQUEST, REFRESH_TOKEN_REQUEST } from "./constants/actionTypes";

import TopMenu from "./components/Menu/TopMenu";
import SchoolDetail from "./pages/SchoolDetail";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Promotion from "./pages/Promotion";
import SchoolRanking from "./pages/SchoolRanking";
import Search from "./pages/Search";
import SignUp from "./pages/SignUp";
import RoleSelctor from "./pages/RoleSelector";
import UserProfile from "./pages/UserProfile";
import PromotionNews from "./components/Promotion/PromotionNews";
import PromotionVideos from "./components/Promotion/PromotionVideos";
import PromotionNewsDetail from "./components/Promotion/PromotionNewsDetail";
import axios from "axios";
import SchoolBoard from "./pages/SchoolBoard";
import SchoolBoardDetail from "./pages/Board/SchoolBoardDetail";

import moment from "moment";
import PromotionHome from "./components/Promotion/PromotionHome";
import PromotionVideoDetail from "./components/Promotion/PromotionVideoDetail";
import ProfileRecentRecord from "./components/Profile/ProfileRecentRecord";
import BoardMain from "./pages/Board/BoardMain";
import BoardPostForm from "./components/Board/BoardPostForm";
import { info } from "./utils/Message";
import BoardDetailUpdateForm from "./components/Board/BoardDetailUpdateForm";
import PromotionVideosVer2 from "./components/Promotion/PromotionVideosVer2";
import DescDept from "./components/DescriptDepartment/DescDept";
import FeedBack from "./pages/FeedBack";
import FeedbackPostForm from "./components/Feedback/FeedbackPostForm";
import FeedbackDetail from "./components/Feedback/FeedbackDetail";

function App() {
  const dispatch = useDispatch();
  const [hasShownWelcomeMessage, setHasShownWelcomeMessage] = useState(false);
  const access = localStorage.getItem("ACCESSTOKEN");
  const expire = localStorage.getItem("EXPIRES");
  const navigate = useNavigate();
  const { me } = useSelector((state) => state.user);
  const reissueToken = () => {
    // Token 재발행
    dispatch({
      type: REFRESH_TOKEN_REQUEST,
    });
  };

  const loadUser = () => {
    dispatch({
      type: LOAD_USER_REQUEST,
    });
  };

  const setupTokenRefresh = (expire) => {
    const expireTime = moment(expire);
    const nowTime = moment();
    //    console.log(moment(expireTime).diff(nowTime.format()) > 0);
    if (moment(expireTime).diff(nowTime.format()) < 0) {
      localStorage.removeItem("ACCESSTOKEN");
      localStorage.removeItem("REFRESHTOKEN");
      localStorage.removeItem("EXPIRES");
      info("로그인 만료됨");
      navigate("/login");
      return;
    }
    const refreshInterval = expireTime.diff(nowTime);
    // console.log(refreshInterval);
    setInterval(reissueToken, refreshInterval - 10);
  };

  useEffect(() => {
    const access = localStorage.getItem("ACCESSTOKEN");
    const expire = localStorage.getItem("EXPIRES");
    if (access) {
      axios.defaults.headers.common["ACCESS_TOKEN"] = access;
    }
    if (expire) {
      setupTokenRefresh(expire);
      loadUser();
    }
  }, [access, expire]);

  useEffect(() => {
    if (
      me &&
      !hasShownWelcomeMessage &&
      localStorage.getItem("HAS_SHOWN_WELCOME_MESSAGE") !== "true"
    ) {
      info(`${me.userName}님 환영합니다.`);
      setHasShownWelcomeMessage(true);
      // 사용자가 로그인 성공 후에만 한 번 환영 메시지를 표시하도록 설정
      localStorage.setItem("HAS_SHOWN_WELCOME_MESSAGE", "true");
    }
  }, [me, hasShownWelcomeMessage]);

  // 새로고침을 해도 환영 메시지가 더 이상 나타나지 않도록 체크
  useEffect(() => {
    const hasShownMessage = localStorage.getItem("HAS_SHOWN_WELCOME_MESSAGE");
    if (hasShownMessage === "true") {
      setHasShownWelcomeMessage(true);
    }
  }, []);

  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const isBoardDetailPage = /^\/schoolboard\/\d+$/.test(location.pathname);
    const isNotAllowedPage = /^\/schoolboard\/\d+\/\d+$/.test(location.pathname);

    const isLoggedIn = !!access; // 이 부분은 프로젝트의 로그인 상태 관리 방식에 따라 조정

    if (isBoardDetailPage && !isNotAllowedPage && !isLoggedIn) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [location.pathname, access]);

  const handleModalOk = () => {
    setShowModal(false);
    navigate("/login");
  };

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#8282ff" } }}>
      <div className="App">
        {showModal && (
          <Modal title="서비스 이용 안내" open={showModal} onOk={handleModalOk} centered>
            해당 서비스는 로그인이 필요합니다.
          </Modal>
        )}
        <Routes>
          <Route element={<TopMenu />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/desc" element={<DescDept />} />
            {/* 임시 학교 커리큘럼창*/}
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/signup" element={<RoleSelctor />} />
            <Route exact path="/signup/:role" element={<SignUp />} />
            <Route element={<UserProfile />}>
              <Route exact path="/profile/" element={<ProfileRecentRecord />} />
            </Route>
            <Route element={<SchoolBoard />}>
              <Route exact path="/schoolboard/" element={<BoardMain />} />
              <Route exact path="/schoolboard/:category" element={<BoardMain />} />
            </Route>
            <Route exact path="/schoolboard/:category/:postId" element={<SchoolBoardDetail />} />
            <Route exact path="/schoolboard/post" element={<BoardPostForm />} />
            <Route exact path="/schoolboard/:postId/update" element={<BoardDetailUpdateForm />} />
            <Route exact path="/promotion" element={<Promotion />}>
              <Route exact path="/promotion" element={<PromotionHome />} />
              <Route exact path="/promotion/news" element={<PromotionNews />} />
              <Route exact path="/promotion/videos" element={<PromotionVideos />} />
              <Route exact path="/promotion/videos2" element={<PromotionVideosVer2 />} />
            </Route>
            <Route exact path="/promotion/news/:newsId" element={<PromotionNewsDetail />} />
            <Route exact path="/promotion/videos/:videoId" element={<PromotionVideoDetail />} />
            <Route exact path="/schoolranking" element={<SchoolRanking />} />
            <Route exact path="/schooldetail/:schoolId" element={<SchoolDetail />} />
            <Route exact path="/feedback" element={<FeedBack />} />
            <Route exact path="/feedback/:id" element={<FeedbackDetail />} />
            <Route exact path="/feedback/post" element={<FeedbackPostForm />} />
          </Route>
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default App;
