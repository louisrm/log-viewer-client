import { getElementError } from "@testing-library/react";
import React from "react";
import Plot from "react-plotly.js";
import { Wrapper } from "./GenericPlot.styles";

function GenericPlot({data, fields, axes}) {
    <Wrapper>
        <Plot 
            data={data}

            layout={{ margin: {b: 0, l: 0, r: 0, t: 0}}}          

        />
    </Wrapper>



}

export default GenericPlot;