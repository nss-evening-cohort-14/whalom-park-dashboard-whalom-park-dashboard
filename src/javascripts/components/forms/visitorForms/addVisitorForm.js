const createVisitorForm = () => {
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#display-area').innerHTML = `
    <form id="submit-visitor-form" class="mb-4">
      <div class="form-group">
        <label for="visitor-title">Add a Visitor</label>
        <input type="text" class="form-control" id="visitor-fn" aria-describedby="visitorFirstName" placeholder="Enter Visitor's First Name" required>
        <input type="text" class="form-control" id="visitor-ln" aria-describedby="visitorLastName" placeholder="Enter Visitor' Last Name" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="visitor-image" placeholder="Add an Image URL" required>
        <button type="submit" id="submit-visitor" class="btn btn-danger">Submit Visitor</button>
      </div>`;
};

export default createVisitorForm;
