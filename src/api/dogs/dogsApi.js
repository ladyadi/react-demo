import dogsData from "./dogsData.json";
// import catsData from "./catsData.json";

export const getDogs = () => {
  console.log('in dogs api')
  console.log('DOGS DATA', dogsData.dogs);
  return dogsData.dogs;
};

// export const getDogById = (dogId) => {
//
// }

// export const createDog = (dog) => {
//
// };
