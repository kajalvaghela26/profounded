import { axiosFile } from "../../utils/axiosFile";
import { failTopic, successTopic } from "../action/Editor";
// import useDispatch from "react-redux";
// const dispatch = useDispatch();
export const topicRequest = (payload) => {
  console.log("payload :>> ", payload);
  return (dispatch) => {
    try {
      const response = axiosFile(
        "POST",
        "https://ky45lpx7ng.execute-api.us-east-2.amazonaws.com/default/ped-apis",
        payload
      );
      dispatch(successTopic(response.data));
    } catch (error) {
      dispatch(failTopic(error.data));
    }
  };
};
