// import selectStaff from '../selectStaff';

const addVendorForm = () => {
  document.querySelector('#display-area').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-vendor-form" class="mb-4">
      <div class="mb-3">
        <label for="title" class="form-label">Vendor Name</label>
        <input type="text" class="form-control" id="vendor-name" aria-describedby="vendorName" placeholder="Enter Vendor Name" required>
      </div>
      <div class="mb-3">
        <label for="image" class="form-label">Image URL</label>
        <input type="url" class="form-control" id="vendor-image" placeholder="Image URL" required>
      </div>
      <div class="mb-3">
        <label for="product" class="form-label">Product</label>
        <input type="text" class="form-control" id="vendor-product" placeholder="Vendor Product" required>
      </div>
      <div class="mb-3" id="select-staff">
      </div>
      <div class="form-check mb-2">
        <input type="checkbox" class="form-check-input" id="vendor-active">
        <label class="form-check-label" for="active">vendorIsActive?</label>
      </div>
      <div id="select-staff" class="mb-3"></div>
      <button type="submit" id="submit-vendor" class="btn btn-primary">Submit Vendor</button>
    </form>`;
  // selectStaff(vendorObj);
};

export default addVendorForm;
