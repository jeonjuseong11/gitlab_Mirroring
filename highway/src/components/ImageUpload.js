import { UploadOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_IMAGE, SET_IMAGES_REQUEST, UPLOAD_IMAGES_REQUEST } from "../constants/actionTypes";

const ImageUpload = ({ imageList }) => {
  const [fileList, setFileList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [sizeModalVisible, setSizeModalVisible] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const dispatch = useDispatch();
  const { imagePaths, uploadImagesLoading, uploadImagesError } = useSelector((state) => state.post);

  const handleCloseModal = () => {
    setModalVisible(false);
    setSizeModalVisible(false);
  };

  const handlePreview = (file) => {
    const index = fileList.indexOf(file);
    if (index !== -1) {
      setPreviewImage(imagePaths[index].imageUrl[0]);
      setPreviewVisible(true);
    }
  };

  useEffect(() => {
    console.log(uploadImagesLoading);
  }, [uploadImagesLoading]);

  const handleFileChange = (file) => {
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
      data: { imageFormData: imageFormData, newUrl: URL.createObjectURL(file) },
    });
  };

  const handleRemove = (file) => {
    const index = fileList.indexOf(file);
    if (index !== -1) {
      dispatch({
        type: REMOVE_IMAGE,
        data: index,
      });
    }
  };

  useEffect(() => {
    // console.log(imagePaths);
    // imagePaths 배열에서 각 이미지에 대한 URL을 생성하여 fileList에 추가
    const newFileList = imagePaths.map((imagePath, index) => ({
      uid: index,
      name: `images${index}`,
      status: "done",
      url: imagePath.file, // 이미지 URL에 쿼리 스트링 추가
    }));
    setFileList(newFileList);
  }, [imagePaths]);

  const beforeUploadCheck = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      setSizeModalVisible(true);
      return false;
    }
    return true;
  };
  useEffect(() => {
    if (uploadImagesError) {
      alert("이미지 업로드 실패");
    }
  }, [uploadImagesError]);
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

      <Modal open={modalVisible} onCancel={handleCloseModal} onOk={handleCloseModal} centered>
        <p>이미지 파일은 10MB 이하만 업로드 가능합니다.</p>
      </Modal>
      <Modal open={sizeModalVisible} onCancel={handleCloseModal} onOk={handleCloseModal} centered>
        <p>이미지 파일만 올릴 수 있습니다</p>
      </Modal>
      <Modal open={previewVisible} onCancel={() => setPreviewVisible(false)} centered footer={null}>
        <img alt="Preview" src={previewImage} style={{ width: "100%" }} />
      </Modal>
    </>
  );
};

export default ImageUpload;
