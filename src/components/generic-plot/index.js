import React from "react"
import Plot from "react-plotly.js"
import { Wrapper, Content } from "./generic-plot.styles"

function GenericPlot({dataToPlot, axes}) {
    
    return (
        <Wrapper>
            <Content>
            <Plot 
                data={dataToPlot}
                layout={{ 
                    showlegend: true,
                    legend: { x: 1, xanchor: 'right', y: 1},
                    width: 670,
                    height: 300,
                    margin: {b: 40, l: 50, r: 10, t: 10},
                    xaxis: {title: axes.x, showline: false},
                    yaxis: {title: axes.y, showline: false},
                    font: {
                        family: 'monospace',
                        size: 12
                    }
                }}          
                />
            </Content>
        </Wrapper>
    )
}

export default GenericPlot