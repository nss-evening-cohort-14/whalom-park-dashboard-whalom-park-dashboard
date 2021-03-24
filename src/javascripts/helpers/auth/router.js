import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../../components/buttons/loginButton';
import logoutButton from '../../components/buttons/logoutButton';
import domBuilder from '../../components/domBuilder';
import navBar from '../../components/navBar';
import domEvents from '../../events/domEvents';
import hideCreate from '../../events/hideCreate';
import navigationEvents from '../../events/navigationEvents';
import startApp from '../../views/startApp';
import firebaseConfig from './apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
      logoutButton();
    } else {
      // person is NOT logged in
      domBuilder();
      navBar();
      loginButton();
      navigationEvents();
      domEvents();
      hideCreate();
    }
  });
};

export default checkLoginStatus;
