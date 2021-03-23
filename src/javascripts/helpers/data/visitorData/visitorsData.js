import axios from 'axios';
import firebaseConfig from '../../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET
const getVisitors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Visitors.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// ADD
const addVisitor = (visitorObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/Visitors.json`, visitorObject)
    .then((response) => {
      const body = { visitorID_firebaseKey: response.data.name };
      console.warn(response.data);
      console.warn(body);
      axios.patch(`${dbUrl}/Visitors/${response.data.name}.json`, body)
        .then(() => {
          getVisitors().then((visitorsArray) => resolve(visitorsArray));
        });
    }).catch((error) => reject(error));
});

// DELETE
const deleteVisitor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/Visitors/${firebaseKey}.json`)
    .then(() => getVisitors().then((visitorsArray) => resolve(visitorsArray)))
    .catch((error) => reject(error));
  console.warn(firebaseKey);
});

// SINGLE VISITOR
const getSingleVisitor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Visitors/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// UPDATE
const updateVisitor = (firebaseKey, visitorObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/Visitors/${firebaseKey}.json`, visitorObject)
    .then(() => getVisitors()).then((visitorsArray) => resolve(visitorsArray))
    .catch((error) => reject(error));
});

export {
  getVisitors, addVisitor, deleteVisitor, updateVisitor, getSingleVisitor
};
