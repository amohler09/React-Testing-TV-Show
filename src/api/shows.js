import axios from 'axios'

export const fetchShow = async () => {
  return axios
  .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
  .then(res => {
    console.log('Response', res);
    return res;
  })
  .catch(err => console.log('error', err));
}

  // It is better to put these in separate files so it is easier to import to
  // other files and run tests on 
  // You MUST return AXIOS as well as the RESPONSE