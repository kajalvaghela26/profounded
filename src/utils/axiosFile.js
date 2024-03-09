import React from "react";
import axios from "axios";

export const axiosFile = async (method, url, data) => {
  await axios
    .request({
      url,
      method,
      headers: "Content-Type: application/json",
      data,
    })
    .then(({ data }) => {
      console.log("data :>> ", data);
      return data;
    })
    .catch((error) => {
      return error;
    })
    .finally((error) => {
      return error;
    });
};
