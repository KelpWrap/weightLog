import './App.css';
import DateFnsUtils from '@date-io/date-fns';
import React, {Component, useState} from 'react';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import Graph from './component/Graph';
import AddDataModal from './component/addDataModal';
const Map = require('immutable');

class App extends Component {
  constructor(){
    super();
    this.state = {
        datapoints: Map,
    }
  };
  
//const [selectedDate, handleDateChange] = useState(new Date());
//{<MuiPickersUtilsProvider utils = {DateFnsUtils}>   
//  <DatePicker value={selectedDate} onChange={handleDateChange} />
//</MuiPickersUtilsProvider>
  render (){
    return (<div className="App">
      <AddDataModal/>
      <Graph data={[
            {date: '09-07-2021', weight: 73.7},
            {date: '10-07-2021', weight: 70.7},
            {date: '11-07-2021', weight: 68.6},
            {date: '12-07-2021', weight: 68.3},
            {date: '13-07-2021', weight: 68.3},
            {date: '14-07-2021', weight: 67.7},
            ]}/>
      
    </div>)
  };
};
      

export default App;
