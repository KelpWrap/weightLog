import React from "react";
import { makeStyles } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import NameForm from "./NameForm";
import { Button } from "@material-ui/core";

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
    margin: "auto",
    width: 230,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    alignItems: "center",
  },

  root: {
    "& > *": {
      width: "25ch",
    },
  },
}));

export default function AddWeightBody(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  //handleDateChange will only be a function if the modal is opened through the add datapoint button.
  if (typeof props.handleDateChange === "function") {
    return (
      <div style={modalStyle} className={classes.paper}>
          Add a new Weight Datapoint
          <div>
            <div style={{
              marginLeft:'10px'
            }}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  value={props.selectedDate}
                  onChange={props.handleDateChange}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div class="flex-item">
              <NameForm
                value={props.submittedWeight}
                onChange={props.handleWeightChange}
              />
            </div>
            <div style={{
              marginLeft:'70px'
            }}>
              <Button
                variant="contained"
                color="primary"
                onClick={props.handleSubmit}
              >
                {" "}
                Submit{" "}
              </Button>
            </div>
          </div>
      </div>
    );
    //if the modal is opened through a datapoint click a second button to delete a point is displayed.
  } else {
    return (
      <div style={modalStyle} className={classes.paper}>
        <header
          id="Add Weight"
          style={{
            margin: "auto",
          }}
        >
          Change or delete a Weight Datapoint
          <div >
            <div id="DatePicker" style={{
              marginLeft:'10px'
            }}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker value={props.selectedDate} disabled={true} />
              </MuiPickersUtilsProvider>
            </div>
            <div>
              <NameForm
                value={props.submittedWeight}
                onChange={props.handleWeightChange}
              />
            </div>
          </div>
          <div
            class="container"
            style={{
              display: "flex",
            }}
          >
            <div
              class="flex-item"
              style={{
                marginRight: "20px",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={props.handleSubmit}
              >
                {" "}
                Change{" "}
              </Button>
            </div>
            
            <div class="flex-item">
              <Button
                variant="contained"
                color="secondary"
                onClick={props.handleDelete}
              >
                {" "}
                Delete{" "}
              </Button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
