import 'firebase/auth';
import createRides from '../components/cards/rides';
import createVisitors from '../components/cards/visitors';
import signOut from '../helpers/auth/signOut';
import { getRides } from '../helpers/data/rideData/ridesData';
import { getVisitors } from '../helpers/data/visitorData/visitorsData';

const navigationEvents = () => {
  // click event to show rides
  document.querySelector('#rides-link').addEventListener('click', () => {
    getRides().then((ridesArray) => createRides(ridesArray));
  });

  // click event to show staff
  document.querySelector('#staff-link').addEventListener('click', () => {
    document.querySelector('#header').innerHTML = '<h1>Staff Coming Soon!</h1>';
    document.querySelector('#display-area').innerHTML = '';
    document.querySelector('#add-button').innerHTML = '';
  });

  // click event to show vendors
  document.querySelector('#vendors-link').addEventListener('click', () => {
    document.querySelector('#header').innerHTML = '<h1>Vendors Coming Soon!</h1>';
    document.querySelector('#display-area').innerHTML = '';
    document.querySelector('#add-button').innerHTML = '';
  });

  // click event to show visitors
  document.querySelector('#visitors-link').addEventListener('click', () => {
    getVisitors().then((visitorsArray) => createVisitors(visitorsArray));
  });

  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};

export default navigationEvents;
