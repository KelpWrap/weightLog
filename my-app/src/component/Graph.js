import React from "react";
import Charts from 'react-apexcharts';


class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options:{
      chart: {
        events: {
          dataPointSelection:function(event, chartContext, config){
            props.onDatapointClick(event, chartContext, config, props.data);
          }
        }
      },
      xaxis: {
        type: "datetime"
      }
    },
      series: [
        {
          name: "series-1",
          data: props.data
        }
      ]
    };
  }
  render() {
    return (
      <div className="app">
        <div className="row">
            <Charts
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="60%"
            />
        </div>
      </div>
    );
  }
}

export default function renderGraph(props){
  var chart = new Graph(props);
  return chart.render();
};

