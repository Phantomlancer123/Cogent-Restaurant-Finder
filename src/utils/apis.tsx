import QueryString from 'query-string';
import { originalFetch } from './request';
import { currentLocation } from '../config/Location';

const foursquareAPI = process.env.REACT_APP_FOURSQUARE_API;
const foursquareAPIClientId = process.env.REACT_APP_FOURSQUARE_API_CLIENT_ID;
const foursquareAPIClientSecret = process.env.REACT_APP_FOURSQUARE_API_CLIENT_SECRET;

export const CREDENTIALS = {
  v: '20171001',
  client_id: foursquareAPIClientId,
  client_secret: foursquareAPIClientSecret,
};

export const params = {
  ll: `${currentLocation.lat},${currentLocation.lng}`,
  radius: 1000,
  categoryId: '4d4b7105d754a06374d81259',
  query: '',
};

export const searchRestaurants = async (query: string) => {
  const newParams = { ...params, query };
  const urlString = `${foursquareAPI}/places/search?fields=fsq_id,name,rating,location,geocodes,photos,categories&`
    + `${QueryString.stringify(newParams)}&${QueryString.stringify(CREDENTIALS)}`;
  return originalFetch(urlString);
};

export const getRestaurantDetail = async (id: string) => {
  if (!id) return;
  const urlString = `${foursquareAPI}/places/`
    + `${id}?fields=fsq_id,name,website,stats,geocodes,popularity,tips,tastes,features,rating,location,photos,hours,tel&${QueryString.stringify(CREDENTIALS)}`;
  // eslint-disable-next-line consistent-return
  return originalFetch(urlString);
};
