import { UploadOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_IMAGE, UPLOAD_IMAGES_REQUEST } from "../constants/actionTypes";

const ImageUpload = () => {
  const [fileList, setFileList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const dispatch = useDispatch();
  const uploadImagesLoading = useSelector((state) => state.post.uploadImagesLoading);
  const { imagePaths } = useSelector((state) => state.post);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handlePreview = (file) => {
    const index = fileList.indexOf(file);
    if (index !== -1) {
      setPreviewImage(imagePaths[index]);
      setPreviewVisible(true);
    }
  };

  useEffect(() => {
    console.log(uploadImagesLoading);
  }, [uploadImagesLoading]);

  const handleFileChange = (file) => {
    console.log(file);
    const isSizeValid = file.size <= 10 * 1024 * 1024; // 10MB

    if (!isSizeValid) {
      setModalVisible(true);
      return;
    }

    // 이미지 업로드 액션을 디스패치합니다.
    const imageFormData = new FormData();
    imageFormData.append("image", file, file.name); // 파일 객체를 직접 사용

    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });

    // 이미지를 fileList에 추가합니다.
    const newFile = { ...file };
    newFile.url = URL.createObjectURL(file); // 이미지 파일의 url 속성 설정
    setFileList([...fileList, newFile]); // 수정된 파일 객체를 추가
  };

  const handleRemove = (file) => {
    const index = fileList.indexOf(file);
    if (index !== -1) {
      dispatch({
        type: REMOVE_IMAGE,
        data: index,
      });

      const newFileList = fileList.filter((item) => item !== file);
      setFileList(newFileList);
    }
  };

  useEffect(() => {
    console.log(imagePaths);
  }, [imagePaths]);

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
        customRequest={({ file }) => handleFileChange(file)}
        onRemove={handleRemove}
        onPreview={handlePreview}
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
        <p>이미지 파일은 10MB 이하만 업로드 가능합니다.</p>
      </Modal>

      <Modal
        visible={previewVisible}
        onCancel={() => setPreviewVisible(false)}
        centered
        footer={null}
      >
        <img alt="Preview" src={previewImage} style={{ width: "100%" }} />
      </Modal>
    </>
  );
};

export default ImageUpload;
