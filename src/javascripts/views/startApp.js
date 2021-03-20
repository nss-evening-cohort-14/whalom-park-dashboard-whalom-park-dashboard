import logoutButton from '../components/buttons/logoutButton';
import createRides from '../components/cards/rides';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import { getRides } from '../helpers/data/rideData/ridesData';

const startApp = (userObject) => {
  domBuilder();
  navBar();
  domEvents();
  navigationEvents();
  logoutButton();
  getRides(userObject).then((rides) => createRides(rides));
};
export default startApp;
