import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

class JobBarChart extends Component {
  addSymbols(e) {
    var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
    return CanvasJS.formatNumber(e.value / Math.pow(1, order));
  }
  render() {
    const options = {
      animationEnabled: true,
      title: {
        text: 'Revenue For November 2019',
        fontSize: 20,
        verticalAlign: 'bottom',
        horizontalAlign: 'center',
      },
      axisX: {
        reversed: true,
      },
      axisY: {
        labelFormatter: this.addSymbols,
      },
      data: [
        {
          type: 'bar',
          color: ' rgb(56,173,147)',
          dataPoints: [
            { y: 150000, label: 'Service Plumbing' },
            { y: 125000, label: 'Bid Work HVAC' },
            { y: 100000, label: 'Service HVAC' },
            { y: 90000, label: 'Bid Work Plumbing' },
            { y: 55000, label: 'HWT Replacement' },
            { y: 45000, label: 'Maintainence' },
            { y: 10000, label: 'Material Sales' },
          ],
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart options={options} />
      </div>
    );
  }
}

export default JobBarChart;
