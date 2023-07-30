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

  // State to hold the window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to update window width state on window resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Add event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine if it's an xs screen (screen width less than or equal to 576px)
  const isXsScreen = windowWidth <= 576;

  return (
    <div>
      <Header />
      <MenuWrapper>
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={24} md={15}>
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
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default TopMenu;
