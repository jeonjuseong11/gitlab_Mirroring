import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
import { Col, Menu, Row } from "antd";
import { getSelectedKey, MenuLists } from "./MenuList";
import { MenuWrapper } from "./MenuList";

const TopMenu = () => {
  const location = useLocation();
  useEffect(() => {
    // console.log(location.pathname);
  }, [location]);
  const selectedKey = getSelectedKey();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isXsScreen = windowWidth <= 576;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <MenuWrapper>
        <Row justify="center" gutter={[16, 16]} style={{ margin: "0 auto" }}>
          <Col style={{ maxWidth: "65rem", width: "100%" }}>
            <Menu
              style={{
                fontSize: "1.1rem",
                justifyContent: isXsScreen ? "center" : "inherit",
              }}
              mode="horizontal"
              items={MenuLists}
              selectedKeys={[selectedKey]}
            />
          </Col>
        </Row>
      </MenuWrapper>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default TopMenu;
