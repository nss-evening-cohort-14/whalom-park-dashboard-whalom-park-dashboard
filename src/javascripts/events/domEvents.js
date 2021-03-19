import 'firebase/auth';
import { renderVendors } from '../components/cards/vendor';
import { createVendor, deleteVendor } from '../helpers/data/vendorData/vendorData';
import addVendorForm from '../components/forms/vendorForms/addVendor';
import createRideForm from '../components/forms/rideForms/createRideForm';
import { addRides, deleteRides } from '../helpers/data/vendorData/ridesData';
import createRides from '../components/cards/rides';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR ADDING Ride FORM
    if (e.target.id.includes('add-ride-btn')) {
      createRideForm();
    }

    // GET Info from Ride Form
    if (e.target.id.includes('submit-ride')) {
      e.preventDefault();
      const rideObject = {
        rideName: document.querySelector('#title').value,
        rideImageURL: document.querySelector('#image').value,
      };
      addRides(rideObject).then((ridesArray) => createRides(ridesArray));
    }

    // Delete Ride
    if (e.target.id.includes('delete-ride')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteRides(firebaseKey).then((ridesArray) => createRides(ridesArray));
    }

    // DELETE VENDOR
    if (e.target.id.includes('delete-vendor')) {
      const vendorId = e.target.id.split('--')[1];
      deleteVendor(vendorId).then((vendors) => renderVendors(vendors));
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A VENDOR
    if (e.target.id.includes('add-vendor-btn')) {
      addVendorForm();
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING VENDOR
    if (e.target.id.includes('submit-vendor')) {
      e.preventDefault();
      const vendorObj = {
        vendorName: document.querySelector('#name').value,
        vendorImageURL: document.querySelector('#image').value,
        vendorProduct: document.querySelector('#product').value,
        vendorIsActive: document.querySelector('#active').checked,
        staffID_firebaseKey: document.querySelector('#select-staff').value,
      };
      createVendor(vendorObj).then((vendors) => renderVendors(vendors));
    }
  });
};

export default domEvents;
