import fetch from 'isomorphic-fetch';

const options = { method: 'GET', headers: { accept: 'application/json', Authorization: 'fsq3MmBm7eRvLh7H9UgRJdv53QL70SsPtZUm8pc7UDWjbW8=' } };
export const originalFetch = (urlString: string) => new Promise<void>((resolve, reject) => {
  fetch(urlString, options)
    .then((response: any) => response.json())
    .then((response: any) => resolve(response))
    .catch((error: any) => {
      reject(error);
    });
});
