import {
  GET_STORE_BEGIN,
  GET_STORE_SUCCESS,
  GET_STORE_ERROR,
  GET_BOOK_BEGIN,
  GET_BOOK_SUCCESS,
  GET_BOOK_ERROR,
  ACCESS_BOOK,
  ACCESS_BOOK_SUCCESS,
  ACCESS_BOOK_ERROR,
} from "../actions";


const book_reducer = (state, action) => {
  if (action.type === GET_STORE_BEGIN) {
    return { ...state, store_loading: true };
  }
  if (action.type === GET_STORE_SUCCESS) {
  
    return {
      ...state,
      store_loading: false,
      store: action.payload,
    };
  }

  if (action.type === GET_STORE_ERROR) {
    return { ...state, store_loading: false, store_error: true };
  }

  if (action.type ===   GET_BOOK_BEGIN) {
    return {
      ...state,
      book_loading: true,
      book_error: false,
    };
  }
  if (action.type === GET_BOOK_SUCCESS) {
    return {
      ...state,
      book_loading: false,
      book: action.payload,
    };
  }

  if (action.type === GET_BOOK_ERROR) {
    return {
      ...state,
      book_loading: false,
      book_error: true,
    };
  }
  if (action.type === ACCESS_BOOK) {
    return {
      ...state,
      user_book_loading: true,
      user_book_error: false,
    };
  }
  if (action.type === ACCESS_BOOK_SUCCESS) {
    return {
      ...state,
      user_book: action.payload,
      user_book_loading: false,
      user_book_error: false,
    };
  }
  if (action.type === ACCESS_BOOK_ERROR) {
    return {
      ...state,
      user_book_loading: false,
      user_book_error: true,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default book_reducer;
