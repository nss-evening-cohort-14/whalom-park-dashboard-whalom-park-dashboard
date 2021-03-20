import 'firebase/auth';
import createRideForm from '../components/forms/rideForms/createRideForm';
import createRides from '../components/cards/rides';
import createStaffForm from '../components/forms/staffForms/createStaffForm';
import { addStaff } from '../helpers/data/staffData/staffData';
import createStaff from '../components/cards/staff';
import formModal from '../components/forms/formModal';
import editRideForm from '../components/forms/rideForms/editRideForm';
import { addRides, deleteRides, getSingleRide, updateRides } from '../helpers/data/rideData/ridesData';

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
  });
};

export default domEvents;
