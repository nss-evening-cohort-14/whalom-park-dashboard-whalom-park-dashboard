import axios from 'axios';
import firebaseConfig from '../../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET Log
const getVisitorLog = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/log.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET SINGLE Log
const getSingleVisitorLog = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/log/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// Add Log
const addVisitorLog = (logObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/log.json`, logObject)
    .then((response) => {
      const body = { logID_firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/rides/${response.data.name}.json`, body)
        .then(() => {
          getVisitorLog().then((logArray) => resolve(logArray));
        });
    }).catch((error) => reject(error));
});

export { getVisitorLog, addVisitorLog, getSingleVisitorLog };
