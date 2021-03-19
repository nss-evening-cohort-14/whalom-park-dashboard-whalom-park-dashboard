import 'firebase/auth';
import createRides from '../components/cards/rides';
import signOut from '../helpers/auth/signOut';
import { renderVendors, emptyVendors } from '../components/cards/vendor';
import { getVendors } from '../helpers/data/vendorData/vendorData';
import { getRides } from '../helpers/data/rideData/ridesData';

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
    document.querySelector('#header').innerHTML = '<h1>Visitors Coming Soon!</h1>';
    document.querySelector('#display-area').innerHTML = '';
    document.querySelector('#add-button').innerHTML = '';
  });

  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

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
