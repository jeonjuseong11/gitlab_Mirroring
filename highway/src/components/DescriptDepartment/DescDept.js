import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_SCHOOL_CURRIS_REQUEST } from "../../constants/actionTypes";
import { Select, Space } from "antd";
import { descCurri } from "../../utils/Curri";
import { TestSchoolCurriDiv } from "../../styles/DescCurriStyled";

const DescDept = () => {
  const { schoolCurris } = useSelector((state) => state.school);
  const dispatch = useDispatch();
  const [grade, setGrade] = useState(1);
  const [departTitle, setDepartTitle] = useState();
  const [choose, setChoose] = useState(); // 공통 과목인지 선택 과목인지 판단하기 위한 변수

  const testDescDesign = schoolCurris.패션산업디자인과;
  console.log(testDescDesign);

  const testDescDesignMap = testDescDesign?.map((item) => {
    console.log(item);
    if (item.grade == grade) {
      return (
        <TestSchoolCurriDiv
          dangerouslySetInnerHTML={{ __html: item.content }}
        ></TestSchoolCurriDiv>
      );
    }
  });

  // const testDescDesignMap = testDescDesign.map((item) => {
  //   console.log(item);
  // });

  // const schoolCurriMap = schoolCurris.map((item) => {
  //   console.log(item);
  // });

  const testCurri = descCurri[0].desc[0].grade; // 학년별 객체

  // 학년별 map
  const testCurriGradeMap = testCurri.map((item) => {
    return item;
  });
  // 학년별 현재 학년과 맞는지 비교 후 객체 반환(undefined 포함)
  const testCurriDepartMap = testCurriGradeMap.map((item) => {
    const gradeDepart = item.depart;
    if (item.grade == grade) {
      return gradeDepart;
    }
  });
  // undefined값 제거
  const mapDepart = testCurriDepartMap.filter((data) => data !== undefined);
  const selectDepart = mapDepart[0].map((item) => {
    return {
      label: item.departTitle,
      value: item.departTitle,
      public: item.choose,
    };
  });
  // 공통 교과인지 선택 교과인지 판단(사용 미정))
  const selectChoose = selectDepart.map((item) => {
    return {
      label: item.public,
      value: item.public,
    };
  });

  // 과목별 객체[
  const chooseDepart = descCurri[0].desc[0].grade[grade - 1].depart;

  // 과목별 객체 map
  const testRender = chooseDepart.map((item) => {
    if (item.departTitle === departTitle) {
      return (
        <div>
          <div>{item.departTitle}</div>
        </div>
      );
    }
  });

  const loadSchoolCurris = () => {
    dispatch({
      type: LOAD_SCHOOL_CURRIS_REQUEST,
      data: { id: 2 },
    });
  };

  useEffect(() => {
    loadSchoolCurris();
  }, []);
  return (
    <div>
      <h3>학교 커리큘럼 창입니다.</h3>

      {/* {descCurri[0].desc[0].grade.grade} */}
      <Space wrap>
        <Select
          style={{
            width: 120,
          }}
          onChange={(e) => {
            setDepartTitle();
            setGrade(e);
          }}
          defaultValue={0}
          options={[
            { label: "1학년", value: 1 },
            { label: "2학년", value: 2 },
            { label: "3학년", value: 3 },
          ]}
        />
        <Select
          style={{
            width: 120,
          }}
          onChange={(e) => {
            setDepartTitle(e);
          }}
          options={selectDepart}
        />
      </Space>
      {testDescDesignMap}
      {/* <div>{testRender}</div> */}
    </div>
  );
};

export default DescDept;
