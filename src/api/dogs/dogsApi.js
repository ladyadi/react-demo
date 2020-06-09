import dogsData from "./dogsData.json";

export const getDogs = () => {
  return dogsData.dogs;
};

// export const getDealById = (dealId) => {
//   const token = parseCookie.getToken("JWT");
//   return axios.get(`${url}/deals/${dealId}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//       'x-tenant-id': 'master',
//     },
//   });
// }

// export const createDeal = (deal) => {
//   const token = parseCookie.getToken("JWT");
//   return axios.post(`${url}/deals`, deal, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };
