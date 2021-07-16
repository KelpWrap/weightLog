import React from "react";
import PropTypes from "prop-types";
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    SplineSeries,
    Legend,
  } from '@devexpress/dx-react-chart-material-ui';
import { Paper } from "@material-ui/core";
import { ValueScale } from "@devexpress/dx-react-chart";
  

export default class graph extends React.Component{
    static propTypes = {
        dataPoints: PropTypes.array,
        clickHandler: PropTypes.func,
    };
    constructor(props){
        super(props);
        this.state = {data : props.data};
    }

    render(){
        const {data: chartData} = this.state;
        return(
            <Paper>
                <Chart
                    data = {chartData}
                >
                <ValueScale name ="date" />

                <ArgumentAxis/>
                <ValueAxis scaleName="date" showGrid={true} showLine showTicks />
                <SplineSeries name="Your Weight Journey" valueField="weight" argumentField="date" scaleName="date"/>
                <Legend/>
                </Chart>
            </Paper>
        );
    }
}