import React from "react";
import Plot from "react-plotly.js";

class Graph extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            z: [2, 5, 1],
            type: "scatter3d",
            mode: "lines"
          }]}
        layout={{ width: "70%", height: "20%", title: "Graph Example" }}
      />
    );
  }
}

export default Graph;