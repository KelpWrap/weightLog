import React from "react";
import Charts from "react-apexcharts";

export default function Graph(props) {
  const series = [
    {
      name: "Your weight",
      data: props.data,
    },
  ];
  const options = {
    xaxis: {
      type: "category",
      tickPlacement: 'on',
    },
    tooltip: {
      shared: false,
      intersect: true,
    },
    markers:{
      size: 7,
      strokeOpacity: 0.9,

    },
    chart: {
      events: {
        dataPointSelection: function (event, chartContext, config) {
          props.onDatapointClick(event, chartContext, config);
        },
      },
    },
  };

  return (
    <div style={{
      margin: 'auto',
      maxWidth: '80%',
      
    }}>
        <Charts
          series={series}
          options={options} 
          type="line"
          height='480%'
        />
    </div>
  );
}
