const renderVendors = (venArray) => {
  document.querySelector('#header').innerHTML = `<h1>
  Vendors</h1>`;
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-outline-danger mb-4" id="add-vendor-btn">Add A Vendor</button>';
  document.querySelector('#display-area').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  venArray.forEach((item) => {
    document.querySelector('#display-area').innerHTML += `
    <div class="card m-4" id="vendor-card--${item.vendorID_firebaseKey}">
      <img class="card-img-top" src=${item.vendorImageURL} alt=${item.vendorName} style="height: 400px;">
    <div class="card body">
        <h5 class="card-title">${item.vendorName}</h5>
        <p class="card-text bold">${item.vendorIsActive ? `<span class="badge badge-info product-badge"><i class="fa fa-bell" aria-hidden="true"></i> Active</span> ${item.vendorProduct}` : `${item.vendorProduct}`}</p>
        <div id="select-staff" class="form-group"></div>
        <option value="${item.staffID_firebaseKey}">${item.staffFirstName} ${item.staffLastName}</option>
        <br>
        <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-vendor-btn--${item.vendorID_firebaseKey}">Edit Vendor</button>
        <button class="btn btn-danger" id="delete-vendor--${item.vendorID_firebaseKey}">Delete Vendor</button>
        </div>
      </div>`;
  });
};

const emptyVendors = () => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-outline-danger mb-4" id="add-vendor-btn">Add A Vendor</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#display-area').innerHTML = '<h1>No Vendors</h1>';
};
export { renderVendors, emptyVendors };
