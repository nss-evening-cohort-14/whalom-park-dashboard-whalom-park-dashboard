import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';
import { getRides } from './rideData/ridesData';
import { getVendors } from './vendorData/vendorData';
import { getVisitors } from './visitorData/visitorsData';

const dbUrl = firebaseConfig.databaseURL;

// START SPENDINGMONEY(), WHICH CREATES LOGSARRAY AND POSTS TO FIREBASE
// ADD LOG
const addLog = (logArray) => new Promise(() => {
  logArray.forEach((entry) => {
    axios.post(`${dbUrl}/log.json`, entry);
  });
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
// END SPENDINGMONEY(), WHICH CREATES LOGSARRAY AND POSTS TO FIREBASE

export { addLog, spendingMoney };
