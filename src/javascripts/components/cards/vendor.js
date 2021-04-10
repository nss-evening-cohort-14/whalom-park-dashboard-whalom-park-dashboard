import firebase from 'firebase';

const renderVendors = (venArray) => {
  const isUserLoggedIn = firebase.auth().currentUser;
  document.querySelector('#header').innerHTML = `<h1>
  Vendors</h1>`;
  document.querySelector('#add-button').innerHTML = `<div>
  ${isUserLoggedIn === null ? '' : `
  '<button class="btn btn-outline-danger btn mb-4" id="add-vendor-btn">Add Vendor</button>'
  `}
  </div>`;
  document.querySelector('#display-area').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  venArray.forEach((item) => {
    document.querySelector('#display-area').innerHTML += `<div class="card m-4" id="visitor-card--${item.vendorID_firebaseKey}" style="border-radius: 10px; background-color: #484f58; color: white;">
    <div id="card-body--${item.firebaseKey}" class="card-body" style="height: 400px; width: 350px; background-image: url('${item.vendorImageURL}'); border-radius: 10px; background-size: Cover; background-repeat: no-repeat; background-color: #484f58; color: white">
      <div id="nameTitle">
      <h5 class="card-title">${item.vendorName}</h5>
      ${isUserLoggedIn === null ? '' : `
      <p class="card-text bold">${item.vendorIsActive ? `<span class="badge badge-info product-badge"><i class="fa fa-bell" aria-hidden="true"></i> Active</span> ${item.vendorProduct}` : `${item.vendorProduct}`}</p>
      <button class="btn btn-outline-danger" id="delete-vendor--${item.visitorID_firebaseKey}" style="position: absolute; right:0; bottom: 0; background-color: #a52a2a; color: white; border: none;">🗑️</button>
      <button class="btn" id="edit-vendor--${item.visitorID_firebaseKey}" style="position: absolute; left:0; bottom: 0; background-color: #a52a2a; color: white; border: none;" data-toggle="modal" data-target="#formModal">Edit Vendor</button>
      `}
  </div>`;
  });
};

const emptyVendors = () => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-outline-danger mb-4" id="add-vendor-btn">Add A Vendor</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#display-area').innerHTML = '<h1>No Vendors</h1>';
};
export { renderVendors, emptyVendors };
