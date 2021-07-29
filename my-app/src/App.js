import "./App.css";
import React, { Component } from "react";
import Graph from "./component/Graph";
import AddDataModal from "./component/addDataModal";
import { Button, Popover } from "@material-ui/core";
import SimplePopover from "./component/SimplePopover";
const { Map, List } = require("immutable");


class App extends Component {
  constructor() {
    super();
    this.state = {
      datapoints: Map(),
    };
  }

  updateMap = (updatedMap) => {
    this.setState({datapoints: updatedMap})
  }

  addDataHandleSubmit = (selectedDate, submittedWeight) => {
    const updatedMap = this.state.datapoints.set(selectedDate, submittedWeight);
    this.updateMap(updatedMap);
    return updatedMap;
  }
  

  render() {
    console.log((this.state.datapoints.toJSON()));
    const data = [
      {date: this.state.datapoints.keys(), weight: this.state.datapoints.values()}
    ]
    return (
      <div className="App">
        <AddDataModal datapoints={this.state.datapoints} handleSubmit={this.addDataHandleSubmit} />
        <Graph
          data={
            data
          }
        />
      </div>
    );
  }
}

export default App;
