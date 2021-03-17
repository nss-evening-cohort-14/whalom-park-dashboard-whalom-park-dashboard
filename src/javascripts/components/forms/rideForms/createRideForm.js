const createRideForm = () => {
  // document.querySelector('#display-area').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#display-area').innerHTML = `
    <form id="submit-board-form" class="mb-4">
      <div class="form-group">
        <label for="title">Ride Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="boardTitle" placeholder="Enter Ride Title" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" required>
        <button type="button" id="submit-ride" class="btn btn-danger">Submit Ride</button>
      </div>`;
};

export default createRideForm;
