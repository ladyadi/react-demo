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

// export function loadDogById(data) {
//   return async function (dispatch) {
//     try {
//       dispatch(beginApiCall());
//       const dog = await dogApi.getDogById(data);
//       if (dog) {
//         dispatch(loadDogSuccess(dog));
//       } else {
//         dispatch(loadDogNoDataSuccess());
//       }
//     } catch (error) {
//       //determine action for handling failed api calls
//       throw new Error(error);
//     }
//   };
// }

// export function createDog(data) {
//   return async function (dispatch) {
//     try {
//       const dog = await dogApi.createDog(data);
//       dispatch(createDogSuccess(dog));
//     } catch (error) {
//       //determine action for handling failed api calls
//       throw new Error(error);
//     }
//   };
// }