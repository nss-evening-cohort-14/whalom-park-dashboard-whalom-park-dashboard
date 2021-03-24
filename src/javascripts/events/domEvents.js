import 'firebase/auth';
import { renderVendors } from '../components/cards/vendor';
import {
  getSingleVendor, createVendor,
  deleteVendor, editVendor
} from '../helpers/data/vendorData/vendorData';
import addVendorForm from '../components/forms/vendorForms/addVendorForm';
import editVendorForm from '../components/forms/vendorForms/editVendorForm';
import createRideForm from '../components/forms/rideForms/createRideForm';
import createRides from '../components/cards/rides';
import createStaffForm from '../components/forms/staffForms/createStaffForm';
import {
  addStaff, deleteStaff, getSingleStaff, updateStaff
} from '../helpers/data/staffData/staffData';
import createStaff from '../components/cards/staff';
import formModal from '../components/forms/formModal';
import editRideForm from '../components/forms/rideForms/editRideForm';
import {
  addRides, deleteRides, getSingleRide, updateRides
} from '../helpers/data/rideData/ridesData';
import showVisitors from '../components/cards/visitors';
import createVisitorForm from '../components/forms/visitorForms/addVisitorForm';
import {
  addVisitor, deleteVisitor, getSingleVisitor, updateVisitor
} from '../helpers/data/visitorData/visitorsData';
import editVisitorForm from '../components/forms/visitorForms/editVisitorForm';
import editStaffForm from '../components/forms/staffForms/editStaffForm';
import renderEvents from '../components/cards/events';
import {
  getSingleEvent, createEvent,
  deleteEvent, editEvent
} from '../helpers/data/eventData/eventsData';
import addEventForm from '../components/forms/eventForms/addEvent';
import editEventForm from '../components/forms/eventForms/editEvent';

const domEvents = (uid) => {
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
      };
      addRides(rideObject).then((ridesArray) => createRides(ridesArray, uid));
    }

    // Delete Ride
    if (e.target.id.includes('delete-ride')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteRides(firebaseKey).then((ridesArray) => createRides(ridesArray, uid));
    }

    // CLICK EVENT FOR SHOWING MODAL TO EDIT RIDE
    if (e.target.id.includes('edit-ride')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Edit Pin');
      getSingleRide(firebaseKey).then((rideObject) => editRideForm(rideObject, uid));
    }

    // // CLICK EVENT FOR EDITING Ride
    if (e.target.id.includes('update-ride')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const ridesObject = {
        rideName: document.querySelector('#title').value,
        rideImageURL: document.querySelector('#image').value,
      };
      updateRides(firebaseKey, ridesObject).then((ridesArray) => createRides(ridesArray, uid));

      $('#formModal').modal('toggle');
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
        vendorName: document.querySelector('#vendor-name').value,
        vendorImageURL: document.querySelector('#vendor-image').value,
        vendorProduct: document.querySelector('#vendor-product').value,
        vendorIsActive: document.querySelector('#vendor-active').checked,
        // staffID_firebaseKey: document.querySelector('#select-staff').value,
      };
      createVendor(vendorObj).then((vendors) => renderVendors(vendors));
    }

    // CLICK EVENT FOR SHOWING MODAL FORM FOR VENDOR
    if (e.target.id.includes('edit-vendor-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Edit Vendor');
      getSingleVendor(firebaseKey).then((vendorObj) => editVendorForm(vendorObj));
    }

    // CLICK EVENT FOR EDITING A VENDOR
    if (e.target.id.includes('update-vendor')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const vendorObj = {
        vendorName: document.querySelector('#vendor-name').value,
        vendorImageURL: document.querySelector('#vendor-image').value,
        vendorProduct: document.querySelector('#vendor-product').value,
        vendorIsActive: document.querySelector('#vendor-active').checked,
        // staffID_firebaseKey: document.querySelector('#select-staff').value,
      };
      editVendor(firebaseKey, vendorObj).then((vendorArray) => renderVendors(vendorArray));
      $('#formModal').modal('toggle');
    }

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

    // CLICK EVENT TO EDIT VISITOR
    if (e.target.id.includes('edit-visitor')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Edit Pin');
      getSingleVisitor(firebaseKey).then((visitorObject) => editVisitorForm(visitorObject));
    }

    // CLICK EVENT TO UPDATE VISITOR
    if (e.target.id.includes('update-visitor')) {
      e.preventDefault();
      const firebaseKey = e.target.id.split('--')[1];
      const visitorObject = {
        visitorFirstName: document.querySelector('#visitor-fn').value,
        visitorLastName: document.querySelector('#visitor-ln').value,
        visitorImageURL: document.querySelector('#visitor-image').value
      };
      updateVisitor(firebaseKey, visitorObject).then((visitorsArray) => showVisitors(visitorsArray));

      $('#formModal').modal('toggle');
    }

    // CLICK EVENT FOR ADDING Ride FORM
    if (e.target.id.includes('add-staff-btn')) {
      createStaffForm();
    }

    // ADDING A STAFF
    if (e.target.id.includes('submit-staff')) {
      e.preventDefault();
      const staffObject = {
        staffFirstName: document.querySelector('#inFistName').value,
        staffLastName: document.querySelector('#inLastName').value,
        staffImageURL: document.querySelector('#staffImage').value,
      };
      addStaff(staffObject).then((staffArray) => createStaff(staffArray));
    }
    // Delete STAFF
    if (e.target.id.includes('delete-staff')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteStaff(firebaseKey).then((staffArray) => createStaff(staffArray));
    }

    // CLICK EVENT FOR SHOWING MODAL TO EDIT STAFF
    if (e.target.id.includes('edit-staff')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Edit Pin');
      getSingleStaff(firebaseKey).then((staffObject) => editStaffForm(staffObject));
    }

    // // CLICK EVENT FOR EDITING Staff
    if (e.target.id.includes('update-staff')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const staffObject = {
        staffFirstName: document.querySelector('#firstName').value,
        staffLastName: document.querySelector('#lastName').value,
        staffImageURL: document.querySelector('#image').value,
      };
      updateStaff(firebaseKey, staffObject).then((staffArray) => createStaff(staffArray));

      $('#formModal').modal('toggle');
    }

    // CLICK EVENT FOR ADDING EVENT FORM
    if (e.target.id.includes('add-event-btn')) {
      addEventForm();
    }

    // GET Info from Event Form
    if (e.target.id.includes('submit-event')) {
      e.preventDefault();
      const eventObject = {
        eventName: document.querySelector('#event-title').value,
        eventImageURL: document.querySelector('#event-image').value,
      };
      createEvent(eventObject).then((eventsArray) => renderEvents(eventsArray));
    }

    // DELETE EVENT
    if (e.target.id.includes('delete-event')) {
      const firebaseKey = e.target.id.split('--')[1];
      deleteEvent(firebaseKey).then((eventsArray) => renderEvents(eventsArray));
    }

    // CLICK EVENT FOR SHOWING MODAL TO EDIT EVENT
    if (e.target.id.includes('edit-event-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Edit Event');
      getSingleEvent(firebaseKey).then((eventObject) => editEventForm(eventObject));
    }

    // CLICK EVENT FOR EDITING EVENT
    if (e.target.id.includes('update-event')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const eventObject = {
        eventName: document.querySelector('#event-title').value,
        eventImageURL: document.querySelector('#event-image').value,
      };
      editEvent(firebaseKey, eventObject).then((eventsArray) => renderEvents(eventsArray));
      $('#formModal').modal('toggle');
    }
  });
};

export default domEvents;
