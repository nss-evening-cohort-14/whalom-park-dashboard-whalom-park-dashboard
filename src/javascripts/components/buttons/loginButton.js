import signIn from '../../helpers/auth/signIn';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>';
  document.querySelector('#login-button').innerHTML = domString;
  document.querySelector('#logout-button').innerHTML = '';
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
