import { produce } from "immer";
import {
  CHECK_USER_ID_FAILURE,
  CHECK_USER_ID_REQUEST,
  CHECK_USER_ID_SUCCESS,
} from "../constants/actionTypes";

export const initalState = {
  checkIdLoading: false, // 유저 아이디 중복확인 시도중
  checkIdDone: false,
  checkIdError: null,
  idValid: false,
};

const reducer = (state = initalState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CHECK_USER_ID_REQUEST:
        draft.checkIdLoading = true;
        draft.checkIdError = null;
        draft.checkIdDone = false;
        break;
      // 요기가 saga에 의해 실행된다.
      case CHECK_USER_ID_SUCCESS:
        draft.idValid = true;
        draft.checkIdLoading = false;
        draft.checkIdDone = true;
        break;
      case CHECK_USER_ID_FAILURE:
        draft.checkIdLoading = false;
        draft.checkIdError = action.error;
        break;
      default:
        return state;
    }
  });

export default reducer;
