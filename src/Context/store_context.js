import React, { useContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "../Reducers/store_reducer";
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
import { baseUrl } from "../utils/baseUrl";

const StoreContext = React.createContext();

const initialState = {
  store_error: false,
  store_loading: false,
  store: [],

  book_loading: false,
  book_error: false,
  book: {},

  user_book_loading: false,
  user_book_error: false,
  user_book: {},
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchBooks = async () => {
    dispatch({ type: GET_STORE_BEGIN });
    try {
      const response = await baseUrl.get("/books");
      console.log(response);
      const store = response.data.data;
      dispatch({ type: GET_STORE_SUCCESS, payload: store });
    } catch (error) {
      dispatch({ type: GET_STORE_ERROR });
    }
  };

  const fetchBook = async (url) => {
    dispatch({ type: GET_BOOK_BEGIN });
    try {
      const response = await axios.get(url);
      const Book = response.data.data;
      dispatch({ type: GET_BOOK_SUCCESS, payload: Book });
    } catch (error) {
      dispatch({ type: GET_BOOK_ERROR });
    }
  };

  const accessBook = async (bookID) => {
    const url = 'https://'
    dispatch({ type: ACCESS_BOOK });
    try {
      const response = await axios.get(`${url}${bookID}`);
      if (response.status === 200) {
        dispatch({ type: ACCESS_BOOK_SUCCESS, payload: response });
        return response;
        //should now give access to the book url for reading or rendering
      }
    } catch (error) {
      dispatch({ type: ACCESS_BOOK_ERROR, error: error });
      return null;
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        ...state,
        fetchBooks,
        fetchBook,
        accessBook,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  return useContext(StoreContext);
};
