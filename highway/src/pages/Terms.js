import React from "react";
import { items } from "../utils/Agree";
import { Anchor } from "antd";
import { TermGroup, TermWrapper, TermItem } from "../styles/TermsStyle";
import Service from "../components/Terms/Service";
import Private from "../components/Terms/Private";
import YoungPrivate from "../components/Terms/YoungPrivate";
import TermBtn from "../components/Terms/TermBtn";

const Terms = () => {
  return (
    <TermWrapper>
      <Anchor
        direction="horizontal"
        items={items}
        style={{ backgroundColor: "#FFFFFF" }}
      />
      <TermGroup>
        <TermItem id="service">
          <Service />
        </TermItem>
        <TermItem id="private">
          <Private />
        </TermItem>
        <TermItem id="youngprivate">
          <YoungPrivate />
        </TermItem>
        <TermItem id="termbtn">
          <TermBtn />
        </TermItem>
      </TermGroup>
    </TermWrapper>
  );
};

export default Terms;
