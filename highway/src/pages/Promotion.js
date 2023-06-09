import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import { PromotionWrapper } from "../styles/PromotionStyle";

const Promotion = () => {
  const location = useLocation();
  return (
    <PromotionWrapper>
      <Outlet />
    </PromotionWrapper>
  );
};

export default Promotion;
