import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// ADD LOG
const addLog = (logArray) => new Promise(() => {
  logArray.forEach((entry) => {
    axios.post(`${dbUrl}/log.json`, entry);
  });
});

export default addLog;
