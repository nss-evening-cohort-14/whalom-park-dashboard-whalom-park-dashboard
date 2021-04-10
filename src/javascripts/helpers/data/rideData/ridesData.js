import axios from 'axios';
import firebaseConfig from '../../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET Rides
const getRides = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/rides.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET SINGLE RIDES
const getSingleRide = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/rides/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// Add Rides
const addRides = (ridesObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/rides.json`, ridesObject)
    .then((response) => {
      const body = { rideID_firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/rides/${response.data.name}.json`, body)
        .then(() => {
          getRides().then((ridesArray) => resolve(ridesArray));
        });
    }).catch((error) => reject(error));
});

// DELETE Rides
const deleteRides = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/rides/${firebaseKey}.json`)
    .then(() => getRides().then((ridesArray) => resolve(ridesArray)))
    .catch((error) => reject(error));
});

// UPDATE RIDES
const updateRides = (firebaseKey, ridesObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/rides/${firebaseKey}.json`, ridesObject)
    .then(() => getRides()).then((ridesArray) => resolve(ridesArray))
    .catch((error) => reject(error));
});

export {
  getRides, addRides, getSingleRide, updateRides, deleteRides,
};
