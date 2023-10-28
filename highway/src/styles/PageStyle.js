import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
`;
export const SubWrapper = styled.div`
  text-align: center;
  width: 100vw;
  margin: 0 auto;
  background-color: rgb(242, 242, 242);
  display: flex;
  flex-direction: colum;
  justify-content: center;
`;
export const NoDecoLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
