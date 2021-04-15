import axios from 'axios';
import firebaseConfig from '../../auth/apiKeys';
import addLog from '../logData';
import { getRides } from '../rideData/ridesData';
import { getVendors } from '../vendorData/vendorData';

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

// MASTER RIDES AND VENDORS LIST
const ridesAndVendors = () => new Promise((resolve, reject) => {
  Promise.all([getRides(), getVendors()])
    .then(([rides, vendors]) => {
      // BUILD ARRAY OF RIDES AND VENDORS TO CHOOSE FROM
      const ridesAndVendorsArray = [];
      rides.forEach((ride) => {
        const object = {
          earnings: ride.price,
          event: ride.rideName
        };
        ridesAndVendorsArray.push(object);
      });
      vendors.forEach((vendor) => {
        const object = {
          earnings: vendor.price,
          event: vendor.vendorName
        };
        ridesAndVendorsArray.push(object);
      });
      resolve(ridesAndVendorsArray);
    })
    .catch((error) => reject(error));
});

// SPENDING MONEY
const spendingMoney = () => {
  ridesAndVendors().then((resultsArray) => {
    // (B) GET ALL VISITORS
    const logArray = [];
    getVisitors().then((visitorsArray) => {
    // START BUILDING LOG
      visitorsArray.forEach((visitor) => {
        const randomEvent = resultsArray[Math.floor(Math.random() * resultsArray.length)];
        const object = {
          visitor: visitor.visitorFirstName,
          ...randomEvent,
          timestamp: new Date()
        };
        logArray.push(object);
      });
      // (C) POST LOG TO FIREBASE
      addLog(logArray);
    });
  });
};

export {
  getVisitors, addVisitor, deleteVisitor, updateVisitor, getSingleVisitor, spendingMoney
};
