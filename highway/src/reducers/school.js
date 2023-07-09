import { produce } from "immer";
import {
  ADD_SAVED_SCHOOL_FAILURE,
  ADD_SAVED_SCHOOL_REQUEST,
  ADD_SAVED_SCHOOL_SUCCESS,
  ADD_SCHOOL_REVIEW_FAILURE,
  ADD_SCHOOL_REVIEW_REQUEST,
  ADD_SCHOOL_REVIEW_SUCCESS,
  LOAD_SAVED_SCHOOL_FAILURE,
  LOAD_SAVED_SCHOOL_REQUEST,
  LOAD_SAVED_SCHOOL_SUCCESS,
  LOAD_SCHOOL_INFO_FAILURE,
  LOAD_SCHOOL_INFO_REQUEST,
  LOAD_SCHOOL_INFO_SUCCESS,
  LOAD_SCHOOL_LIST_FAILURE,
  LOAD_SCHOOL_LIST_REQUEST,
  LOAD_SCHOOL_LIST_SUCCESS,
  LOAD_SCHOOL_REVIEWS_FAILURE,
  LOAD_SCHOOL_REVIEWS_REQUEST,
  LOAD_SCHOOL_REVIEWS_SUCCESS,
  REMOVE_SAVED_SCHOOL_FAILURE,
  REMOVE_SAVED_SCHOOL_REQUEST,
  REMOVE_SAVED_SCHOOL_SUCCESS,
} from "../constants/actionTypes";
export const initialState = {
  loadSchoolListLoading: false, //학교 리스트 로딩
  loadSchoolListDone: false,
  loadSchoolListError: null,
  loadSchoolInfoLoading: false, //단일 학교 정보 로딩
  loadSchoolInfoDone: false,
  loadSchoolInfoError: null,
  loadSchoolReviewsLoading: false, //학교 리뷰 로딩
  loadSchoolReviewsDone: false,
  loadSchoolReviewsError: null,
  addSchoolReviewLoading: false, //리뷰 등록
  addSchoolReviewDone: false,
  addSchoolReviewError: null,
  loadSavedSchoolLoading: false, //찜한 학교들 addloadSavedSchoolDone: false,
  loadSavedSchoolError: false,
  loadSavedSchoolDone: false,
  addSavedSchoolLoading: false, //학교 찜하기
  addSavedSchoolDone: false,
  addSavedSchoolError: false,
  removeSavedSchoolLoading: false, //학교 찜하기 삭제
  removeSavedSchoolDone: false,
  removeSavedSchoolError: false,
  schools: [
    // 임시 더미데이터 백엔드 오류 수정시 삭제
    {
      id: 189,
      locationCode: 4117110100,
      addressInfo: "경기도 안양시 만안구 안양동",
      genderType: "남녀공학",
      addressDetailsInfo: "708번지",
      establishmentType: "사립",
      websiteAddress: "http://www.kmh.hs.kr",
      faxNumber: "031-4460-1208",
      schoolName: "근명 고등학교",
      schoolAddressDetails: "(안양동)",
      schoolStreetAddress: "경기도 안양시 만안구 삼덕로 39",
      detailedAddress: "13998",
      telephoneNumber: "031-449-3567",
      administratioAnPhoneNumber: "031-449-3567",
      officePhoneNumber: "031-449-1201",
      zipCode: "430834",
    },
    {
      id: 225,
      locationCode: 4117110100,
      addressInfo: "경기도 안양시 만안구 안양동",
      genderType: "녀",
      addressDetailsInfo: "산 41-1.",
      establishmentType: "사립",
      websiteAddress: "https://anyangculture.hs.kr",
      faxNumber: "031-448-7755",
      schoolName: "안양 문화고등학교",
      schoolAddressDetails: "(안양동, 안양외국어고등학교, 안양문화고등학교)",
      schoolStreetAddress: "경기도 안양시 만안구 양화로37번길 36",
      detailedAddress: "14011",
      telephoneNumber: "031-470-4100",
      administratioAnPhoneNumber: "031-470-4100",
      officePhoneNumber: "031-470-4100",
      zipCode: "430010",
    },
  ],
  singleSchool: [],
  schoolReviews: [],
  followList: [],
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
        draft.schools = action.data;
        draft.loadSchoolListLoading = false;
        draft.loadSchoolListDone = true;
        break;
      case LOAD_SCHOOL_LIST_FAILURE:
        draft.loadSchoolListLoading = false;
        draft.loadSchoolListError = action.error;
        break;
      case LOAD_SCHOOL_INFO_REQUEST:
        draft.loadSchoolInfoLoading = true;
        draft.loadSchoolInfoDone = false;
        draft.loadSchoolInfoError = null;
        break;
      case LOAD_SCHOOL_INFO_SUCCESS:
        draft.singleSchool = action.data;
        draft.loadSchoolInfoLoading = false;
        draft.loadSchoolInfoDone = true;
        break;
      case LOAD_SCHOOL_INFO_FAILURE:
        draft.loadSchoolInfoLoading = false;
        draft.loadSchoolInfoError = action.error;
        break;
      case ADD_SCHOOL_REVIEW_REQUEST:
        draft.addSchoolReviewLoading = true;
        draft.addSchoolReviewDone = false;
        draft.addSchoolReviewError = null;
        break;
      case ADD_SCHOOL_REVIEW_SUCCESS:
        draft.schoolReviews.unshift(action.data);
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
        draft.schoolReviews = action.data;

        draft.loadSchoolReviewsLoading = false;
        draft.loadSchoolReviewsDone = true;
        break;
      case LOAD_SCHOOL_REVIEWS_FAILURE:
        draft.loadSchoolReviewsLoading = false;
        draft.loadSchoolReviewsError = action.error;
        break;
      default:
      case LOAD_SAVED_SCHOOL_REQUEST:
        draft.loadSavedSchoolLoading = true;
        draft.loadSavedSchoolDone = false;
        draft.loadSavedSchoolError = null;
        break;
      case LOAD_SAVED_SCHOOL_SUCCESS:
        draft.followList = action.data;
        draft.loadSavedSchoolLoading = false;
        draft.loadSavedSchoolDone = true;
        break;
      case LOAD_SAVED_SCHOOL_FAILURE:
        draft.loadSavedSchoolLoading = false;
        draft.loadSavedSchoolError = action.error;
        break;
      case ADD_SAVED_SCHOOL_REQUEST:
        draft.addSavedSchoolLoading = true;
        draft.addSavedSchoolDone = false;
        draft.addSavedSchoolError = null;
        break;
      case ADD_SAVED_SCHOOL_SUCCESS:
        draft.followList.push(action.data);
        draft.addSavedSchoolLoading = false;
        draft.addSavedSchoolDone = true;
        break;
      case ADD_SAVED_SCHOOL_FAILURE:
        draft.addSavedSchoolLoading = false;
        draft.addSavedSchoolError = action.error;
        break;
      case REMOVE_SAVED_SCHOOL_REQUEST:
        draft.addSavedSchoolLoading = true;
        draft.addSavedSchoolDone = false;
        draft.addSavedSchoolError = null;
        break;
      case REMOVE_SAVED_SCHOOL_SUCCESS:
        draft.followList.shift(action.data);
        draft.addSavedSchoolLoading = false;
        draft.addSavedSchoolDone = true;
        break;
      case REMOVE_SAVED_SCHOOL_FAILURE:
        draft.addSavedSchoolLoading = false;
        draft.addSavedSchoolError = action.error;
        break;

        return state;
    }
  });

export default reducer;
