import "./App.css";
import React, { Component } from "react";
import Graph from "./component/Graph";
import AddDataModal from "./component/AddDataModal";
const { Map } = require("immutable");

/* Main application file. 
*/
class App extends Component {
  constructor() {
    super();
    this.state = {
      datapoints: Map(),
      isDateFixed: false,
      fixedDate: new Date(),
      openModal: false,
      chartData: [],
    };
  }

  //Open and closes the Modal, if the modal is closed the date is unlocked
  setOpenModal = (bool) => {
    this.setState({ openModal: bool });
    if(!bool){
      this.setState({isDateFixed: false})
    }
  };

  /*Creates/updates entry in map and Array. Its called when submit button is clicked in the Modals body.

  */
  addDataHandleSubmit = (selectedDate, submittedWeight) => {
    const updatedMap = this.state.datapoints.set(selectedDate, submittedWeight);
    const chartData = this.produceChartdata(updatedMap);
    this.setState({
      datapoints: updatedMap,
      isDateFixed: false,
      chartData: chartData,
      openModal: false
    });
  };

  /*Delete datapoint on given date.  Its called when delete button is clicked in the Modals body.
  */
  deleteDatapoint = (selectedDate) => {
    const updatedMap = this.state.datapoints.delete(selectedDate);
    const chartData = this.produceChartdata(updatedMap);
    this.setState({
      datapoints: updatedMap,
      isDateFixed: false,
      chartData: chartData,
      openModal: false
    });
  }

  //Helper method that creates an Array of datapoints for the graph component
  produceChartdata = (map) => {
    const chartData = [];
    const sortedMap = map.toOrderedMap().sortBy((v, k) => k);
    sortedMap.forEach((v, k) => {
      chartData.push({ x: k.toDateString(), y: v });
    });
    return chartData;
  };

  //Opens the datamodal when accessed through clicking a datapoint.
  openDataModal = (event, charContext, config) => {
    const selectedDate = new Date(
      this.state.chartData[config.dataPointIndex].x
    );
    this.setState({
      openModal: true,
      isDateFixed: true,
      fixedDate: selectedDate,
    });
  };

  render() {
    return (
      <div className="App">
        <AddDataModal
          handleSubmit={this.addDataHandleSubmit}
          openModal={this.state.openModal}
          isDateFixed={this.state.isDateFixed}
          fixedDate={this.state.fixedDate}
          setOpen={this.setOpenModal}
          handleDelete={this.deleteDatapoint}
        />
        <Graph
          data={this.state.chartData}
          onDatapointClick={this.openDataModal}
        />
      </div>
    );
  }
}

export default App;
