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
      const body = { firebasekey: response.data.name };
      console.warn(response);
      console.warn(body);
      axios.patch(`${dbUrl}/Visitors/${response.data.name}.json`, body)
        .then(() => {
          getVisitors().then((visitorsArray) => resolve(visitorsArray));
        });
    }).catch((error) => reject(error));
});
// DELETE
// EDIT

export { getVisitors, addVisitor };
