import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_SCHOOL_CURRIS_REQUEST } from "../../constants/actionTypes";
import { Select, Space } from "antd";
import { descCurri } from "../../utils/Curri";
import { TestSchoolCurriDiv } from "../../styles/DescCurriStyled";
import { useParams } from "react-router-dom";

const DescDept = () => {
  const { schoolCurris } = useSelector((state) => state.school);
  const { schoolId } = useParams();
  const dispatch = useDispatch();
  const [grade, setGrade] = useState(1);
  const [departTitle, setDepartTitle] = useState();
  const [choose, setChoose] = useState(); // 공통 과목인지 선택 과목인지 판단하기 위한 변수
  const [testDepart, setTestDepart] = useState(0);
  const testDescDesign = schoolCurris?.testDepart;

  // schoolCurris의 key값을 저장
  const schoolCurriDepart = Object.keys(schoolCurris);
  // schoolCurris의 value값을 저장
  const schoolCurriDepartValues = Object.values(schoolCurris);
  // schoolCurris의 key와 value로 새로운 배열로 저장
  const schoolCurriDepartArr = [{ schoolCurriDepart: schoolCurriDepartValues }];
  const schoolCurriDepartArrMap = schoolCurriDepartArr.map((item) => {
    const schoolCurriDepartItems = item.schoolCurriDepart;
    const schoolCurriDepartItemMap = schoolCurriDepartItems.map((it) => {
      return it;
    });
    return schoolCurriDepartItemMap;
  });

  const testDescDesignMap = schoolCurriDepartArr?.map((item) => {
    if (item.grade == grade) {
      return (
        <TestSchoolCurriDiv
          dangerouslySetInnerHTML={{ __html: item.content }}
        ></TestSchoolCurriDiv>
      );
    }
  });

  // 학과, 학년
  const schoolCurriDepartArrGrades =
    schoolCurriDepartArr[0].schoolCurriDepart?.[testDepart];
  // 학과, 학년 Map
  const schoolCurriDepartArrGradeMap = schoolCurriDepartArrGrades?.map(
    (item) => {
      if (item.grade == grade) {
        return (
          <TestSchoolCurriDiv
            style={{ textAlign: "left", marginLeft: "0rem" }}
            dangerouslySetInnerHTML={{ __html: item.content }}
          ></TestSchoolCurriDiv>
        );
      }
    }
  );
  // const testCurri = descCurri[0].desc[0].grade; // 학년별 객체

  // // 학년별 map
  // const testCurriGradeMap = testCurri.map((item) => {
  //   return item;
  // });
  // // 학년별 현재 학년과 맞는지 비교 후 객체 반환(undefined 포함)
  // const testCurriDepartMap = testCurriGradeMap.map((item) => {
  //   const gradeDepart = item.depart;
  //   if (item.grade == grade) {
  //     return gradeDepart;
  //   }
  // });
  // // undefined값 제거
  // const mapDepart = testCurriDepartMap.filter((data) => data !== undefined);
  // const selectDepart = mapDepart[0].map((item) => {
  //   return {
  //     label: item.departTitle,
  //     value: item.departTitle,
  //     public: item.choose,
  //   };
  // });
  // // 공통 교과인지 선택 교과인지 판단(사용 미정))
  // const selectChoose = selectDepart.map((item) => {
  //   return {
  //     label: item.public,
  //     value: item.public,
  //   };
  // });

  // // 과목별 객체[
  // const chooseDepart = descCurri[0].desc[0].grade[grade - 1].depart;

  // // 과목별 객체 map
  // const testRender = chooseDepart.map((item) => {
  //   if (item.departTitle === departTitle) {
  //     return (
  //       <div>
  //         <div>{item.departTitle}</div>
  //       </div>
  //     );
  //   }
  // });

  const loadSchoolCurris = () => {
    dispatch({
      type: LOAD_SCHOOL_CURRIS_REQUEST,
      data: { id: schoolId },
    });
  };

  useEffect(() => {
    loadSchoolCurris();
  }, []);

  return (
    <div>
      <h3>학교 커리큘럼</h3>
      <Space wrap>
        <Select
          style={{
            width: 120,
          }}
          onChange={(e) => {
            setTestDepart(e);
          }}
          defaultValue={0}
          options={[
            { label: "마케팅경영과", value: 0 },
            { label: "베이커리카페과", value: 1 },
            { label: "앱서비스과", value: 2 },
            { label: "패션산업디자인과", value: 3 },
          ]}
        />
        <Select
          style={{
            width: 120,
          }}
          onChange={(e) => {
            setDepartTitle();
            setGrade(e);
          }}
          defaultValue={1}
          options={[
            { label: "1학년", value: 1 },
            { label: "2학년", value: 2 },
            { label: "3학년", value: 3 },
          ]}
        />
      </Space>
      {schoolCurriDepartArrGradeMap}
    </div>
  );
};

export default DescDept;
