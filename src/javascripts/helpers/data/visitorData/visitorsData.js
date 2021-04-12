import axios from 'axios';
import firebaseConfig from '../../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET
const getVisitors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/visitors.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// ADD
const addVisitor = (visitorObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/visitors.json`, visitorObject)
    .then((response) => {
      const body = { visitorID_firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/visitors/${response.data.name}.json`, body)
        .then(() => {
          getVisitors().then((visitorsArray) => resolve(visitorsArray));
        });
    }).catch((error) => reject(error));
});

// DELETE
const deleteVisitor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/visitors/${firebaseKey}.json`)
    .then(() => getVisitors().then((visitorsArray) => resolve(visitorsArray)))
    .catch((error) => reject(error));
});

// SINGLE VISITOR
const getSingleVisitor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/visitors/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// UPDATE
const updateVisitor = (firebaseKey, visitorObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/visitors/${firebaseKey}.json`, visitorObject)
    .then(() => getVisitors()).then((visitorsArray) => resolve(visitorsArray))
    .catch((error) => reject(error));
});

// SPENDING MONEY
const spendingMoney = () => {
  getVisitors().then((visitorsArray) => console.warn(visitorsArray));
};

export {
  getVisitors, addVisitor, deleteVisitor, updateVisitor, getSingleVisitor, spendingMoney
};
