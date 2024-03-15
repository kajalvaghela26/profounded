// import React from "react";
// import axios from "axios";

export const axiosFile = async (method, url, data) => {
  try {
    const requestOptions = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), 
    };

    const response = await fetch(url, requestOptions);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    return error;
  }
  // await axios
  //   .request({
  //     url,
  //     method,
  //     headers: "Content-Type: application/json",
  //     data,
  //   })
  //   .then(({ data }) => {
  //     console.log("data :>> ", data);
  //     return data;
  //   })
  //   .catch((error) => {
  //     return error;
  //   })
  //   .finally((error) => {
  //     return error;
  //   });
};
