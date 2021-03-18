// import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET VENDORS
export const getVendors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Vendors.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// DELETE VENDOR
export const deleteVendor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/Vendors/${firebaseKey}.json`)
    .then(() => getVendors().then((vendorsArray) => resolve(vendorsArray)))
    .catch((error) => reject(error));
});

// CREATE VENDOR
// export const createVendor = (vendorObj) => new Promise((resolve, reject) => {
//   axios.post(`${dbUrl}/Vendors.json`, vendorObj)
//     .then(() => getVendors(firebase.auth()))
//     .then((vendorsArray) => resolve(vendorsArray))
//     .catch((error) => reject(error));
// });

// EDIT VENDOR
// export const editVendor = (firebaseKey) => new Promise((resolve, reject) => {
//   axios.patch(`${dbUrl}/Vendors/${firebaseKey}.json`, vendorObj)
//     .then(() => getVendors(firebase.auth()))
//     .then((vendorsArray) => resolve(vendorsArray))
//     .catch((error) => reject(error));
// });
