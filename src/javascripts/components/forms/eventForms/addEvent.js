const addEventForm = () => {
  document.querySelector('#display-area').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-event-form" class="mb-4">
      <div class="form-group">
        <label for="title">Event Title</label>
        <input type="text" class="form-control" id="event-title" aria-describedby="boardTitle" placeholder="Enter Event Title" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="event-image" placeholder="Image URL" required>
        <button type="submit" id="submit-event" class="btn btn-danger" style="margin-top: 2rem;">Submit Event</button>
      </div>`;
};

export default addEventForm;
