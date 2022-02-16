import React from "react"
import Plot from "react-plotly.js"
import { Wrapper } from "./overview-graph.styles"

function OverviewGraph(props) {
  let flightData = props.flight

  let lon = flightData.GLOBAL_POSITION_INT.lon.map(v => v / Math.pow(10,7))
  let lat = flightData.GLOBAL_POSITION_INT.lat.map(v => v / Math.pow(10,7))

  let meanLon = lon.reduce((a, b) => a + b, 0)/lon.length;
  let meanLat = lat.reduce((a, b) => a + b, 0)/lat.length;

  return (
    <Wrapper>
      {(typeof flightData.STATUSTEXT === 'undefined') ? (
          <p>Loading...</p> 
          ) : (
        <Plot
          data = {[
            {
              type: "scattermapbox",
              lon: lon,
              lat: lat,
              line: { color: "#ffb95e", width: 4 },
              mode: "lines"
            }
          ]}

          layout={{mapbox: { 
                      style: "carto-positron", 
                      center: { 
                        lat: meanLat, 
                        lon: meanLon 
                      },
                      zoom: 14 
                    },
                    margin: {b: 0, l: 0, r: 0, t: 0}
                  }}          
        />
    )}
  </Wrapper>
  );
}


export default OverviewGraph