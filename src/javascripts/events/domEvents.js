import 'firebase/auth';
import createRideForm from '../components/forms/rideForms/createRideForm';
import { addRides, deleteRides } from '../helpers/data/vendorData/ridesData';
import createRides from '../components/cards/rides';
import createStaffForm from '../components/forms/staffForms/createStaffForm';
import { addStaff } from '../helpers/data/staffData/staffData';
import createStaff from '../components/cards/staff';

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
