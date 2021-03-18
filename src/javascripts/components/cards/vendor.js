const renderVendors = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-vendor-btn">Add A Vendor</button>';

  document.querySelector('#display-area').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#display-area').innerHTML += `<div class="card">
        <img class="card-img-top" src=${item.vendorImageURL} alt=${item.vendorName} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
        <h5 class="card-title">${item.vendorName}</h5>
        <p class="card-text bold">${item.vendorIsActive ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.vendorProduct}` : `$${item.vendorProduct}`}</p>
        <hr>
        <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-book-btn--${item.firebaseKey}">Edit Vendor</button>
        <button class="btn btn-danger" id="delete-vendor--${item.firebaseKey}">Delete Vendor</button>
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
