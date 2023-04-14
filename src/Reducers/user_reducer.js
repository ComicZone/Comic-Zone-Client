import {
  REQUEST_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  USER_LOGOUT,
  USER_DETAILS,
  USER_DETAILS_BEGIN,
  USER_DETAILS_ERROR,
  REGISTER_USER,
  ADD_BOOK,
  ADD_BOOK_ERROR,
  ADD_BOOK_SUCCESS,
} from "../actions";

const user_reducer = (state, action) => {
  if (action.type === REGISTER_USER) {
    return { ...state, register_user: action.payload };
  }
  if (action.type === REQUEST_LOGIN) {
    return { ...state, loading: true };
  }
  if (action.type === LOGIN_SUCCESS) {
    return {
      ...state,
      token: action.payload.token,
      loading: false,
    };
  }
  if (action.type === LOGIN_ERROR) {
    return { ...state, loading: false };
  }
  if (action.type === USER_LOGOUT) {
    return { ...state, userLogout: true };
  }
  if (action.type === USER_DETAILS_BEGIN) {
    return { ...state, user_details_loading: true, user_details_error: false };
  }
  if (action.type === USER_DETAILS) {
    return {
      ...state,
      user_details_loading: false,
      userDetails: action.payload,
    };
  }
  if (action.type === USER_DETAILS_ERROR) {
    return {
      ...state,
      user_details_loading: false,
      user_details_error: true,
    };
  }
  if (action.type === ADD_BOOK) {
    return { ...state, adding_book_loading: true, adding_book_error: false };
  }
  if (action.type === ADD_BOOK_SUCCESS) {
    return {
      ...state,
      adding_book_loading: false,
      adding_book_error: false,
    };

  }
  if (action.type === ADD_BOOK_ERROR) {
    return {
      ...state,
      adding_book_loading: false,
      adding_book_error: action.payload,
    };
  } else {
    throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default user_reducer;
