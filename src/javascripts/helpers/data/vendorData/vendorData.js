/* eslint-disable camelcase */
// import firebase from 'firebase/app';
// import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET VENDORS
export const getVendors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vendors.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET SINGLE VENDOR
export const getSingleVendor = (vendorID_firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vendors/${vendorID_firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// DELETE VENDOR
export const deleteVendor = (vendorID_firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vendors/${vendorID_firebaseKey}.json`)
    .then(() => getVendors().then((vendorsArray) => resolve(vendorsArray)))
    .catch((error) => reject(error));
});

// CREATE VENDOR
export const createVendor = (vendorObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vendors.json`, vendorObj)
    .then((response) => {
      const body = { vendorID_firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/vendors/${response.data.name}.json`, body)
        .then(() => {
          getVendors().then((vendorsArray) => resolve(vendorsArray));
        });
    }).catch((error) => reject(error));
});

// EDIT VENDOR
export const editVendor = (vendorID_firebaseKey, vendorObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/vendors/${vendorID_firebaseKey}.json`, vendorObj)
    .then(() => getVendors())
    .then((vendorsArray) => resolve(vendorsArray))
    .catch((error) => reject(error));
});
