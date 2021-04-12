import firebase from 'firebase';

const renderEvents = (eventArray) => {
  const isUserLoggedIn = firebase.auth().currentUser;
  document.querySelector('#header').innerHTML = '<h1> Events </h1>';
  document.querySelector('#add-button').innerHTML = `${isUserLoggedIn === null ? '' : '<button class="btn btn-outline-danger btn mb-4" id="add-event-btn" data-toggle="modal" data-target="#formModal">Add Event</button>'}`;
  document.querySelector('#pass-time-button').innerHTML = '';
  document.querySelector('#display-area').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  eventArray.forEach((item) => {
    document.querySelector('#display-area').innerHTML += `<div class="card m-4" id="visitor-card--${item.firebaseKey}" style="border-radius: 10px; background-color: #484f58; color: white;">
    <div id="card-body--${item.firebaseKey}" class="card-body" style="height: 400px; width: 350px; background-image: url('${item.eventImageURL}'); border-radius: 10px; background-size: Cover; background-repeat: no-repeat;">
    <div id="nameTitle"> 
    <h5 class="card-title">${item.eventName}</h5>
      ${isUserLoggedIn === null ? '' : `
      <button class="btn btn-outline-danger" id="delete-event--${item.firebaseKey}" style="position: absolute; right:0; bottom: 0; background-color: #a52a2a; color: white; border: none;">🗑️</button>
      <button class="btn" id="edit-event-btn--${item.firebaseKey}" style="position: absolute; left:0; bottom: 0; background-color: #a52a2a; color: white; border: none;" data-toggle="modal" data-target="#formModal">Edit Event</button>
      `}
  </div>`;
  });
};

export default renderEvents;
