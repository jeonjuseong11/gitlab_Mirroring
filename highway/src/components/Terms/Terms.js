import React from "react";
import { items } from "../../utils/Agree";
import { Anchor } from "antd";
import { TermGroup, TermWrapper, TermItem } from "../../styles/TermsStyle";
import Service from "./Service";
import Private from "./Private";
import YoungPrivate from "./YoungPrivate";

const Terms = () => {
  return (
    <TermWrapper>
      <Anchor direction="horizontal" items={items} />
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
      </TermGroup>
    </TermWrapper>
  );
};

export default Terms;
