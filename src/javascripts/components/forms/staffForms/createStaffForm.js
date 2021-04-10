const createStaffForm = () => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="submit-staff-form" class="mb-4">
      <div class="form-group">
        <label for="lblFistName">Staff First Name</label>
        <input type="text" class="form-control" id="inFistName" aria-describedby="boardFirstName" placeholder="Enter Staff Fist Name" required>
        <label for="lblLastName">Staff Last Name</label>
        <input type="text" class="form-control" id="inLastName" aria-describedby="boardLastName" placeholder="Enter Staff Last Name" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="staffImage" placeholder="Image URL" required>
        <button type="button" id="submit-staff" class="btn btn-danger">Submit Staff</button>
      </div>`;
};

export default createStaffForm;
