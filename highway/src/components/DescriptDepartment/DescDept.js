import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_SCHOOL_CURRIS_REQUEST } from "../../constants/actionTypes";
import { Select, Space } from "antd";

const testItem = [
  {
    schoolId: 2,
    grade: [
      {
        grade: 1,
        depart: [
          {
            departTitle: "컴퓨터 그래픽",
            choose: "Public",
            chapter: [
              { step1: "title1", content: "content" },
              { step2: "title2", content: "content" },
              { step3: "title3", content: "content" },
              { step4: "title4", content: "content" },
            ],
          },
          {
            departTitle: "컴퓨터 시스템 일반",
            choose: "Public",
            chapter: [
              { step1: "title1", content: "content" },
              { step2: "title2", content: "content" },
              { step3: "title3", content: "content" },
              { step4: "title4", content: "content" },
            ],
          },
          {
            departTitle: "프로그래밍",
            choose: "Public",
            chapter: [
              { step1: "title1", content: "content" },
              { step2: "title2", content: "content" },
              { step3: "title3", content: "content" },
              { step4: "title4", content: "content" },
            ],
          },
        ],
      },
      {
        grade: 2,
        depart: [
          {
            departTitle: "자료구조",
            choose: "Public",
            chapter: [
              { step1: "title1", content: "content" },
              { step2: "title2", content: "content" },
              { step3: "title3", content: "content" },
              { step4: "title4", content: "content" },
            ],
          },
          {
            departTitle: "정보 처리와 관리",
            choose: "Public",
            chapter: [
              { step1: "title1", content: "content" },
              { step2: "title2", content: "content" },
              { step3: "title3", content: "content" },
              { step4: "title4", content: "content" },
            ],
          },
          {
            departTitle: "응용 프로그래밍 화면 구현",
            choose: "Public",
            chapter: [
              { step1: "title1", content: "content" },
              { step2: "title2", content: "content" },
              { step3: "title3", content: "content" },
              { step4: "title4", content: "content" },
            ],
          },
          {
            departTitle: "응용 프로그래밍 개발",
            choose: "소프트웨어 개발 코스",
            chapter: [
              { step1: "title1", content: "content" },
              { step2: "title2", content: "content" },
              { step3: "title3", content: "content" },
              { step4: "title4", content: "content" },
            ],
          },
          {
            departTitle: "미디어 콘텐츠 일반",
            choose: "웹 제작 코스",
            chapter: [
              { step1: "title1", content: "content" },
              { step2: "title2", content: "content" },
              { step3: "title3", content: "content" },
              { step4: "title4", content: "content" },
            ],
          },
        ],
      },
      {
        grade: 3,
        depart: [
          {
            departTitle: "응용 프로그래밍 화면 구현",
            choose: "Public",
            chapter: [
              { step1: "title1", content: "content" },
              { step2: "title2", content: "content" },
              { step3: "title3", content: "content" },
              { step4: "title4", content: "content" },
            ],
          },
          {
            departTitle: "데이터베이스 프로그래밍",
            choose: "Public",
            chapter: [
              { step1: "title1", content: "content" },
              { step2: "title2", content: "content" },
              { step3: "title3", content: "content" },
              { step4: "title4", content: "content" },
            ],
          },
          {
            departTitle: "스마트 문화 앱 콘텐츠 제작",
            choose: "Public",
            chapter: [
              { step1: "title1", content: "content" },
              { step2: "title2", content: "content" },
              { step3: "title3", content: "content" },
              { step4: "title4", content: "content" },
            ],
          },
          {
            departTitle: "응용 프로그래밍 개발",
            choose: "소프트웨어 개발 코스",
            chapter: [
              { step1: "title1", content: "content" },
              { step2: "title2", content: "content" },
              { step3: "title3", content: "content" },
              { step4: "title4", content: "content" },
            ],
          },
          {
            departTitle: "전자 상거래 실무",
            choose: "웹 제작 코스",
            chapter: [
              { step1: "title1", content: "content" },
              { step2: "title2", content: "content" },
              { step3: "title3", content: "content" },
              { step4: "title4", content: "content" },
            ],
          },
          {
            departTitle: "기업과 경영",
            choose: "Public",
            chapter: [
              { step1: "title1", content: "content" },
              { step2: "title2", content: "content" },
              { step3: "title3", content: "content" },
              { step4: "title4", content: "content" },
            ],
          },
          {
            departTitle: "빅데이터 분석",
            choose: "Public",
            chapter: [
              { step1: "title1", content: "content" },
              { step2: "title2", content: "content" },
              { step3: "title3", content: "content" },
              { step4: "title4", content: "content" },
            ],
          },
          {
            departTitle: "매장 판매",
            choose: "Public",
            chapter: [
              { step1: "title1", content: "content" },
              { step2: "title2", content: "content" },
              { step3: "title3", content: "content" },
              { step4: "title4", content: "content" },
            ],
          },
          {
            departTitle: "패션 상품 유통 관리",
            choose: "Public",
            chapter: [
              { step1: "title1", content: "content" },
              { step2: "title2", content: "content" },
              { step3: "title3", content: "content" },
              { step4: "title4", content: "content" },
            ],
          },
        ],
      },
    ],
  },
];

const DescDept = () => {
  const { schoolCurris } = useSelector((state) => state.school);
  const dispatch = useDispatch();
  const [grade, setGrade] = useState(1);
  const [departTitle, setDepartTitle] = useState();
  const [choose, setChoose] = useState();

  const testCurri = testItem[0].grade;

  const testCurriGradeMap = testCurri.map((item) => {
    return item;
  });
  const testCurriDepartMap = testCurriGradeMap.map((item) => {
    const gradeDepart = item.depart;
    if (item.grade == grade) {
      return gradeDepart;
    }
  });
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

  // const testRender = (value, f) => {
  //   console.log(value[0].grade[f - 1]);
  // };
  const chooseDepart = testItem[0].grade[grade - 1].depart;

  const testRender = chooseDepart.map((item) => {
    console.log(`item:${item.departTitle}`);
    console.log(`departTitle${departTitle}`);
    if (item.departTitle === departTitle) {
      console.log(item);
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
      {testItem[0].grade.grade}
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
        {/* <Select
          style={{
            width: 120,
          }}
          options={selectChoose}
        /> */}
      </Space>
      <div>{testRender}</div>
    </div>
  );
};

export default DescDept;
