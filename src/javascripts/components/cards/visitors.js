import firebase from 'firebase';

const showVisitors = (visitorArray) => {
  const isUserLoggedIn = firebase.auth().currentUser;
  document.querySelector('#header').innerHTML = '<h1>Meet Our Visitors</h1>';
  document.querySelector('#add-button').innerHTML = `${isUserLoggedIn === null ? '' : '<button class="btn btn-outline-danger btn mb-4" id="add-visitor-btn" data-toggle="modal" data-target="#formModal">Add a Visitor</button>'}`;
  document.querySelector('#pass-time-button').innerHTML = `${isUserLoggedIn === null ? '' : '<button class="btn btn-outline-danger btn mb-4" id="pass-time-btn" data-toggle="modal" data-target="#formModal">Pass Time At The Park</button>'}`;
  document.querySelector('#display-area').innerHTML = '';

  visitorArray.forEach((card) => {
    document.querySelector('#display-area').innerHTML += `<div class="card m-4" id="visitor-card--${card.visitorID_firebaseKey}" style="border-radius: 10px; background-color: #a52a2a; color: white;">
    <div id="card-body--${card.firebaseKey}" class="card-body" style="height: 400px; width: 350px; background-image: url('${card.visitorImageURL}'); border-radius: 10px; background-size: Cover; background-repeat: no-repeat;">
       <div id="nameTitle"> 
       <h5 class="card-title">${card.visitorFirstName} ${card.visitorLastName}</h5>
      ${isUserLoggedIn === null ? '' : ` 
      <button class="btn btn-outline-danger" id="delete-visitor--${card.visitorID_firebaseKey}" style="position: absolute; right:0; bottom: 0; background-color: #a52a2a; border: none;">🗑️</button>
      <button class="btn" id="edit-visitor--${card.visitorID_firebaseKey}" style="position: absolute; left:0; bottom: 0; color: white; background-color: #a52a2a; border: none;" data-toggle="modal" data-target="#formModal">Edit Visitor</button>
      `} </div>
  </div>`;
  });
};

export default showVisitors;
