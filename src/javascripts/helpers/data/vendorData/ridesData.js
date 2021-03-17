import axios from 'axios';
import firebaseConfig from '../../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET Rides
const getRides = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Rides.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// Add Rides
const addRides = (ridesObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/Rides.json`, ridesObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/Rides/${response.data.name}.json`, body)
        .then(() => {
          getRides().then((ridesArray) => resolve(ridesArray));
        });
    }).catch((error) => reject(error));
});

// DELETE Rides
const deleteRides = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/Rides/${firebaseKey}.json`)
    .then(() => getRides().then((ridesArray) => resolve(ridesArray)))
    .catch((error) => reject(error));
});

export { getRides, addRides, deleteRides };
