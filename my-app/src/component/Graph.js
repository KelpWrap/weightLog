import React from "react";
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    SplineSeries,
    Legend,
    ScatterSeries,
  } from '@devexpress/dx-react-chart-material-ui';
import { Paper } from "@material-ui/core";
import { ValueScale, ArgumentScale } from "@devexpress/dx-react-chart";
import { scaleBand } from '@devexpress/dx-chart-core';
import { scaleLog } from 'd3-scale';
import { symbolCircle, symbol } from 'd3-shape';
import { formatPrefix } from 'd3-format';
  
const Point = props => (
    <ScatterSeries.Point {...props} d={symbol().size([20 ** 2]).type(symbolCircle)()} />
);

export default function graph(props){

        const chartData = props.data;
        const fakta = [{date: '1', weight:'420'}, {date: '2', weight:'69'}];
        console.log(chartData);
        console.log(fakta);
        return(
            <Paper>
                <Chart
                    data ={chartData}
                >
                <ValueScale name ="date"  />
                <ArgumentScale factory={scaleBand} type = 'time'/>
                <ArgumentAxis />
                <ValueAxis scaleName="date" showGrid={true} showLine showTicks />
                <SplineSeries name="Your Weight Journey" valueField="weight" argumentField="date" scaleName="date" pointComponent={Point}/>
                <Legend/>
                </Chart>
            </Paper>
        );
}