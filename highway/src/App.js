import { Route, Routes } from "react-router-dom";
import "./App.css";
import Categories from "./components/Categories";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Promotion from "./pages/Promotion";
import SchoolRanking from "./pages/SchoolRanking";
import Search from "./pages/Search";
import SIgnUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SIgnUp />} />
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
