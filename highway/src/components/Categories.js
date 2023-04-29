import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "./Header";
import { Menu } from "antd";
import { Wrapper } from "../styles/PageStyle";
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
      <Wrapper>
        <Header />
      </Wrapper>
      <header
        style={{
          borderTop: "1px solid #c2c2c2",
          borderBottom: "1px solid #c2c2c2",
        }}
      >
        <Wrapper>
          <Menu mode="horizontal">
            {categories.map((c) => (
              <Menu.Item>
                <NavLink
                  key={c.name}
                  to={c.name === "home" ? "/" : `/${c.name}`}
                >
                  {c.text}
                </NavLink>
              </Menu.Item>
            ))}
          </Menu>
        </Wrapper>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Categories;
