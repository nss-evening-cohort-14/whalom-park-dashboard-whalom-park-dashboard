import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import showHome from '../components/cards/home';

const startApp = () => {
  domBuilder();
  navBar();
  domEvents();
  navigationEvents();
  showHome();
  logoutButton();
};
export default startApp;
