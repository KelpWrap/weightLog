import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AddDatapointButton from './AddDatapointButton'
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import NameForm from './NameForm';
import { Button } from '@material-ui/core';

function getModalStyle() {
  const top = 30;
  const left = 30;
  return {
    top: `${top}%`,
    left: `${left}%`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function AddDataModal(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [selectedDate, handleDateChange] = React.useState(new Date());
    const [submittedWeight, handleWeightChange] = React.useState('');
    
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSubmit = () => {
      props.handleSubmit(selectedDate, submittedWeight);
      setOpen(false);
    }
  
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <header id="Add Weight">Add a new Weight Datapoint 
          <div class="flexbox-container">
              <div class="flex-item" id="DatePicker">
                <MuiPickersUtilsProvider utils = {DateFnsUtils}>   
                  <DatePicker value={selectedDate} onChange={handleDateChange} />
                </MuiPickersUtilsProvider>
              </div>
              <div>
                <NameForm value = {submittedWeight} onChange={handleWeightChange}/>
              </div>
              <div>
                <Button variant="contained" color="primary" onClick={handleSubmit}> Submit </Button>
              </div>
          </div>
        </header>
      </div>
    );
  
    return (
      <div>
        <AddDatapointButton onClick = {handleOpen}/>
        <Modal
          open={open}
          onClose={handleClose}
          onSubmit={handleSubmit}
          aria-labelledby="flexbox-container"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    );
  }