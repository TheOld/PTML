import axios from 'axios';

const exclusionsListEndpoint = 'http://localhost:4000/exclusions';
const partsEndpoint = 'http://localhost:4000/parts';

const fetchExclusionList = () => {
  try {
    return axios.get(exclusionsListEndpoint).then((response) => {
      return response.data;
    });
  } catch (error) {
    console.error(error);
  }
};

const fetchMatchingParts = () => {
  try {
    return axios.get(partsEndpoint).then((response) => {
      return response.data;
    });
  } catch (error) {
    console.error(error);
  }
};

export { fetchExclusionList, fetchMatchingParts };
