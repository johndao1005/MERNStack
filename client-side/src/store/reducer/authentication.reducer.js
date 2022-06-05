import {
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCCESS,
    GET_LOGIN_LOCK_SUCCESS,
  } from '../string';
  
  // Tạo model
  const loginModel = {
    error: '',
    registerError: '',
    locked: false,
  };
  
  // Phương thức thay đổi dữ liệu của model
  export default (state = loginModel, action) => {
    switch (action.type) {
      case LOGIN_LOADING:
        return {
          ...state,
          error: '',
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          error: '',
        };
      case LOGIN_FAILED:
        return {
          ...state,
          error: action.payload,
        };
      case LOGOUT_SUCCESS:
        return {
          ...state,
          auth: null,
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          error: '',
        };
      case REGISTER_FAILED:
        return {
          ...state,
          registerError: action.payload,
        };
      case GET_LOGIN_LOCK_SUCCESS:
        return {
          ...state,
          locked: action.payload,
        };
      default:
        return state;
    }
  };
  