import React, { Component } from 'react';
import Plot from 'react-plotly.js';

class GraphPlot extends Component {
  render() {
    const data = [
      {
        x: [1, 2, 3, 4, 5],
        y: [10, 18, 14, 13, 20],
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'green' },
      },
    ];

    return (
      <div className="graph-container">
        <Plot
          data={data}
          layout={{
            title: 'Sample graph plotting chart',
            xaxis: { title: 'X Axis' },
            yaxis: { title: 'Y Axis' },
          }}
        />
      </div>
    );
  }
}

export default GraphPlot;