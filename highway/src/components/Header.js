import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 2rem;
`;

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Title to="/">HIGHWAY</Title>
      {isLoggedIn ? (
        <Link to="/profile">userid</Link>
      ) : (
        <Link to="/login">로그인</Link>
      )}
    </div>
  );
};

export default Header;
