const editVisitorForm = (visitorObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-form" class="mb-4">
    <label for="visitor-title">Add a Visitor</label>
      <div class="form-group">
        <input type="text" class="form-control" id="visitor-fn" aria-describedby="visitorFirstName" placeholder="Enter Visitor's First Name" value="${visitorObject.visitorFirstName}" required>
        <input type="text" class="form-control" id="visitor-ln" aria-describedby="visitorLastName" placeholder="Enter Visitor's Last Name" value="${visitorObject.visitorLastName}" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="visitor-image" placeholder="Add an Image URL" value="${visitorObject.visitorImageURL}" required>
        <button type="button" id="update-visitor--${visitorObject.visitorID_firebaseKey}" class="btn btn-danger">Update Visitor</button>
      </div>`;
};

export default editVisitorForm;
