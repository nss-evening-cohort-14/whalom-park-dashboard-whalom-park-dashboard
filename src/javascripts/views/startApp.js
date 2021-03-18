import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import { renderVendors, emptyVendors } from '../components/cards/vendor';
import { getVendors } from '../helpers/data/vendorData/vendorData';

const startApp = () => {
  domBuilder();
  domEvents();
  navBar();
  logoutButton();
  navigationEvents();

  getVendors().then((vendorArray) => {
    if (vendorArray.length) {
      renderVendors(vendorArray);
    } else {
      emptyVendors();
    }
  });
};

export default startApp;
