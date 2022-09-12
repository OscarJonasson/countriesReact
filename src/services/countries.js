import axios from 'axios';

const url = 'https://restcountries.com/v3.1/all';

const getAll = async () => {
  const response = await axios
    .get(url)
    .catch((err) => console.log(err))
    .then((res) => res.data);
  //   console.log('response from await', response);
  return response;
};

export default { getAll };
