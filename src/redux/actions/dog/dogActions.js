import * as types from "../actionTypes";
import * as dogApi from "../../../api/dogs/dogsApi";
import { beginApiCall } from "../../actions/apiStatusActions";

export function createDogSuccess(dog) {
  return { type: types.CREATE_DOG_SUCCESS, dog };
}

export function loadDogsNoDataSuccess() {
  return { type: types.LOAD_DOGS_NO_DATA_SUCCESS };
}

export function loadDogsSuccess(dogs) {
  return { type: types.LOAD_DOGS_SUCCESS, dogs };
}

export function loadDogNoDataSuccess(dog) {
  return { type: types.LOAD_DOG_FAILURE, dog };
}

export function loadDogSuccess(dog) {
  return { type: types.LOAD_DOG_SUCCESS, dog };
}

export function updateDogSuccess(dog) {
  return { type: types.UPDATE_DOG_SUCCESS, dog };
}

export function deleteDogSuccess(dog) {
  return { type: types.DELETE_DOG_SUCCESS, dog };
}

export function loadDogs() {
    console.log('in load dogs')
  return async function (dispatch) {
    try {
      dispatch(beginApiCall());
      const dogs = await dogApi.getDogs();
      if (dogs && dogs.length) {
        dispatch(loadDogsSuccess(dogs));
      } else {
        dispatch(loadDogsNoDataSuccess());
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