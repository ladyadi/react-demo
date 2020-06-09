import * as types from "../actionTypes";
import * as catApi from "../../../api/cats/catApi";
import { beginApiCall } from "../../actions/apiStatusActions";

export function createCatSuccess(cat) {
  return { type: types.CREATE_CAT_SUCCESS, cat };
}

export function loadCatsNoDataSuccess() {
  return { type: types.LOAD_CATS_NO_DATA_SUCCESS };
}

export function loadCatsSuccess(cats) {
  return { type: types.LOAD_CATS_SUCCESS, cats };
}

export function loadCatNoDataSuccess(cat) {
  return { type: types.LOAD_CAT_FAILURE, cat };
}

export function loadCatSuccess(cat) {
  return { type: types.LOAD_CAT_SUCCESS, cat };
}

export function updateCatSuccess(cat) {
  return { type: types.UPDATE_CAT_SUCCESS, cat };
}

export function deleteCatSuccess(cat) {
  return { type: types.DELETE_CAT_SUCCESS, cat };
}

export function loadCats() {
    console.log('in load cats')
  return async function (dispatch) {
    try {
      dispatch(beginApiCall());
      const cats = await catApi.getCats();
      if (cats && cats.length) {
        dispatch(loadCatsSuccess(cats));
      } else {
        dispatch(loadCatsNoDataSuccess());
      }
    } catch (error) {
      //determine action for handling failed api calls
      throw new Error(error);
    }
  };
}

// export function loadCatById(data) {
//   return async function (dispatch) {
//     try {
//       dispatch(beginApiCall());
//       const deal = await dealApi.getDealById(data);
//       if (deal.data) {
//         dispatch(loadDealSuccess(deal.data));
//       } else {
//         dispatch(loadDealNoDataSuccess());
//       }
//     } catch (error) {
//       //determine action for handling failed api calls
//       throw new Error(error);
//     }
//   };
// }

// export function createDeal(data) {
//   return async function (dispatch) {
//     try {
//       const deal = await dealApi.createDeal(data);
//       dispatch(createDealSuccess(deal.data));
//       return deal.data;
//     } catch (error) {
//       //determine action for handling failed api calls
//       throw new Error(error);
//     }
//   };
// }