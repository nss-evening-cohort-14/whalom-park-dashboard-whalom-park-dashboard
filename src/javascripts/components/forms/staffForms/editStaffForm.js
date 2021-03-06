const editStaffForm = (staffObject) => {
  document.querySelector('#modal-body').innerHTML = `
  <form id='update-staff--${staffObject.staffID_firebaseKey}' class='mb-4'>
  <div class='form-group'>
  <label for='title'>Staff First Name</label>
  <input type='text' class='form-control' id='firstName' aria-describedby='firstName' placeholder='Enter Staff First Name' value='${staffObject.staffFirstName}' required>
  <label for='title'>Staff Last Name</label>
  <input type='text' class='form-control' id='lastName' aria-describedby='lastName' placeholder='Enter Staff Last Name' value='${staffObject.staffLastName}' required>
</div>
  <div class='form-group'>
  <label for='image'>Image URL</label>
  <input type='url' class='form-control' id='image' placeholder='Image URL' required value='${staffObject.staffImageURL}'>
</div>
<div id="staffLevel" value="${staffObject.staffLevel}">
<div class="form-check">
  <input class="form-check-input" type="radio" name="whatStaffLevel" id="Senior" value="Senior Staff" checked>
  <label class="form-check-label" for="Senior">
    Senior Staff
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="whatStaffLevel" id="Intern" value="Intern Staff">
  <label class="form-check-label" for="Intern">
    Intern Staff
  </label>
</div>
</div>
    <div class='form-group' id='select-staff'>
    </div>
    <button type='submit' class='btn btn-danger'>Update Staff</button>`;
};

export default editStaffForm;
