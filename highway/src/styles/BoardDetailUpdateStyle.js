import { Button, Col, Input, Select } from "antd";
import ReactQuill from "react-quill";
import styled from "styled-components";

export const BoardDetailUpdateCol = styled(Col)`
  text-align: left;
  margin-top: 1rem;
  padding: 1rem;
  height: 3.5rem;
  margin-top: 2rem;
`;
export const BoardDetailUpdateSelect = styled(Select)`
  width: 30%;
  border-radius: 0;
`;
export const BoardDetailUpdateReactQuill = styled(ReactQuill)`
  height: 20rem;
`;

export const UpdateBoardDetailButton = styled(Button)`
  width: 10rem;
  margin-top: 2rem;
  height: 3rem;
  margin-right 1rem;
  border-radius: 50px;
  float: right;
`;
export const CancelUpdateBoardDetalilButton = styled(Button)`
  width: 10rem;
  height: 3rem;
  margin-top: 2rem;
  border-radius: 50px;
  float: right;
`;
// RecommnedList
export const RecommnedListCol = styled(Col)`
  height: 27rem;
  margin-left: 0.5rem;
  border-radius: 10px;
  background: #f2f2f2;
`;
export const RecommnedListImage = styled.div`
  width: 18rem;
  height: 10rem;
  background: #f2f2f2;
  border-radius: 10px;
`;
export const RecommnedListTItle = styled.div`
  width: 18rem;
  color: black;
  text-align: left;
  margin-left: 3rem;
`;
export const RecommnedListBetweenOne = styled.div`
  margin-top: 5rem;
  margin-left: 2.5rem;
`;
export const RecommnedListBetweenTwo = styled.div`
  margin-top: 2rem;
  margin-left: 2.5rem;
`;
