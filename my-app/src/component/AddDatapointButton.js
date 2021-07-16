import React from 'react';
import {IconButton} from '@material-ui/core/';
import Add from '@material-ui/icons/Add'

class App extends React.Component{

    render() {
        return(
        <IconButton aria-label="addButton" onClick={()=> this.props.onClick()}>
            <Add/>
        </IconButton>
        );
    };
}

export default App;