import axios from 'axios';
import firebaseConfig from '../../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET Staff
const getStaff = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Staff.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// Add Staff
const addStaff = (staffObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/Staff.json`, staffObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/Staff/${response.data.name}.json`, body)
        .then(() => {
          getStaff().then((staffArray) => resolve(staffArray));
        });
    }).catch((error) => reject(error));
});

// DELETE Staff
const deleteStaff = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/Staff/${firebaseKey}.json`)
    .then(() => getStaff().then((staffArray) => resolve(staffArray)))
    .catch((error) => reject(error));
});

export { getStaff, addStaff, deleteStaff };
