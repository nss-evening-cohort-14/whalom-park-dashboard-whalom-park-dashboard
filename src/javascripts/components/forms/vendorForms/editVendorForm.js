// import selectStaff from '../selectStaff';

const editVendorForm = (vendorObj) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-form" class="mb-4">
      <div class="form-group">
        <label for="title">Vendor Name</label>
        <input type="text" class="form-control" id="vendor-name" aria-describedby="vendorName" placeholder="Enter Vendor Name" value="${vendorObj.vendorName}" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="vendor-image" placeholder="Image URL" required value="${vendorObj.vendorImageURL}">
      </div>
      <div class="form-group">
        <label for="product">Product</label>
        <input type="text" class="form-control" id="vendor-product" placeholder="Vendor Product" value="${vendorObj.vendorProduct}" required>
      </div>
      <div class="form-check mb-2">
        <input type="checkbox" class="form-check-input" id="vendor-active" ${vendorObj.vendorIsActive && 'checked'}>
        <label class="form-check-label" for="active">vendorIsActive?</label>
      </div>
      <button type="submit" id="update-vendor--${vendorObj.vendorID_firebaseKey}" class="btn btn-success">Update Vendor</button>
    </form>`;
  // selectStaff(vendorObj);
};

export default editVendorForm;
