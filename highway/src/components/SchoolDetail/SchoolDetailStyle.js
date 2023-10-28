import { Rate, Row } from "antd";
import styled from "styled-components";

const mobile = `(max-width: 768px)`;
const tablet = `(min-width: 769px)`;

export const SubPageWrapper = styled.div`
  max-width: 65rem;
  background-color: #f2f2f2;
  padding: 1rem 0;
  width: 100%;
`;

export const StarRateWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 1rem;
  text-align: left;
  display: flex;
  justify-content: space-between;
`;

export const OneLineReviewWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
`;

export const ReviewDetailWrapper = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
`;

export const SchoolDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SchoolImg = styled.div`
  background-color: #f2f2f2;
  align-items: center;
  height: 10rem;
  text-align: center;
`;

export const SchoolInfo = styled.div`
  text-align: left;
  padding-bottom: 1rem;
  margin-top: 2rem;

  @media ${mobile} {
    margin-top: 2rem;
  }
`;

export const SchoolLogo = styled.div`
  background-color: white;
  display: inline-block;
  align-items: middle;
  border: 1px solid #c2c2c2;
  height: 5rem;
  width: 5rem;
  border-radius: 5px;
  position: relative;
  top: 6rem;
  left: -25rem;

  @media ${mobile} {
    left: -10vw;
  }
  @media ${mobile} {
    left: -7rem;
  }
`;

export const QuestionWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  height: auto;
  padding: 1rem;

  @media ${tablet} {
    height: 17rem;
  }
`;

export const FrequentAsked = styled.div`
  background: white;
  border-radius: 10px;
  height: auto;
  padding: 1rem;

  @media ${tablet} {
    height: 20rem;
  }
`;
export const ResponsiveRow = styled(Row)`
  justify-content: start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
export const ResponsiveRate = styled(Rate)`
  @media (min-width: 769px) {
    font-size: 200%;
  }
`;
