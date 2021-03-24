import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET EVENTS
export const getEvents = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/events.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET SINGLE EVENT
export const getSingleEvent = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/events/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// DELETE EVENTS
export const deleteEvent = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/events/${firebaseKey}.json`)
    .then(() => getEvents().then((eventsArray) => resolve(eventsArray)))
    .catch((error) => reject(error));
});

// CREATE EVENT
export const createEvent = (eventObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/events.json`, eventObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/events/${response.data.name}.json`, body)
        .then(() => {
          getEvents().then((eventsArray) => resolve(eventsArray));
        });
    }).catch((error) => reject(error));
});

// EDIT EVENT
export const editEvent = (firebaseKey, eventObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/events/${firebaseKey}.json`, eventObj)
    .then(() => getEvents())
    .then((eventsArray) => resolve(eventsArray))
    .catch((error) => reject(error));
});
