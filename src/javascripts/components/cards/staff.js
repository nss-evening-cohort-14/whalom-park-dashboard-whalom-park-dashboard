import firebase from 'firebase';

const createStaff = (array) => {
  const isUserLoggedIn = firebase.auth().currentUser;
  document.querySelector('#header').innerHTML = `<h1>
  Staff</h1>`;
  document.querySelector('#add-button').innerHTML = `${isUserLoggedIn === null ? '' : '<button class="btn btn-outline-danger btn mb-4" id="add-staff-btn" data-toggle="modal" data-target="#formModal">Create Staff</button>'}`;
  document.querySelector('#pass-time-button').innerHTML = `${isUserLoggedIn === null ? '' : '<button class="btn btn-outline-danger btn mb-4" id="pass-time-btn" data-toggle="modal" data-target="#formModal">Pass Time At The Park</button>'}`;
  document.querySelector('#display-area').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#display-area').innerHTML += `<div class="card m-4" id="board-card--${item.staffID_firebaseKey}" style="border-radius: 10px; background-color: #484f58; color: white;">
    <div id="card-body--${item.staffID_firebaseKey}" class="card-body" style="height: 400px; width: 350px; background-image: url('${item.staffImageURL}'); border-radius: 10px; background-size: Cover; background-repeat: no-repeat;">
    <div id="nameTitle">  
    <h5 class="card-Staff-Name">${item.staffFirstName} ${item.staffLastName}</h5>
    <p>${item.staffLevel}</p>
    </div>
      ${isUserLoggedIn === null ? '' : `
      <button class="btn btn-outline-danger" id="delete-staff--${item.staffID_firebaseKey}" style="position: absolute; right:0;   bottom: 0; background-color: #a52a2a; color: white; border: none;">🗑️</button>
      <button class="btn" id="edit-staff-btn--${item.staffID_firebaseKey}" style="position: absolute; left:0; bottom: 0; background-color: #a52a2a; color: white; border: none;" data-toggle="modal" data-target="#formModal">Edit Staff</button>
      `}
  </div>`;
  });
};

export default createStaff;
