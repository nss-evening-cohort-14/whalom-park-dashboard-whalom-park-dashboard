const createRides = (array) => {
  document.querySelector('#header').innerHTML = `<h1>
  Boards</h1>`;
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-outline-danger btn mb-4" id="add-board-btn">Create Board</button>';
  document.querySelector('#display-area').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#display-area').innerHTML += `<div class="card m-4" id="board-card--${item.rideID_firebaseKey}" style="border-radius: 22px; background-color: #484f58;">
    <div id="card-body--${item.rideID_firebaseKey}" class="card-body" style="height: 400px; width: 350px; background-image: url('${item.rideImageURL}'); border-radius: 18px; background-size: Cover; background-repeat: no-repeat;">
      <h5 class="card-title">${item.rideName}</h5>
      <button class="btn btn-outline-danger" id="delete-board--${item.rideID_firebaseKey}" style="position: absolute; right:0; bottom: 0; color: #b1bac4; border: none;">🗑️</button>
  </div>`;
  });
};

export default createRides;
