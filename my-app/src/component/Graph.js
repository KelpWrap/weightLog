import React, {Component} from "react";
import ApexCharts from 'apexcharts';
import { Paper } from "@material-ui/core";


class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: {
        height: 380,
        width: "100%",
        type: "area",
        animations: {
          initialAnimation: {
            enabled: false
          }
        }
      },
      series: props.data,
      xaxis: {
        type: "datetime"
      }
    };
  }
  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <ApexCharts
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;

