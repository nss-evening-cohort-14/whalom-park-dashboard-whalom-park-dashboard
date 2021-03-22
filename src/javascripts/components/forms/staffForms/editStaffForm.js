const editStaffForm = (staffsObject) => {
  document.querySelector('#modal-body').innerHTML = `
  <form id='edit-form' class='mb-4'>
  <div class='form-group'>
  <label for='title'>Staff First Name</label>
  <input type='text' class='form-control' id='firstName' aria-describedby='firstName' placeholder='Enter Staff First Name' value='${staffsObject.staffFirstName}' required>
  <label for='title'>Staff Last Name</label>
  <input type='text' class='form-control' id='lastName' aria-describedby='lastName' placeholder='Enter Staff Last Name' value='${staffsObject.staffLastName}' required>
</div>
  <div class='form-group'>
  <label for='image'>Image URL</label>
  <input type='url' class='form-control' id='image' placeholder='Image URL' required value='${staffsObject.staffImageURL}'>
</div>
    <div class='form-group' id='select-staff'>
    </div>
    <button type='button' id='update-staff--${staffsObject.staffID_firebaseKey}' class='btn btn-danger'>Update Staff</button>`;
};

export default editStaffForm;