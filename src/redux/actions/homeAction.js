import * as types from "../actionType";
import { Post } from "../../services/api.service";
export const recommended = (path, type) => {
  var data = {
    page: 1,
    limit: 10
  };

  return (dispatch) => {
    try {
      dispatch(recommandedInit());
      Post("RECOMMENDED" + path, data).then(
        (result) => {
          if (type === "recommended") {
            dispatch(recommandedSuccess(result));
          } else {
            dispatch(recentlyPlayedSuccess(result));
          }
        },
        (e) => {
          console.log(e);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
};
export const recommandedInit = (data) => {
  return { type: types.HOME_DATA, data };
};
export const recommandedSuccess = (data) => {
  return { type: types.HOME_DATA_SUCCESS, data };
};
export const recentlyPlayedSuccess = (data) => {
  return { type: types.RECENTLY_PLAYED_DATA_SUCCESS, data };
};
export const recentlyPlayedFail = (data) => {
  return { type: types.RECENTLY_PLAYED_DATA_FAIL, data };
};
export const recommandedFail = () => {
  return { type: types.HOME_DATA_FAIL };
};
export const recommandedClear = (data) => {
  return { type: types.HOME_DATA_CLEAR, data };
};
