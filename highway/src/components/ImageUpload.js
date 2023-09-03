import { UploadOutlined } from "@ant-design/icons";
import { Modal, Spin, Upload } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_IMAGE, UPLOAD_IMAGES_REQUEST } from "../constants/actionTypes";

const ImageUpload = () => {
  const [fileList, setFileList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const uploadImagesLoading = useSelector((state) => state.post.uploadImagesLoading);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleFileChange = ({ fileList }) => {
    // 이미지 파일만 필터링하여 업로드합니다.
    const selectedImages = fileList.filter(
      (file) => file.status === "done" || file.status === "uploading"
    );

    if (selectedImages.length === 0) {
      return;
    }

    setFileList(selectedImages); // 이미지 파일만 선택된 fileList로 업데이트

    const imageFormData = new FormData();

    for (let i = 0; i < selectedImages.length; i++) {
      imageFormData.append("image", selectedImages[i].originFileObj, selectedImages[i].name);
    }

    // 이미지 업로드 액션을 디스패치합니다.
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  };

  const handleRemove = (file) => {
    // 이미지를 제거하는 액션을 디스패치합니다.
    dispatch({
      type: REMOVE_IMAGE,
      data: fileList.indexOf(file),
    });
  };

  const beforeUploadCheck = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      setModalVisible(true);
      return false;
    }
    return true;
  };

  return (
    <>
      <Upload
        fileList={fileList}
        multiple
        listType="picture-card"
        onChange={handleFileChange}
        onRemove={handleRemove}
        beforeUpload={beforeUploadCheck}
      >
        {fileList?.length >= 8 ? null : (
          <div>
            <UploadOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        )}
      </Upload>
      <Modal visible={modalVisible} onCancel={handleCloseModal} onOk={handleCloseModal} centered>
        <p>이미지 파일만 올릴 수 있습니다</p>
      </Modal>
      {uploadImagesLoading && (
        <div style={{ textAlign: "center", marginTop: 16 }}>
          <Spin size="large" />
        </div>
      )}
    </>
  );
};

export default ImageUpload;
