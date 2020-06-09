import catsData from "./catsData.json";

export const getCats = () => {
  return catsData.cats;
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
