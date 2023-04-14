import React, { useContext, useReducer } from "react";
import reducer from "../Reducers/user_reducer";
import axios from "axios";
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
import { baseUrl } from "../utils/baseUrl";

let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : "";

const initialState = {
  token: "" || token,
  register_user: null,
  loading: false,
  userLogout: false,
  userDetails: {},
  user_details_error: false,
  user_details_loading: false,
  adding_book: false,
  adding_book_error: false,
  adding_book_message: "",
};

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = 'https://'

  const registerUser = async (data) => {
    dispatch({ type: REGISTER_USER });
    try {
      const response = await axios.post(`${url}/auth/register`, data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (details) => {
    dispatch({ type: REQUEST_LOGIN });

    try {
      const response = await axios.post(`${url}/auth/login`, details);
      if (response.status === 200) {
        dispatch({ type: LOGIN_SUCCESS, payload: response });
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        return response;
      }
      dispatch({ type: LOGIN_ERROR, error: response.errors[0] });
      return null;
    } catch (error) {
      dispatch({ type: LOGIN_ERROR, error: error });
      return null;
    }
  };

  const getUser = async () => {
    dispatch({ type: USER_DETAILS_BEGIN });
    try {
      const response = await baseUrl.get("/auth/profile");
      const userDetails = response.data?.data;
      dispatch({ type: USER_DETAILS, payload: userDetails });
    } catch (error) {
      console.log(error);
      dispatch({ type: USER_DETAILS_ERROR });
    }
  };

  const addBook = async (data) => {
    dispatch({ type: ADD_BOOK, payload: "Adding book..." });
    return baseUrl
      .put("/auth/addBook")
      .then((response) => {
        console.log("THIS IS BOOK HAS BEEN ADDED", response.data?.data);
        dispatch({
          type: ADD_BOOK_SUCCESS,
          payload: {
            message: response.data?.message,
            data: response.data?.data,
          },
        });
        return response;
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: ADD_BOOK_ERROR,
          payload: `Could not add book! Please try again`,
        });
      });
  };

  const signOut = () => {
    dispatch({ type: USER_LOGOUT });
    try {
      localStorage.removeItem("currentUser");
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        registerUser,
        loginUser,
        getUser,
        signOut,
        addBook,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
