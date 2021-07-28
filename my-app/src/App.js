import "./App.css";
import React, { Component } from "react";
import Graph from "./component/Graph";
import AddDataModal from "./component/addDataModal";
import { Button, Popover } from "@material-ui/core";
import SimplePopover from "./component/SimplePopover";
const { Map } = require("immutable");


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
    console.log(updatedMap.toObject());
    alert(updatedMap.toObject());
    return updatedMap;
  }
  

  render() {
    return (
      <div className="App">
        <AddDataModal datapoints={this.state.datapoints} handleSubmit={this.addDataHandleSubmit} />
        <Graph
          data={[
            { date: "09-07-2021", weight: 73.7 },
            { date: "10-07-2021", weight: 70.7 },
            { date: "11-07-2021", weight: 68.6 },
            { date: "12-07-2021", weight: 68.3 },
            { date: "13-07-2021", weight: 68.3 },
            { date: "14-07-2021", weight: 67.7 },
          ]}
        />
        <SimplePopover datapoints={this.state.datapoints}/>
      </div>
    );
  }
}

export default App;
