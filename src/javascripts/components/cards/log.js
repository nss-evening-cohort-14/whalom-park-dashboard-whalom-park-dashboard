import firebase from 'firebase';

const showPerformance = (performanceArray) => {
  const isUserLoggedIn = firebase.auth().currentUser;
  document.querySelector('#header').innerHTML = '<h1>Performance</h1>';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#display-area').innerHTML = '<h5>Visitor Tracking</h5><h5>Performance Charting</h5>';

  performanceArray.forEach((card) => {
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

export default showPerformance;
