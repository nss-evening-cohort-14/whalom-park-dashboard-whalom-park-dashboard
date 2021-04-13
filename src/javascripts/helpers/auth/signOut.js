import firebase from 'firebase/app';
import 'firebase/auth';

const signOut = () => {
  firebase.auth().signOut();
  window.location.reload();
};

export default signOut;
