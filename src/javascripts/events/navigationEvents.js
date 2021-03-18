import 'firebase/auth';
import signOut from '../helpers/auth/signOut';
import { renderVendors, emptyVendors } from '../components/cards/vendor';
import { getVendors } from '../helpers/data/vendorData/vendorData';

const navigationEvents = () => {
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
