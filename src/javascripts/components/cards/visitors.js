// import { getVisitors } from "../../helpers/data/visitorData/visitorsData";

const createVisitors = (visitorArray) => {
  document.querySelector('#header').innerHTML = '<h1>Rides</h1>';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-outline-danger btn mb-4" id="add-visitor-btn">Create Rides</button>';
  document.querySelector('#display-area').innerHTML = '';

  visitorArray.forEach((card) => {
    document.querySelector('#display-area').innerHTML += `<div class="card m-4" id="board-card--${card.visitorID_firebaseKey}" style="border-radius: 22px; background-color: #484f58;">
    <div id="card-body--${card.firebaseKey}" class="card-body" style="height: 400px; width: 350px; background-image: url('${card.visitorImageURL}'); border-radius: 18px; background-size: Cover; background-repeat: no-repeat;">
      <h5 class="card-title">${card.visitorFirstName} ${card.visitorLastName}</h5>
      <button class="btn btn-outline-danger" id="delete-ride--${card.firebaseKey}" style="position: absolute; right:0; bottom: 0; color: #b1bac4; border: none;">🗑️</button>
      <button class="btn" id="active-staff--${card.staffID_firebaseKey}" style="position: absolute; left:0; bottom: 0; color: #b1bac4; border: none;"><img src="${card.staffImageURL}</button>
  </div>`;
  });
};

export default createVisitors;
