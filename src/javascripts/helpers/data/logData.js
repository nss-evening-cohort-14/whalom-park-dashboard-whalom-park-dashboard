import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getLogs = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/log.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getLogs;
