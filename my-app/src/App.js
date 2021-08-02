import "./App.css";
import React, { Component } from "react";
import Graph from "./component/Graph";
import AddDataModal from "./component/addDataModal";
const { Map } = require("immutable");

class App extends Component {
  constructor() {
    super();
    this.state = {
      datapoints: Map(),
    };
  }

  updateMap = (updatedMap) => {
    this.setState({ datapoints: updatedMap });
  };

  addDataHandleSubmit = (selectedDate, submittedWeight) => {
    const updatedMap = this.state.datapoints.set(selectedDate, submittedWeight);
    this.updateMap(updatedMap);
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

  openDataModal = (event, charContext, config) =>{
    console.log("a");
  }

  render() {
    const chartData = this.produceChartdata(this.state.datapoints);
    return (
      <div className="App">
        <AddDataModal
          handleSubmit={this.addDataHandleSubmit}
        />
        <Graph data={chartData} onDatapointClick={this.openDataModal}/>
      </div>
    );
  }
}

export default App;
