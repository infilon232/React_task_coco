import * as types from "../actionType";

const initialSettings = {
  data: [],
  loading: true,
  error: null
};
const homeReducer = (state = initialSettings, action) => {
  switch (action.type) {
    case types.HOME_DATA:
      return {
        ...state,
        loading: true
      };
    case types.HOME_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    case types.HOME_DATA_FAIL:
      return {
        ...state,
        data: [],
        loading: false
      };
    case types.HOME_DATA_CLEAR:
      return {
        ...state,
        data: [],
        loading: false
      };
  }
  return state;
};
export default homeReducer;
