import 'firebase/auth';
import { renderVendors } from '../components/cards/vendor';
import { createVendor, deleteVendor } from '../helpers/data/vendorData/vendorData';
import addVendorForm from '../components/forms/vendorForms/addVendor';
import createRideForm from '../components/forms/rideForms/createRideForm';
import {
  addRides, getSingleRide, updateRides, deleteRides
} from '../helpers/data/rideData/ridesData';
import createRides from '../components/cards/rides';
import formModal from '../components/forms/formModal';
import editRideForm from '../components/forms/rideForms/editRideForm';
import showVisitors from '../components/cards/visitors';
import createVisitorForm from '../components/forms/visitorForms/addVisitorForm';
import { addVisitor, deleteVisitor } from '../helpers/data/visitorData/visitorsData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR ADDING RIDE FORM
    if (e.target.id.includes('add-ride-btn')) {
      createRideForm();
    }

    // GET Info from Ride Form
    if (e.target.id.includes('submit-ride')) {
      e.preventDefault();
      const rideObject = {
        rideName: document.querySelector('#title').value,
        rideImageURL: document.querySelector('#image').value,
        staffID_firebaseKey: 'Mitchell'
      };
      addRides(rideObject).then((ridesArray) => createRides(ridesArray));
    }

    // Delete Ride
    if (e.target.id.includes('delete-ride')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteRides(firebaseKey).then((ridesArray) => createRides(ridesArray));
    }

    // CLICK EVENT FOR SHOWING MODAL TO EDIT RIDE
    if (e.target.id.includes('edit-ride')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Edit Pin');
      getSingleRide(firebaseKey).then((rideObject) => editRideForm(rideObject));
    }

    // // CLICK EVENT FOR EDITING Ride
    if (e.target.id.includes('update-ride')) {
      const firebaseKey = e.target.id.split('--')[1];
      console.warn(firebaseKey);
      e.preventDefault();
      const ridesObject = {
        rideName: document.querySelector('#title').value,
        rideImageURL: document.querySelector('#image').value,
        // staffID_firebaseKey: document.querySelector('#staff')
      };
      updateRides(firebaseKey, ridesObject).then((ridesArray) => createRides(ridesArray));

      $('#formModal').modal('toggle');
    }

<<<<<<< HEAD
    // VISITORS
    // CLICK EVENT FOR ADDING VISITOR FORM
    if (e.target.id.includes('add-visitor-btn')) {
      createVisitorForm();
    }
    // CLICK EVENT FOR ADDING VISITOR
    if (e.target.id.includes('submit-visitor')) {
      e.preventDefault();
      const visitorObject = {
        visitorFirstName: document.querySelector('#visitor-fn').value,
        visitorLastName: document.querySelector('#visitor-ln').value,
        visitorImageURL: document.querySelector('#visitor-image').value
      };
      addVisitor(visitorObject).then((visitorsArray) => showVisitors(visitorsArray));
    }
    // CLICK EVENT TO DELETE VISITOR
    if (e.target.id.includes('delete-visitor')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteVisitor(firebaseKey).then((visitorsArray) => showVisitors(visitorsArray));
    }

    // CLICK EVENT TO UPDATE VISITOR
=======
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
>>>>>>> development
  });
};

export default domEvents;
