import { FAIL_TOPIC, REQUEST_TOPIC, SUCCESS_TOPIC } from "../Constat/Editor";

// export const requestTopic = () => ({
//   type: REQUEST_TOPIC,
// });

export const successTopic = (payload) => ({
    type: SUCCESS_TOPIC,
    payload,
  });

  export const failTopic = (error) => ({
    type: FAIL_TOPIC,
    payload:error,
  });