import React from "react";
import Modal from "@material-ui/core/Modal";
import AddDatapointButton from "./AddDatapointButton";
import AddWeightBody from "./AddWeightBody";

export default function AddDataModal(props) {
  const [open, setOpen] = React.useState(props.isOpen);
  const [selectedDate, handleDateChange] = React.useState(new Date());
  const [submittedWeight, handleWeightChange] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    props.handleSubmit(selectedDate, parseInt(submittedWeight));
    setOpen(false);
  };
  var body = {};
  if (props.selectedDate !== "undefined"){
    body = (
      <AddWeightBody
        selectedDate={props.selectedDate}
        submittedWeight={submittedWeight}
        handleWeightChange={handleWeightChange}
        handleSubmit={handleSubmit}
      />
    );
  }else {
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
        open={open}
        onClose={handleClose}
        aria-labelledby="flexbox-container"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
