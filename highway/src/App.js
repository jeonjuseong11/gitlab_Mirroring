import { Route, Routes } from "react-router-dom";
import "./App.css";
import Categories from "./components/Categories";
import Home from "./pages/Home";
import Login from "./pages/Login";
import OtherSignUp from "./pages/OtherSignUp";
import Promotion from "./pages/Promotion";
import SchoolRanking from "./pages/SchoolRanking";
import Search from "./pages/Search";
import SignUp from "./pages/SignUp";
import StudentSignUp from "./pages/StudentSignUp";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/signup/student" element={<StudentSignUp />} />
        <Route path="/signup/other" element={<OtherSignUp />} />
        <Route element={<Categories />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/schoolranking" element={<SchoolRanking />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
