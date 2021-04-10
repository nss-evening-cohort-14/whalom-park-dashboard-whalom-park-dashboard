const showPerformance = () => {
  document.querySelector('#header').innerHTML = '<h1>Performance</h1>';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#display-area').innerHTML = '<h5>Visitor Tracking</h5><h5>Performance Charting</h5>';
};

export default showPerformance;
