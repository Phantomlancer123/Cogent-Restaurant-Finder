/* @flow */

import fetch from 'isomorphic-fetch';

type DataType = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  contexts: object,
  // eslint-disable-next-line @typescript-eslint/ban-types
  results: object[]
};
const options = { method: 'GET', headers: { accept: 'application/json', Authorization: 'fsq3MmBm7eRvLh7H9UgRJdv53QL70SsPtZUm8pc7UDWjbW8=' } };
export const originalFetch = (urlString: string) => new Promise<DataType>((resolve, reject) => {
  fetch(urlString, options)
    .then((response: any) => response.json())
    .then((response: any) => resolve(response))
    .catch((error: any) => {
      reject(error);
    });
});
