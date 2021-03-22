import 'firebase/auth';
import { getVendors } from '../../helpers/data/vendorData/vendorData';

const selectVendor = (vendorObject = {}) => {
  let domString = `
    <label for="Vendor">Select a Vendor</label>
    <select class="form-control" id="vendor" required>
    <option value="">Select a Vendor Member</option>`;

  getVendors().then((vendorArray) => {
    vendorArray.forEach((vendor) => {
      if (vendor.firebaseKey === vendorObject.vendorID_firebaseKey) {
        domString += `<option selected value="${vendor.vendorID_firebaseKey}">${vendor.vendorName}</option>`;
      } else {
        domString += `<option value="${vendor.vendorID_firebaseKey}">${vendor.vendorName}</option>`;
      }
    });

    domString += '</select>';

    document.querySelector('#select-vendor').innerHTML = domString;
  });
};

export default selectVendor;
