import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "./Header";
const categories = [
  {
    name: "schoolRanking",
    text: "학교 랭킹",
  },
  {
    name: "search",
    text: "내 학교 찾기",
  },
  {
    name: "promotion",
    text: "홍보자료",
  },
];

const Categories = () => {
  return (
    <div>
      <Header />
      <header>
        <div>
          {categories.map((c) => (
            <NavLink key={c.name} to={c.name === "home" ? "/" : `/${c.name}`}>
              {c.text}
            </NavLink>
          ))}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Categories;
