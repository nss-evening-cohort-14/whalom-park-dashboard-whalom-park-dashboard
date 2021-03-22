import 'firebase/auth';
import { getRides } from '../../helpers/data/rideData/ridesData';

const selectRide = (ridesObject = {}) => {
  let domString = `
    <label for="Ride">Select a Ride</label>
    <select class="form-control" id="ride" required>
    <option value="">Select a Ride Member</option>`;

  getRides().then((rideArray) => {
    rideArray.forEach((Ride) => {
      if (Ride.firebaseKey === ridesObject.rideID_firebaseKey) {
        domString += `<option selected value="${Ride.rideID_firebaseKey}">${Ride.rideName}</option>`;
      } else {
        domString += `<option value="${Ride.rideID_firebaseKey}">${Ride.rideName}</option>`;
      }
    });

    domString += '</select>';

    document.querySelector('#select-ride').innerHTML = domString;
  });
};

export default selectRide;
