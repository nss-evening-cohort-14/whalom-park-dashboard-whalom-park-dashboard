// import { getRides, getSingleRide, updateRides } from '../rideData/ridesData';
import { getSingleVendor, editVendor } from '../vendorData/vendorData';
import { getSingleRide, updateRides } from '../rideData/ridesData';
// import { deleteStaff } from './staffData';

const addingStaftoRideAndVendor = (staffID, rideID, vendorID) => {
  if (rideID !== '') {
    getSingleRide(rideID).then(() => {
      const updateStaffOnRide = {
        staffID_firebaseKey: staffID,
      };
      updateRides(rideID, updateStaffOnRide).then();
    });
  }

  if (vendorID !== '') {
    getSingleVendor(vendorID).then(() => {
      const updateStaffOnVendor = {
        vendorID_firebaseKey: staffID,
      };
      editVendor(vendorID, updateStaffOnVendor).then();
    });
  }
};

// const deleteStaffFromRidesAndVendors = (staffID) => new Promise((resolve, reject) => {
//   getRides(staffID).then((ridesArray) => {
//     const deleteRides = ridesArray.map((ride) => ride.staffID.staffID_firebaseKey === staffID? deleteRides(ride.rideID_firebaseKey));
//     Promise.all(deleteRides).then(() => resolve(deleteStaff(staffID)));
//   }).catch((error) => reject(error));
//   // getRides(staffID).then((ridesArray) => {
//   //   const deleteRides = ridesArray.map((ride) => deleteRides(ride.rideID_firebaseKey));
//   //   Promise.all(deleteRides).then(() => resolve(deleteStaff(staffID)));
//   // }).catch((error) => reject(error));
// )};
// }
export default addingStaftoRideAndVendor;
