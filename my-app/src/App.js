import logo from './logo.svg';
import './App.css';
import '.'
import DateFnsUtils from '@date-io/date-fns'
import React, {Component, useState} from 'react';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import graph from './component/Graph';



function App() {
const [selectedDate, handleDateChange] = useState(new Date());
  return (

    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
        render(<graph/> )
		<MuiPickersUtilsProvider utils = {DateFnsUtils}>      
			<DatePicker value={selectedDate} onChange={handleDateChange} />
		</MuiPickersUtilsProvider>

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
    </div>
  );
}

export default App;
