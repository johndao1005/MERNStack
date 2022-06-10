import {
  PACKAGE_CREATE_REQUEST,
  PACKAGE_CREATE_SUCCESS,
  PACKAGE_CREATE_FAIL,
  } from '../constants/packageConstants'
  
  export const packageReducer = (state = {}, action) => {
    switch (action.type) {
        case   PACKAGE_CREATE_REQUEST:
            return {  ...state, error: null}
        case PACKAGE_CREATE_SUCCESS:
            return { success: action.payload, error: null }
        case PACKAGE_CREATE_FAIL:
            return { error : action.payload }
        default:
            return state
    }
  }