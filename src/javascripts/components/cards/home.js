const showHome = () => {
  document.querySelector('#header').innerHTML = '<h1>Welcome to the</h1>';
  document.querySelector('#display-area').innerHTML = '<h1 class="introPage">Whalom Park Management Portal</h1>';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#pass-time-button').innerHTML = '';
};

export default showHome;
