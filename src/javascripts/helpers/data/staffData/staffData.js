import axios from 'axios';
import firebaseConfig from '../../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET Staff
const getStaff = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/staff.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// Add Staff
const addStaff = (staffObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/staff.json`, staffObject)
    .then((response) => {
      const body = { staffID_firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/staff/${response.data.name}.json`, body)
        .then(() => {
          getStaff().then((staffArray) => resolve(staffArray));
        });
    }).catch((error) => reject(error));
});

// DELETE Staff
const deleteStaff = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/staff/${firebaseKey}.json`)
    .then(() => getStaff().then((staffArray) => resolve(staffArray)))
    .catch((error) => reject(error));
});

// UPDATE STAFF
const updateStaff = (firebaseKey, staffObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/staff/${firebaseKey}.json`, staffObject)
    .then(() => getStaff()).then((staffArray) => resolve(staffArray))
    .catch((error) => reject(error));
});

// GET SINGLE STAFF
const getSingleStaff = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/staff/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getStaff, addStaff, deleteStaff, updateStaff, getSingleStaff
};
