import { getLogs } from '../../helpers/data/logData';
import incomeChart from '../../helpers/incomeChart';

const showPerformance = () => {
  document.querySelector('#header').innerHTML = '<h1>Performance</h1>';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#pass-time-button').innerHTML = '<button class="btn btn-outline-danger btn mb-4" id="pass-time-btn" data-toggle="modal" data-target="#formModal">Pass Time At The Park</button>';
  document.querySelector('#display-area').innerHTML = '<h5>Visitor Tracking</h5><h5>Performance Charting</h5>';
  document.querySelector('#add-button').innerHTML = `<ul class="nav nav-pills nav-justified w-25 mx-auto">
                                                      <li class="nav-item">
                                                        <a class="nav-link active" aria-current="page" href="#">Income Chart</a>
                                                      </li>
                                                      <li class="nav-item">
                                                        <a class="nav-link" href="#">Transaction Logs</a>
                                                      </li>
                                                    </ul>
                                                    <div class="w-75 mx-auto my-2 border border-dark border-2 rounded" id="chartContainer"><div>`;
  document.querySelector('#display-area').innerHTML = '';

  getLogs().then((logsArray) => incomeChart(logsArray));
};

export default showPerformance;
