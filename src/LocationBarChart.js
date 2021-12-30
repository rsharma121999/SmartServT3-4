import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

class LocationBarChart extends Component {
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
            { y: 80000, label: 'Everett' },
            { y: 70000, label: 'Seattle' },
            { y: 55000, label: 'Lynnwood' },
            { y: 50000, label: 'Bothell' },
            { y: 45000, label: 'Mukitteo' },
            { y: 35000, label: 'Edmonds' },
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

export default LocationBarChart;
