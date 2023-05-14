import { ConfigProvider } from "antd";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import TopMenu from "./components/Menu/TopMenu";
import SchoolDetail from "./pages/SchoolDetail";
import SchoolDetailInfo from "./components/SchoolDetail/SchoolDetailInfo";
import SchoolDetailJob from "./components/SchoolDetail/SchoolDetailJob";
import SchoolDetailReview from "./components/SchoolDetail/SchoolDetailReview";
import SchoolDetailQuestion from "./components/SchoolDetail/SchoolDetailQuestion";

import Home from "./pages/Home";
import Login from "./pages/Login";
import OtherSignUp from "./pages/OtherSignUp";
import Promotion from "./pages/Promotion";
import SchoolRanking from "./pages/SchoolRanking";
import Search from "./pages/Search";
import SignUp from "./pages/SignUp";
import StudentSignUp from "./pages/StudentSignUp";
import UserProfile from "./pages/UserProfile";
import Terms from "./pages/Terms";
import PromotionNews from "./components/Promotion/PromotionNews";
import PromotionVideos from "./components/Promotion/PromotionVideos";
import PromotionNewsDetail from "./components/Promotion/PromotionNewsDetail";
import PromotionVideoDetail from "./components/Promotion/PromotionVideoDetail";

function App() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#8282ff" } }}>
      <div className="App">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/profile" element={<UserProfile />} />
          <Route exact path="/signup/student" element={<StudentSignUp />} />
          <Route exact path="/signup/other" element={<OtherSignUp />} />
          <Route exact path="/signup/student/terms" element={<Terms />} />
          <Route exact path="/signup/other/terms" element={<Terms />} />
          <Route element={<TopMenu />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/promotion" element={<Promotion />}>
              <Route exact path="/promotion/news" element={<PromotionNews />} />
              <Route exact path="/promotion/videos" element={<PromotionVideos />} />
            </Route>
            <Route exact path="/promotion/news/:newsId" element={<PromotionNewsDetail />} />
            <Route exact path="/promotion/videos/:videoId" element={<PromotionVideoDetail />} />
            <Route exact path="/schoolranking" element={<SchoolRanking />} />
            <Route exact path="/schooldetail/:schoolId" element={<SchoolDetail />}>
              <Route>
                <Route exact path="/schooldetail/:schoolId/info" element={<SchoolDetailInfo />} />
                <Route exact path="/schooldetail/:schoolId/job" element={<SchoolDetailJob />} />
                <Route
                  exact
                  path="/schooldetail/:schoolId/review"
                  element={<SchoolDetailReview />}
                />
                <Route
                  exact
                  path="/schooldetail/:schoolId/question"
                  element={<SchoolDetailQuestion />}
                />
              </Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default App;
