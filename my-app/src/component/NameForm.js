import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

export default function InputAdornments(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    weight: "",
    weightRange: "",
  });

  const handleChange = (prop) => (event) => {
    props.onChange(event.target.value);
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <FormControl
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
      >
        <OutlinedInput
          id="outlined-adornment-weight"
          value={values.weight}
          onChange={handleChange("weight")}
          endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
          labelWidth={0}
        />
        <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
      </FormControl>
    </div>
  );
}
