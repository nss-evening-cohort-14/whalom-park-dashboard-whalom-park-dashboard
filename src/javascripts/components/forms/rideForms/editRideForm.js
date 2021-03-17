const editRideForm = (ridesObject) => {
  document.querySelector('#modal-body').innerHTML = `
  <form id="edit-form" class="mb-4">
  <div class="form-group">
  <label for="image">Image URL</label>
  <input type="url" class="form-control" id="image" placeholder="Image URL" required value="${ridesObject.rideImageURL}">
</div>
    <div class="form-group" id="select-staff">
    </div>
    <button type="button" id="update-ride--${ridesObject.firebaseKey}" class="btn btn-danger">Update Ride</button>`;
};

export default editRideForm;
