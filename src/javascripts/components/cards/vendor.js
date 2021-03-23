import firebase from 'firebase';

const renderVendors = (venArray) => {
  document.querySelector('#header').innerHTML = `<h1>
  Vendors</h1>`;
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-vendor-btn">Add A Vendor</button>';
  document.querySelector('#display-area').innerHTML = '';
  // document.querySelector('#form-container').innerHTML = '';

  venArray.forEach((item) => {
    document.querySelector('#display-area').innerHTML += `
    <div class="card m-4" id="ride-card--${item.vendorID_firebaseKey}">
    <div class="card body" id="vendor-body--${item.firebaseKey}">
        <img class="card-img-top" src=${item.vendorImageURL} alt=${item.vendorName} style="height: 400px;">
        <div class="card-body--${item.firebaseKey}" style="height: 180px;">
        <h5 class="card-title">${item.vendorName}</h5>
        <p class="card-text bold">${item.vendorIsActive ? `<span class="badge badge-info product-badge"><i class="fa fa-bell" aria-hidden="true"></i> Active</span> ${item.vendorProduct}` : `$${item.vendorProduct}`}</p>
        <hr>
        ${firebase.auth().currentUser === null ? '' : `
        <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-vendor-btn--${item.vendorID_firebaseKey}">Edit Vendor</button>
        <button class="btn btn-danger" id="delete-vendor--${item.firebaseKey}">Delete Vendor</button>
        `}
        </div>
      </div>`;
  });
};

const emptyVendors = () => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-vendor-btn">Add A Vendor</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#display-area').innerHTML = '<h1>No Vendors</h1>';
};

export { renderVendors, emptyVendors };
