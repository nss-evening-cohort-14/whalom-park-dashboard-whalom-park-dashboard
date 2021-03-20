const createStaff = (array) => {
  document.querySelector('#header').innerHTML = `<h1>
  Staffs</h1>`;
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-outline-danger btn mb-4" id="add-staff-btn">Create Staff</button>';
  document.querySelector('#display-area').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#display-area').innerHTML += `<div class="card m-4" id="board-card--${item.staffID_firebaseKey}" style="border-radius: 22px; background-color: #484f58;">
    <div id="card-body--${item.staffID_firebaseKey}" class="card-body" style="height: 400px; width: 350px; background-image: url('${item.staffImageURL}'); border-radius: 18px; background-size: Cover; background-repeat: no-repeat;">
      <h5 class="card-Staff-Name">${item.staffFirstName} ${item.staffLastName}</h5>
      <button class="btn btn-outline-danger" id="delete-Staff--${item.staffID_firebaseKey}" style="position: absolute; right:0; bottom: 0; color: #b1bac4; border: none;">🗑️</button>
      <button class="btn" id="active-staff--${item.staffID_firebaseKey}" style="position: absolute; left:0; bottom: 0; color: #b1bac4; border: none;"><img src="${item.staffImageURL}</button>
  </div>`;
  });
};

export default createStaff;