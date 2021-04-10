import firebase from 'firebase';

const createStaff = (array) => {
  const isUserLoggedIn = firebase.auth().currentUser;
  document.querySelector('#header').innerHTML = `<h1>
  Staffs</h1>`;
  document.querySelector('#add-button').innerHTML = `${isUserLoggedIn === null ? '' : '<button class="btn btn-outline-danger btn mb-4" id="add-staff-btn">Create Staff</button>'}`;
  document.querySelector('#display-area').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#display-area').innerHTML += `<div class="card m-4" id="board-card--${item.staffID_firebaseKey}" style="border-radius: 22px; background-color: #484f58; color: white;">
    <div id="card-body--${item.staffID_firebaseKey}" class="card-body" style="height: 400px; width: 350px; background-image: url('${item.staffImageURL}'); border-radius: 18px; background-size: Cover; background-repeat: no-repeat;">
    <div id="nameTitle">  
    <h5 class="card-Staff-Name">${item.staffFirstName} ${item.staffLastName}</h5>
    </div>
      ${isUserLoggedIn === null ? '' : `
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
          <label class="form-check-label" for="flexRadioDefault1">
            Default radio
          </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
          <label class="form-check-label" for="flexRadioDefault2">
            Default checked radio
          </label>
      </div>
      <button class="btn btn-outline-danger" id="delete-staff--${item.staffID_firebaseKey}" style="position: absolute; right:0;   bottom: 0; color: #b1bac4; border: none;">🗑️</button>
      <button class="btn" id="edit-staff--${item.staffID_firebaseKey}" style="position: absolute; left:0; bottom: 0; color: #b1bac4; border: none;" data-toggle="mo data-target="#formModal">Edit Staff</button>
      `}
  </div>`;
  });
};

export default createStaff;
