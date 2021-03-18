import firebase from 'firebase/app';
import 'firebase/auth';
// import { getStaff } from '../../helpers/data/authorData';

const selectAuthor = (ridesObject = {}) => {
  let domString = `<label for="staff">Select an Author</label>
    <select class="form-control" id="staff" required>
    <option value="">Select an Staff Member</option>`;

  getStaff().then((staffArray) => {
    staffArray.forEach((staff) => {
      if (staff.firebaseKey === ridesObject.staffID_firebaseKey) {
        domString += `<option selected value="${staff.firebaseKey}">${staff.staffFirstName} ${staff.staffLastName}</option>`;
      } else {
        domString += `<option value="${staff.firebaseKey}">${staff.staffFirstName} ${staff.staffLastName}</option>`;
      }
    });

    domString += '</select>';

    document.querySelector('#select-staff').innerHTML = domString;
  });
};

export default selectAuthor;