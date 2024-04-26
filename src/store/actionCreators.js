import * as actionTypes from "./constants";

export const addNumberAction = (num) => ({
  type: actionTypes.ADD_NUMBER,
  num,
});

export const subNumberAction = (num) => ({
  type: actionTypes.SUB_NUMBER,
  num,
});

export const changeBannersAction = (banners) => ({
  type: actionTypes.CHANGE_BANNERS,
  banners,
});

export const changeRecommendsAction = (recommends) => ({
  type: actionTypes.CHANGE_RECOMMENDS,
  recommends,
});
