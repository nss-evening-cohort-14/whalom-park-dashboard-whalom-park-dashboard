import axios from 'axios';
import firebaseConfig from '../../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET BOARDS
const getRides = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Rides.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getRides;
