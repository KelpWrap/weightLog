import "./App.css";
import React, { Component } from "react";
import Graph from "./component/Graph";
import AddDataModal from "./component/AddDataModal";
import AddWeightBody from "./component/AddWeightBody";
const { Map } = require("immutable");

class App extends Component {
  constructor() {
    super();
    this.state = {
      datapoints: Map(),
      isDateFixed: false,
      fixedDate: new Date(),
      openModal: false,
    };
  }

  setOpenModal = (bool) => {
    this.setState({openModal: bool})
  };

  addDataHandleSubmit = (selectedDate, submittedWeight) => {
    const updatedMap = this.state.datapoints.set(
      selectedDate.toDateString(),
      submittedWeight
    );
    this.setState({datapoints: updatedMap, isDateFixed: false, openModal: false})
    return updatedMap;
  };

  produceChartdata = (map) => {
    const chartData = [];
    const sortedMap = map.toOrderedMap().sortBy((v, k) => k);
    sortedMap.forEach((v, k) => {
      chartData.push({ x: k.toString().slice(4, 15), y: v });
    });
    return chartData;
  };

  openDataModal = (event, charContext, config, datapoints) => {
    const selectedDate = new Date(
      datapoints[config.dataPointIndex].x
    ).toDateString();
    this.setState({
      openModal: true,
      isDateFixed: true,
      fixedDate: selectedDate,
    });
  };

  render() {
    const chartData = this.produceChartdata(this.state.datapoints);
    return (
      <div className="App">
        <AddDataModal
          handleSubmit={this.addDataHandleSubmit}
          openModal={this.state.openModal}
          isDateFixed={this.state.isDateFixed}
          fixedDate={this.state.fixedDate}
          setOpen={this.setOpenModal}
        />
        <Graph data={chartData} onDatapointClick={this.openDataModal} />
      </div>
    );
  }
}

export default App;
