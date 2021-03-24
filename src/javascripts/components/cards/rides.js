import firebase from 'firebase';

const createRides = (array) => {
  const isUserLoggedIn = firebase.auth().currentUser;
  document.querySelector('#header').innerHTML = `<h1>
  Rides</h1>`;
  document.querySelector('#add-button').innerHTML = `<div>
  ${isUserLoggedIn === null ? '' : `
  '<button class="btn btn-outline-danger btn mb-4" id="add-ride-btn">Create Rides</button>'
  `}
  </div>`;
  document.querySelector('#display-area').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#display-area').innerHTML += `<div class="card m-4" id="ride-card--${item.rideID_firebaseKey}" style="border-radius: 22px; background-color: #484f58; color: white;">
    <div id="card-body--${item.firebaseKey}" class="card-body" style="height: 400px; width: 350px; background-image: url('${item.rideImageURL}'); border-radius: 18px; background-size: Cover; background-repeat: no-repeat;">
    <div id="nameTitle">
    <h5 class="card-title">${item.rideName}</h5>
    </div>  
      ${isUserLoggedIn === null ? '' : `
      <button class="btn btn-outline-danger" id="delete-ride--${item.rideID_firebaseKey}" style="position: absolute; right:0; bottom: 0; color: #b1bac4; border: none;">🗑️</button>
      <button class="btn" id="edit-ride--${item.rideID_firebaseKey}" style="position: absolute; left:0; bottom: 0; color: #b1bac4; border: none;" data-toggle="modal" data-target="#formModal">Edit Ride</button>
      `}
  </div>`;
  });
};

export default createRides;
