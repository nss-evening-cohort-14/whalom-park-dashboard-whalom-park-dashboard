import 'firebase/auth';
import createRides from '../components/cards/rides';
import showVisitors from '../components/cards/visitors';
import createStaff from '../components/cards/staff';
import signOut from '../helpers/auth/signOut';
import { getStaff } from '../helpers/data/staffData/staffData';
import { renderVendors, emptyVendors } from '../components/cards/vendor';
import { getVendors } from '../helpers/data/vendorData/vendorData';
import { getRides } from '../helpers/data/rideData/ridesData';
import { getVisitors } from '../helpers/data/visitorData/visitorsData';

const navigationEvents = (uid) => {
  // click event to show rides
  document.querySelector('#rides-link').addEventListener('click', () => {
    getRides().then((ridesArray) => createRides(ridesArray, uid));
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
    getVisitors().then((visitorsArray) => showVisitors(visitorsArray));
  });

  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', () => {
    signOut();
    getRides().then((ridesArray) => createRides(ridesArray));
  });

  // GET VENDORS
  document.querySelector('#vendors-link').addEventListener('click', () => {
    getVendors().then((vendorArray) => {
      if (vendorArray.length) {
        renderVendors(vendorArray);
      } else {
        emptyVendors();
      }
    });
  });
};

export default navigationEvents;
