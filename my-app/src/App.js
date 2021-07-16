import logo from './logo.svg';
import './App.css';
import DateFnsUtils from '@date-io/date-fns';
import React, {Component, useState} from 'react';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import Graph from './component/Graph';
import AddButton from './component/AddDatapointButton';
import PopUp from './component/addDataModal';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
const Map = require('immutable');

function getModalStyle(){
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

class App extends Component {
  constructor(){
    super();
    this.state = {
        seen: false,
        datapoints: Map,
    }
  };

  togglePop = () => {
   this.setState({
    seen: !this.state.seen
   });
  };

  handleClick(){

  };
  
//const [selectedDate, handleDateChange] = useState(new Date());
//{<MuiPickersUtilsProvider utils = {DateFnsUtils}>   
//  <DatePicker value={selectedDate} onChange={handleDateChange} />
//</MuiPickersUtilsProvider>
  render (){
    return (<div className="App">
      <AddButton/>
      <Graph data={[
            {date: '09-07-2021', weight: 73.7},
            {date: '10-07-2021', weight: 70.7},
            {date: '11-07-2021', weight: 68.6},
            {date: '12-07-2021', weight: 68.3},
            {date: '13-07-2021', weight: 68.3},
            {date: '14-07-2021', weight: 67.7},
            ]}/>
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        

        <p>
          BipBipBoopBop.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>)
  };
};
      

export default App;
