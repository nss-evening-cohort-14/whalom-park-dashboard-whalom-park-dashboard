// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import checkLoginStatus from './helpers/auth/router';
import 'bootstrap'; // import bootstrap elements and js

import '../styles/main.scss';

const init = () => {
  // USE WITH FIREBASE AUTH
  checkLoginStatus();
};

init();
