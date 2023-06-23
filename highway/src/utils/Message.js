import { Button, message, Modal } from "antd";

export const info = (props) => {
  message.info(props);
};
export const error = (props) => {
  Modal.error({
    title: "로그인 실패",
    content: props,
    style: { top: "40vh" },
  });
};
export const success = (props) => {
  Modal.success({
    content: props,
  });
};
export const needLogin = (props) => {
  Modal.confirm({
    content: "로그인이 필요한 서비스입니다.",
    okText: "이동하기",
    cancelText: "취소",
    onOk: props,
  });
};
