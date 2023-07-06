import React from "react";
import { TermWrapper } from "../styles/TermsStyle";
import Service from "../components/Terms/Service";
import Private from "../components/Terms/Private";
import YoungPrivate from "../components/Terms/YoungPrivate";
import TermBtn from "../components/Terms/TermBtn";

const Terms = () => {
  return (
    <TermWrapper>
      <Service />
      <Private />
      <YoungPrivate />
      <TermBtn />
    </TermWrapper>
  );
};

export default Terms;
