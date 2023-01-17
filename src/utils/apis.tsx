import QueryString from 'query-string';
import { originalFetch } from './request';

const foursquareAPI = process.env.REACT_APP_FOURSQUARE_API;
const foursquareAPIClientId = process.env.REACT_APP_FOURSQUARE_API_CLIENT_ID;
const foursquareAPIClientSecret = process.env.REACT_APP_FOURSQUARE_API_CLIENT_SECRET;

export const CREDENTIALS = {
  v: '20171001',
  client_id: foursquareAPIClientId,
  client_secret: foursquareAPIClientSecret,
};

export const params = {
  ll: '35.664679693351275,139.7378200559551',
  radius: 1000,
  categoryId: '4d4b7105d754a06374d81259',
  query: '',
};

export const urlConfig = {
  apiUrl: foursquareAPI,
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=',
  locale: 'en',
};

export const searchRestaurants = async (query: string) => {
  const newParams = { ...params, query };
  const urlString = `${urlConfig.apiUrl}/places/search?fields=fsq_id,name,rating,location,photos,tips,hours,features,tel,categories,stats&`
    + `${QueryString.stringify(newParams)}&${QueryString.stringify(CREDENTIALS)}`;
  return originalFetch(urlString);
};

export const getRestaurantDetail = async ({ id }: any) => {
  if (!id) return;
  const urlString = `${urlConfig.apiUrl}/places/`
    + `${id}?fields=fsq_id,name,rating,location,photos,tips,hours,features,tel,categories,stats&${QueryString.stringify(CREDENTIALS)}`;
  // eslint-disable-next-line consistent-return
  return originalFetch(urlString);
};
