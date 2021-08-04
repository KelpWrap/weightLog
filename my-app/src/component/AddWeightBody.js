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
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function AddWeightBody(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [submittedWeight, handleWeightChange] = React.useState(
    props.submittedWeight
  );

  const handleSubmit = () => {
    props.handleSubmit(props.selectedDate, parseInt(submittedWeight));
  };

  if (typeof props.handleDateChange === "function") {
    return (
      <div style={modalStyle} className={classes.paper}>
        <header id="Add Weight">
          Add a new Weight Datapoint
          <div class="flexbox-container">
            <div class="flex-item" id="DatePicker">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  value={props.selectedDate}
                  onChange={props.handleDateChange}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div>
              <NameForm
                value={props.submittedWeight}
                onChange={props.handleWeightChange}
              />
            </div>
            <div>
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
        </header>
      </div>
    );
  } else {
    return (
      <div style={modalStyle} className={classes.paper}>
        <header id="Add Weight">
          Add a new Weight Datapoint
          <div class="flexbox-container">
            <div class="flex-item" id="DatePicker">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker value={props.selectedDate} disabled={true} />
              </MuiPickersUtilsProvider>
            </div>
            <div>
              <NameForm value={submittedWeight} onChange={handleWeightChange} />
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                {" "}
                Submit{" "}
              </Button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
