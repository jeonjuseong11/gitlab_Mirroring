import { produce } from "immer";
import {
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
  ADD_SCHOOL_REVIEW_FAILURE,
  ADD_SCHOOL_REVIEW_REQUEST,
  ADD_SCHOOL_REVIEW_SUCCESS,
  REMOVE_SCHOOL_REVIEW_REQUEST,
  REMOVE_SCHOOL_REVIEW_SUCCESS,
  REMOVE_SCHOOL_REVIEW_FAILURE,
  UPDATE_SCHOOL_REVIEW_REQUEST,
  UPDATE_SCHOOL_REVIEW_SUCCESS,
  UPDATE_SCHOOL_REVIEW_FAILURE,
  ADD_SAVED_SCHOOL_FAILURE,
  ADD_SAVED_SCHOOL_REQUEST,
  ADD_SAVED_SCHOOL_SUCCESS,
  REMOVE_SAVED_SCHOOL_FAILURE,
  REMOVE_SAVED_SCHOOL_REQUEST,
  REMOVE_SAVED_SCHOOL_SUCCESS,
  LOAD_SCHOOL_CURRIS_FAILURE,
  LOAD_SCHOOL_CURRIS_REQUEST,
  LOAD_SCHOOL_CURRIS_SUCCESS,
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
  removeSchoolReviewLoading: false, //리뷰 삭제
  removeSchoolReviewDone: false,
  removeSchoolReviewError: null,
  updateSchoolReviewError: null, //리뷰 수정
  updateSchoolReviewLoading: false,
  updateSchoolReviewDone: false,
  loadSavedSchoolLoading: false, //찜한 학교들
  loadSavedSchoolError: false,
  loadSavedSchoolDone: false,
  addSavedSchoolLoading: false, //학교 찜하기
  addSavedSchoolDone: false,
  addSavedSchoolError: false,
  removeSavedSchoolLoading: false, //학교 찜하기 삭제
  removeSavedSchoolDone: false,
  removeSavedSchoolError: false,
  loadSchoolCurrisLoading: false, //학교 커리큘럼 로딩
  loadSchoolCurrisDone: false,
  loadSchoolCurrisError: null,
  schools: [],
  singleSchool: [],
  schoolReviews: [],
  followList: [],
  schoolCurris: [],
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
      case REMOVE_SCHOOL_REVIEW_REQUEST:
        draft.removeSchoolReviewLoading = true;
        draft.removeSchoolReviewDone = false;
        draft.removeSchoolReviewError = null;
        break;
      case REMOVE_SCHOOL_REVIEW_SUCCESS:
        draft.schoolReviews = draft.schoolReviews.map((review) => {
          return review.id === action.data ? { ...review, deleted: true } : review;
        });
        draft.removeSchoolReviewLoading = false;
        draft.removeSchoolReviewDone = true;
        break;
      case REMOVE_SCHOOL_REVIEW_FAILURE:
        draft.removeSchoolReviewLoading = false;
        draft.removeSchoolReviewError = action.error;
        break;
      case UPDATE_SCHOOL_REVIEW_REQUEST:
        draft.updateSchoolReviewLoading = true;
        draft.updateSchoolReviewDone = false;
        draft.updateSchoolReviewError = null;
        break;
      case UPDATE_SCHOOL_REVIEW_SUCCESS:
        draft.schoolReviews = draft.schoolReviews.map((review) =>
          review.id === action.data.id ? action.data : review
        );
        draft.updateSchoolReviewLoading = false;
        draft.updateSchoolReviewDone = true;
        break;
      case UPDATE_SCHOOL_REVIEW_FAILURE:
        draft.updateSchoolReviewLoading = false;
        draft.updateSchoolReviewError = action.error;
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
        draft.removeSavedSchoolLoading = true;
        draft.followList = draft.followList.filter((v) => v.heartId !== action.data.heartId);

        draft.removeSavedSchoolDone = false;
        draft.removeSavedSchoolError = null;
        break;
      case REMOVE_SAVED_SCHOOL_SUCCESS:
        // console.log(action.data);
        // draft.followList = draft.followList.filter((v) => v.heartId !== action.data.heartId);
        draft.removeSavedSchoolLoading = false;
        draft.removeSavedSchoolDone = true;
        break;
      case REMOVE_SAVED_SCHOOL_FAILURE:
        draft.removeSavedSchoolLoading = false;
        draft.removeSavedSchoolError = action.error;
        break;
      case LOAD_SCHOOL_CURRIS_REQUEST:
        draft.loadSchoolCurrisLoading = true;
        draft.loadSchoolCurrisDone = false;
        draft.loadSchoolCurrisError = null;
        break;
      case LOAD_SCHOOL_CURRIS_SUCCESS:
        draft.schoolCurris = action.data;
        draft.loadSchoolCurrisLoading = false;
        draft.loadSchoolCurrisDone = true;
        break;
      case LOAD_SCHOOL_CURRIS_FAILURE:
        draft.loadSchoolCurrisLoading = false;
        draft.loadSchoolCurrisError = action.error;
        break;
    }
  });

export default reducer;
