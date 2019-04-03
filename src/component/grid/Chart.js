import React from 'react'
const Chart = require('chart.js');

export class BarChart extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = this.node;

    var myChart = new Chart(node, {
      type: "bar",
      data: {
        labels: ["None", " ", "Contract", "Existing Business", "Full Time", "New Business", "Par Time"],
        datasets: [
          {
            label: "Jobs",
            data: [2, 4, 6,8, 10, 12,14, 16, 18,20, 22, 24],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 99, 132, 0.2)"
            ]
          }
        ]
      }
    });
  }
  render() {
    return (
      <div>
        <canvas
          style={{ width: 800, height: 450 }}
          ref={node => (this.node = node)}
        />
      </div>
    );
  }
}