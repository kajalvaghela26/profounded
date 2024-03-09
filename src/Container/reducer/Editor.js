import { FAIL_TOPIC, REQUEST_TOPIC, SUCCESS_TOPIC } from "../Constat/Editor";

const initialState = {
    loading: false,
    data: [],
    error: null,
  };
  
  const editorReducer = (state = initialState, action) => {
    switch (action.type) {
    //   case REQUEST_TOPIC:
    //     return {
    //       ...state,
    //       loading: true,
    //     };
      case SUCCESS_TOPIC:
        return {
          ...state,
          loading: false,
          data: action.payload,
          error: null,
        };
      case FAIL_TOPIC:
        return {
          ...state,
          loading: false,
          data: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default editorReducer;
  