import logoutButton from '../components/buttons/logoutButton';
import createRides from '../components/cards/rides';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import { renderVendors, emptyVendors } from '../components/cards/vendor';
import { getVendors } from '../helpers/data/vendorData/vendorData';
import { getRides } from '../helpers/data/vendorData/ridesData';

const startApp = (userObject) => {
  domBuilder();
  navBar();
  domEvents();
  navigationEvents();

  getVendors(userObject).then((vendorArray) => {
    if (vendorArray.length) {
      renderVendors(vendorArray);
    } else {
      emptyVendors(userObject);
    }
  });
  logoutButton();
  getRides(userObject).then((rides) => createRides(rides));
};

export default startApp;
