import { produce } from "immer";
import {
  ADD_SCHOOL_REVIEW_FAILURE,
  ADD_SCHOOL_REVIEW_REQUEST,
  ADD_SCHOOL_REVIEW_SUCCESS,
  // LOAD_SCHOOL_INFO_FAILURE,
  // LOAD_SCHOOL_INFO_REQUEST,
  // LOAD_SCHOOL_INFO_SUCCESS,
  LOAD_SCHOOL_LIST_FAILURE,
  LOAD_SCHOOL_LIST_REQUEST,
  LOAD_SCHOOL_LIST_SUCCESS,
  LOAD_SCHOOL_REVIEWS_FAILURE,
  LOAD_SCHOOL_REVIEWS_REQUEST,
  LOAD_SCHOOL_REVIEWS_SUCCESS,
} from "../constants/actionTypes";
export const initialState = {
  addSchoolReviewLoading: false,
  addSchoolReviewDone: false,
  addSchoolReviewError: null,
  loadSchoolListLoading: false,
  loadSchoolListDone: false,
  loadSchoolListError: null,
  loadSchoolReviewsLoading: false,
  loadSchoolReviewsDone: false,
  loadSchoolReviewsError: null,
  schools: [
    {
      id: 1,
      logoURL: "/assets/schoolLogo1.png",
      schul_NM: "대진디자인고등학교", //학교이름
      descript: "학교 랭킹1",
      schul_RDNMA: "서울특별시 강남구 광평로 39길", //주소
      user_TELNO: "02-2226-8418", //전화번호
      USER_TELNO_SW: "02-4321-4321", //교무실 전화번호
      USER_TELNO_GA: "02-6789-1234", //행정실 전화번호
      hmpg_ADRES: "http://daejindesign.sen.hs.kr", //학교 홈페이지
      departs: [
        {
          depart: "전기전자과",
          description:
            "전기, 전자 분야의 깇 이론을 바탕으로 내선공사, 전자회로, 자동제어기기제작 등에 관한 기술을 습득하여 이론과 실무를 겸비한 우수한 전문 인력 양성을 목표로 한다",
        },
        {
          depart: "컴퓨터소프트웨어과",
          description:
            "미래 산업의 핵심인 소프트웨어 교육을 통해 스마트 기기, IoT 제어, 가상현실과 증강현실, 자율주행차량 제어 등을 개발하고 스마트폰 앱과 컴퓨터 소프트웨어를 다루는 전문 기술 인력양성을 목표로 한다",
        },
        {
          depart: "스마트콘텐츠과",
          description:
            "4차 산업 시대에 필요한 새로운 ICT 기술과 게임, 가상현실, 영상 등 다양한 콘텐츠 융함이 가능한 기술력을 키우고 미래 사회의 원동력이 되는 유능한 프로그래머와 콘텐츠 제작자 등 전문 인력 양성을 목표로 한다",
        },
        {
          depart: "산업디자인과",
          description:
            "디자인 기초 이론 및 실기 교육을 바탕으로 창조적 발상, 디자인 표현기법, 응용소프트웨어를 활용한 전문 교육과 다양한 콘텐츠 제작을 통해 창의적인 디자이너 양성을 목표로 한다",
        },
      ],
      tags: ["전자", "IT", "디자인"],
      members: [
        { id: 1, userName: "student1" },
        { id: 2, userName: "student2" },
      ],
      reviews: [],
      good: 10,
      followList: ["1", "2"],
      trafficRate: 5,
      facilityRate: 5,
      cafeteriaRate: 5,
      educationRate: 5,
      employmentRate: 5,
      schoolWebsite: "https://000.000.com",
    },
    {
      id: 2,
      logoURL: null,
      schul_NM: "OOO고등학교", //학교이름
      descript: "학교 랭킹2",
      schul_RDNMA: "서울특별시 강남구 광평로 39길2", //주소
      user_TELNO: "02-2226-8418", //전화번호
      USER_TELNO_SW: "02-1234-1234", //교무실 전화번호
      USER_TELNO_GA: "02-9876-4531", //행정실 전화번호
      hmpg_ADRES: "http://daejindesign.sen.hs.kr2", //학교 홈페이지
      departs: [
        {
          depart: "전기전자과2",
          description:
            "전기, 전자 분야의 깇 이론을 바탕으로 내선공사, 전자회로, 자동제어기기제작 등에 관한 기술을 습득하여 이론과 실무를 겸비한 우수한 전문 인력 양성을 목표로 한다",
        },
        {
          depart: "컴퓨터소프트웨어과2",
          description:
            "미래 산업의 핵심인 소프트웨어 교육을 통해 스마트 기기, IoT 제어, 가상현실과 증강현실, 자율주행차량 제어 등을 개발하고 스마트폰 앱과 컴퓨터 소프트웨어를 다루는 전문 기술 인력양성을 목표로 한다",
        },
        {
          depart: "스마트콘텐츠과2",
          description:
            "4차 산업 시대에 필요한 새로운 ICT 기술과 게임, 가상현실, 영상 등 다양한 콘텐츠 융함이 가능한 기술력을 키우고 미래 사회의 원동력이 되는 유능한 프로그래머와 콘텐츠 제작자 등 전문 인력 양성을 목표로 한다",
        },
        {
          depart: "산업디자인과2",
          description:
            "디자인 기초 이론 및 실기 교육을 바탕으로 창조적 발상, 디자인 표현기법, 응용소프트웨어를 활용한 전문 교육과 다양한 콘텐츠 제작을 통해 창의적인 디자이너 양성을 목표로 한다",
        },
      ],
      tags: ["경영", "디자인"],
      members: [],
      reviews: [],
      good: 10,
      followList: ["1", "2"],
      trafficRate: 0,
      facilityRate: 0,
      cafeteriaRate: 0,
      educationRate: 0,
      employmentRate: 0,
      schoolWebsite: "https://000.000.com",
    },
  ],
  school: [],
  schoolReviews: [
    {
      id: 1,
      author: "student1",
      tags: "전기전자과",
      trafficRate: 5.0,
      facilityRate: 5.0,
      cafeteriaRate: 5.0,
      educationRate: 5.0,
      employmentRate: 5.0,
      content: "Review1 contents",
    },
    {
      id: 2,
      author: "student2",
      tags: "컴퓨터소프트웨어과",
      trafficRate: 5.0,
      facilityRate: 5.0,
      cafeteriaRate: 5.0,
      educationRate: 5.0,
      employmentRate: 5.0,
      content: "Review2 contents",
    },
    {
      id: 3,
      author: "student3",
      tags: "전기전자과",
      trafficRate: 5.0,
      facilityRate: 5.0,
      cafeteriaRate: 5.0,
      educationRate: 5.0,
      employmentRate: 5.0,
      content: "Review3 contents",
    },
    {
      id: 4,
      author: "student4",
      tags: "산업디자인과",
      trafficRate: 5.0,
      facilityRate: 5.0,
      cafeteriaRate: 5.0,
      educationRate: 5.0,
      employmentRate: 5.0,
      content: "Review4 contents",
    },
  ],
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_SCHOOL_LIST_REQUEST:
        draft.loadSchoolListLoading = true;
        draft.loadSchoolListDone = false;
        draft.loadSchoolListError = null;
        break;
      case LOAD_SCHOOL_LIST_SUCCESS:
        // draft.schools.push(action.data);
        draft.loadSchoolListLoading = false;
        draft.loadSchoolListDone = true;
        break;
      case LOAD_SCHOOL_LIST_FAILURE:
        draft.loadSchoolListLoading = false;
        draft.loadSchoolListError = action.error;
        break;
      case ADD_SCHOOL_REVIEW_REQUEST:
        draft.addSchoolReviewLoading = true;
        draft.addSchoolReviewDone = false;
        draft.addSchoolReviewError = null;
        break;
      case ADD_SCHOOL_REVIEW_SUCCESS:
        const school = draft.schools.find((v) => v.id === parseInt(action.data.schoolId));
        school.reviews.unshift(action.data.values);
        console.log(action.data);
        draft.addSchoolReviewLoading = false;
        draft.addSchoolReviewDone = true;
        break;
      case ADD_SCHOOL_REVIEW_FAILURE:
        draft.addSchoolReviewLoading = false;
        draft.addSchoolReviewError = action.error;
        break;
      case LOAD_SCHOOL_REVIEWS_REQUEST:
        draft.loadSchoolReviewsLoading = true;
        draft.loadSchoolReviewsDone = false;
        draft.loadSchoolReviewsError = null;
        break;
      case LOAD_SCHOOL_REVIEWS_SUCCESS:
        // draft.schoolReviews = action.data;
        draft.schools.find((v) => v.id === parseInt(action.data.schoolId)).reviews =
          draft.schoolReviews;
        draft.loadSchoolReviewsLoading = false;
        draft.loadSchoolReviewsDone = true;
        break;
      case LOAD_SCHOOL_REVIEWS_FAILURE:
        draft.loadSchoolReviewsLoading = false;
        draft.loadSchoolReviewsError = action.error;
        break;
      default:
        return state;
    }
  });

export default reducer;
