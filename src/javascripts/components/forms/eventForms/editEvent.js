const editEventForm = (eventObject) => {
  document.querySelector('#modal-body').innerHTML = `
<form id='edit-form' class='mb-4'>
  <div class='form-group'>
  <label for='title'>Event Title</label>
  <input type='text' class='form-control' id="event-title" aria-describedby='title' placeholder='Enter Event Name' value='${eventObject.eventName}' required>
</div>
  <div class='form-group'>
  <label for='image'>Image URL</label>
  <input type='url' class='form-control' id="event-image" placeholder='Image URL' required value='${eventObject.eventImageURL}'>
</div>
  <button type='button' id='update-event--${eventObject.firebaseKey}' class='btn btn-danger'>Edit Event</button>
</form>`;
};

export default editEventForm;
