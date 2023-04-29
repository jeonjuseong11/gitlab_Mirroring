import { RightOutlined } from "@ant-design/icons";
export default function SlideButton({ direction, onClick }) {
  return (
    <button onClick={onClick} className={`btn-slide-control btn-${direction}`}>
      <RightOutlined />
    </button>
  );
}
