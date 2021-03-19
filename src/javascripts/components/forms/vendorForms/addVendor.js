const addVendorForm = () => {
  document.querySelector('#display-area').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-vendor-form" class="mb-4">
      <div class="form-group">
        <label for="title">Vendor Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="vendorName" placeholder="Enter Vendor Name" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" required>
      </div>
      <div class="form-group">
        <label for="product">Product</label>
        <input type="text" class="form-control" id="product" placeholder="Vendor Product" required>
      </div>
      <div class="form-group" id="select-staff">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="active">
        <label class="form-check-label" for="active">vendorIsActive?</label>
      </div>
      <button type="submit" id="submit-vendor" class="btn btn-primary">Submit Vendor</button>
    </form>`;
};

export default addVendorForm;
