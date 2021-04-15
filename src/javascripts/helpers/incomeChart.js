import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themesMoonriseKingdom from '@amcharts/amcharts4/themes/moonrisekingdom';

const checkExistingLogs = (sortedLogs, chartLog) => {
  for (let i = 0; i < sortedLogs.length; i += 1) {
    // If log exists, return it's index.
    if (sortedLogs[i].event === chartLog.event) return i;
  }
  // If log is not found, return false.
  return false;
};

const sortLogsArray = (logsArray) => {
  const sortedLogs = [];
  // Loop through logs.
  logsArray.forEach((log) => {
    // Only use data from log that is needed.
    const chartLog = {
      event: log.event,
      earnings: log.earnings,
    };
    // If sortedLogs is empty, push log to it.
    if (sortedLogs.length === 0) {
      sortedLogs.push(chartLog);
    } else {
      // Checks if event already exists in sortedLogs.
      const existingLog = checkExistingLogs(sortedLogs, chartLog);
      if (existingLog || existingLog === 0) {
        // If log with same event was found, add earnings to it.
        sortedLogs[existingLog].earnings += chartLog.earnings;
      } else {
        // If no matching event was found, add log to sortedLogs.
        sortedLogs.push(chartLog);
      }
    }
  });

  return sortedLogs;
};

const incomeChart = (logsArray) => {
  // Combine duplicate events in logs.
  const sortedLogs = sortLogsArray(logsArray);

  const chart = am4core.create('chartContainer', am4charts.PieChart);
  chart.data = sortedLogs;

  const pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = 'earnings';
  pieSeries.dataFields.category = 'event';
  am4core.useTheme(am4themesMoonriseKingdom);
};

export default incomeChart;
