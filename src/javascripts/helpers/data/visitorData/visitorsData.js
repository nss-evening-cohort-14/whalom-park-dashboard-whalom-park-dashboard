import axios from 'axios';
import firebaseConfig from '../../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET
const getVisitors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Visitors.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// CREATE
// DELETE
// EDIT

export default getVisitors;
