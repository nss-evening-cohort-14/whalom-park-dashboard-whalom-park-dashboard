import firebase from 'firebase';

const renderEvents = (eventArray) => {
  const isUserLoggedIn = firebase.auth().currentUser;
  document.querySelector('#header').innerHTML = '<h1> Events </h1>';
  document.querySelector('#add-button').innerHTML = `${isUserLoggedIn === null ? '' : '<button class="btn btn-outline-danger btn mb-4" id="add-event-btn">Add Event</button>'}`;
  document.querySelector('#display-area').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  eventArray.forEach((item) => {
    document.querySelector('#display-area').innerHTML += `<div class="card m-4" id="event-card--${item.eventID_firebaseKey}" style="border-radius: 22px; background-color: #484f58;">
    <div id="event-body--${item.firebaseKey}" class="card-body" style="height: 400px; width: 350px; background-image: url('${item.eventImageURL}'); border-radius: 18px; background-size: Cover; background-repeat: no-repeat;">
      <h3 class="card-title">${item.eventName}</h3>
      ${isUserLoggedIn === null ? '' : `
      <button class="btn btn-outline-danger" id="delete-event--${item.firebaseKey}" style="position: absolute; right:0; bottom: 0; color: #b1bac4; border: none;">🗑️</button>
      <button class="btn" id="edit-event-btn--${item.firebaseKey}" style="position: absolute; left:0; bottom: 0; color: #b1bac4; border: none;" data-toggle="modal" data-target="#formModal">Edit Event</button>`}
  </div>`;
  });
};

export default renderEvents;
