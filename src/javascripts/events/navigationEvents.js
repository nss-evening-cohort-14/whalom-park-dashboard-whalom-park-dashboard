import 'firebase/auth';
import createRides from '../components/cards/rides';
import createStaff from '../components/cards/staff';
import signOut from '../helpers/auth/signOut';
import { getStaff } from '../helpers/data/staffData/staffData';
import { renderVendors, emptyVendors } from '../components/cards/vendor';
import { getVendors } from '../helpers/data/vendorData/vendorData';
import { getRides } from '../helpers/data/rideData/ridesData';
import { getVisitors } from '../helpers/data/visitorData/visitorsData';
import { getEvents } from '../helpers/data/eventData/eventsData';
import renderEvents from '../components/cards/events';
import showVisitors from '../components/cards/visitors';
import showPerformance from '../components/cards/log';
import showHome from '../components/cards/home';

const navigationEvents = () => {
  // click event to show staff
  document.querySelector('#home-link').addEventListener('click', () => {
    showHome();
  });
  document.querySelector('#staff-link').addEventListener('click', () => {
    getStaff().then((staffArray) => createStaff(staffArray));
  });

  // click event to show rides
  document.querySelector('#rides-link').addEventListener('click', () => {
    getRides().then((ridesArray) => createRides(ridesArray));
  });

  // click event to show vendors
  document.querySelector('#vendors-link').addEventListener('click', () => {
    getVendors().then((vendorArray) => {
      if (vendorArray.length) {
        renderVendors(vendorArray);
      } else {
        emptyVendors();
      }
    });
  });

  // click event to show visitors
  document.querySelector('#visitors-link').addEventListener('click', () => {
    getVisitors().then((visitorsArray) => showVisitors(visitorsArray));
  });

  // click event to show events
  document.querySelector('#events-link').addEventListener('click', () => {
    getEvents().then((eventsArray) => renderEvents(eventsArray));
  });

  // click event to show logs and charts
  document.querySelector('#performance-link').addEventListener('click', () => {
    showPerformance();
  });

  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', () => {
    signOut();
    getRides().then((ridesArray) => createRides(ridesArray));
  });
};

export default navigationEvents;
