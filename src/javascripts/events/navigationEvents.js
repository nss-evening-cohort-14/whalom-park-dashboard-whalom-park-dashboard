import 'firebase/auth';
import createRides from '../components/cards/rides';
import createStaff from '../components/cards/staff';
import signOut from '../helpers/auth/signOut';
import { getStaff } from '../helpers/data/staffData/staffData';
import { getRides } from '../helpers/data/vendorData/ridesData';

const navigationEvents = () => {
  // click event to show rides
  document.querySelector('#rides-link').addEventListener('click', () => {
    getRides().then((ridesArray) => createRides(ridesArray));
  });

  // click event to show staff
  document.querySelector('#staff-link').addEventListener('click', () => {
    getStaff().then((staffArray) => createStaff(staffArray));
  });

  // click event to show vendors
  document.querySelector('#vendors-link').addEventListener('click', () => {
    document.querySelector('#header').innerHTML = '<h1>Vendors Coming Soon!</h1>';
    document.querySelector('#display-area').innerHTML = '';
    document.querySelector('#add-button').innerHTML = '';
  });

  // click event to show visitors
  document.querySelector('#visitors-link').addEventListener('click', () => {
    document.querySelector('#header').innerHTML = '<h1>Visitors Coming Soon!</h1>';
    document.querySelector('#display-area').innerHTML = '';
    document.querySelector('#add-button').innerHTML = '';
  });

  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};

export default navigationEvents;
