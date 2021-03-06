// import selectStaff from '../selectStaff';
// import selectStaffImg from '../selectStaffImg';

const editRideForm = (ridesObject) => {
  document.querySelector('#modal-body').innerHTML = `
  <form id='update-ride--${ridesObject.rideID_firebaseKey}' class='mb-4'>
  <div class='form-group'>
  <label for='title'>Ride Title</label>
  <input type='text' class='form-control' id='title' aria-describedby='title' placeholder='Enter Ride Name' value='${ridesObject.rideName}' required>
</div>
  <div class='form-group'>
  <label for='image'>Image URL</label>
  <input type='url' class='form-control' id='image' placeholder='Image URL' required value='${ridesObject.rideImageURL}'>
</div>
    <button type='submit' class='btn btn-danger'>Update Ride</button>`;
  // selectStaff(ridesObject);
};

export default editRideForm;
