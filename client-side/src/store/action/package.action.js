import axios from "axios";
import {
  PACKAGE_CREATE_REQUEST,
  PACKAGE_CREATE_SUCCESS,
  PACKAGE_CREATE_FAIL,
} from "../constants/packageConstants";

export const createPackage = (values,callback) => async (dispatch) => {
  try {
    dispatch({
      type: PACKAGE_CREATE_REQUEST,
    });
    if(values.items.length === 0){
        throw new Error("Please add at least 1 item")
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/transaction/package",
      { items: values.items,
        quantity: values.quantity,
        description: values.description,
        name: values.name },
      config
    );
    if (data?.error) {
      throw new Error(data.error);
    }
    dispatch({
      type: PACKAGE_CREATE_SUCCESS,
      payload: data,
    });
    if (callback) {
      callback();
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: PACKAGE_CREATE_FAIL,
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
