import 'firebase/auth';
import createRides from '../components/cards/rides';
import signOut from '../helpers/auth/signOut';
import getRides from '../helpers/data/vendorData/ridesData';

const navigationEvents = () => {
  // click event to show rides
  document.querySelector('#rides-link').addEventListener('click', () => {
    getRides().then((ridesArray) => createRides(ridesArray));
  });

  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};

export default navigationEvents;
