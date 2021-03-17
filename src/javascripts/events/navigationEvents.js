import 'firebase/auth';
import signOut from '../helpers/auth/signOut';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};

export default navigationEvents;
