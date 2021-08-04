import React from "react";
import Modal from "@material-ui/core/Modal";
import AddDatapointButton from "./AddDatapointButton";
import AddWeightBody from "./AddWeightBody";

export default function AddDataModal(props) {
  const [selectedDate, handleDateChange] = React.useState(new Date());
  const [submittedWeight, handleWeightChange] = React.useState("");

  const handleOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleSubmit = () => {
    props.handleSubmit(selectedDate, parseInt(submittedWeight));
    props.setOpen(false);
  };

  const handleChange = () => {
    props.handleSubmit(props.selectedDate, parseInt(submittedWeight));
    props.setOpen(false);
  };

  var body = {};
  if (props.isDateFixed) {
    body = (
      <AddWeightBody
        selectedDate={props.selectedDate}
        submittedWeight={submittedWeight}
        handleWeightChange={handleWeightChange}
        handleSubmit={handleChange}
      />
    );
  } else {
    body = (
      <AddWeightBody
        selectedDate={selectedDate}
        submittedWeight={submittedWeight}
        handleDateChange={handleDateChange}
        handleWeightChange={handleWeightChange}
        handleSubmit={handleSubmit}
      />
    );
  }

  return (
    <div>
      <AddDatapointButton onClick={handleOpen} />
      <Modal
        open={props.openModal}
        onClose={handleClose}
        aria-labelledby="flexbox-container"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
