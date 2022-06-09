import {
    TOKEN_CHECK_REQUEST,
    TOKEN_CHECK_SUCCESS,
    TOKEN_CHECK_FAIL,
    TOKEN_CLAIM_SUCCESS,
    TOKEN_CLAIM_FAIL,
  } from '../constants/tokenConstants'
  
  export const tokenReducer = (state = {}, action) => {
    switch (action.type) {
        case TOKEN_CHECK_REQUEST:
            return {  ...state, error: null}
        case TOKEN_CHECK_SUCCESS:
            return { token: action.payload, error: null }
        case TOKEN_CHECK_FAIL:
            return { checkError : action.payload }
        case TOKEN_CLAIM_SUCCESS:
            return { transaction : action.payload, token : null}
        case TOKEN_CLAIM_FAIL:
            return { claimError: action.payload}
        default:
            return state
    }
  }