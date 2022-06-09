import axios from "axios";
import {
  TOKEN_CHECK_REQUEST,
  TOKEN_CHECK_SUCCESS,
  TOKEN_CHECK_FAIL,
  TOKEN_CLAIM_SUCCESS,
  TOKEN_CLAIM_FAIL,
} from "../constants/tokenConstants";

export const checkToken = (token, callback) => async (dispatch) => {
  try {
    if (token.trim() === "") {
      throw new Error("Please enter you voucher number");
    } else {
      dispatch({
        type: TOKEN_CHECK_REQUEST,
      });
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(`/transaction/token/${token}`, config);
    if (data?.error) {
      throw new Error(data.error);
    }
    dispatch({
      type: TOKEN_CHECK_SUCCESS,
      payload: data,
    });

    localStorage.setItem("token", JSON.stringify(data.token));

    if (callback) {
      callback(true);
    }
  } catch (error) {
    dispatch({
      type: TOKEN_CHECK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    if (callback) {
      callback(false);
    }
  }
};

export const claimToken =
  ( productID, address, email, phone, receiverName, tokenID , callback) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/transaction/delivery",
        { receiverName: receiverName,
          productID: productID,
          tokenID: tokenID,
          address: address,
          email: email,
          phone: phone, },
        config
      );
      if (data?.error) {
        throw new Error(data.error);
      }
      dispatch({
        type: TOKEN_CLAIM_SUCCESS,
        payload: data,
      });
      if (callback) {
        callback();
      }
      // document.location.href = '/'
    } catch (error) {
      console.log(error)
      dispatch({
        type: TOKEN_CLAIM_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      if (callback) {
        callback();
      }
    }
  };
