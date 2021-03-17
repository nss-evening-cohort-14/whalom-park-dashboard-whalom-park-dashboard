import 'firebase/auth';
import createRideForm from '../components/forms/rideForms/createRideForm';
import { addRides } from '../helpers/data/vendorData/ridesData';
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
  });
};

export default domEvents;
