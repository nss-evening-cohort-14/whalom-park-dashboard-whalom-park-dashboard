import { getSingleRide, updateRides } from '../rideData/ridesData';

const addingStaftoRideAndVendor = (staffID, rideID) => {
  getSingleRide(rideID).then(() => {
    const updateStaffOnRide = {
      staffID_firebaseKey: staffID,
    };
    updateRides(rideID, updateStaffOnRide).then();
  });
  // getSingleVendor(rideID).then(() => {
  //   const updateStaffOnRide = {
  //     staffID_firebaseKey: staffID,
  //   };
  //   updateRides(rideID, updateStaffOnRide).then();
  // });
};

export default addingStaftoRideAndVendor;
