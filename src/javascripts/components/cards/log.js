const showPerformance = () => {
  document.querySelector('#header').innerHTML = '<h1>Performance</h1>';
  document.querySelector('#add-button').innerHTML = `<ul class="nav nav-pills nav-justified w-25 mx-auto">
                                                      <li class="nav-item">
                                                        <a class="nav-link active" aria-current="page" href="#">Income Charts</a>
                                                      </li>
                                                      <li class="nav-item">
                                                        <a class="nav-link" href="#">Transaction Logs</a>
                                                      </li>
                                                    </ul>`;
  document.querySelector('#display-area').innerHTML = `<div>
                                                        <div id="totalRevenue"></div>
                                                        <div id="rideRevenue"></div>
                                                        <div id="vendorRevenue"></div>
                                                      </div>`;
};

export default showPerformance;
