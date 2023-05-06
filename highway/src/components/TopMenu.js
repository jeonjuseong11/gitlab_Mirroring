import React, { useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Header from "./Header";
import { Menu } from "antd";
import { Wrapper } from "../styles/PageStyle";
const MenuLists = [
  {
    key: "/schoolRanking",
    label: <Link to="/schoolRanking">학교 랭킹</Link>,
  },
  {
    key: "/search",
    label: <Link to="/search">내 학교 찾기</Link>,
  },
  {
    key: "/promotion",
    label: <Link to="/promotion">홍보자료</Link>,
  },
];
const TopMenu = () => {
  const location = useLocation();
  useEffect(() => {
    // console.log(location.pathname);
  }, [location]);
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
          <Menu
            mode="horizontal"
            items={MenuLists}
            selectedKeys={location.pathname}
          />
        </Wrapper>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default TopMenu;
