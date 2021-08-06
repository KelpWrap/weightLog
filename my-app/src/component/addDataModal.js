import React from "react";
import Modal from "@material-ui/core/Modal";
import AddDatapointButton from "./AddDatapointButton";
import AddWeightBody from "./AddWeightBody";

/*Modal for adding data. Consists of a button
*/
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
    //dates are set to midnight before submitting
    const date = selectedDate;
    date.setHours(0,0,0,0);
    const parsedWeight = parseInt(submittedWeight);
    if (!isNaN(parsedWeight)){
      props.handleSubmit(date, parseInt(submittedWeight));
    }

  };

  const handleDelete = () => {
    props.handleDelete(props.fixedDate);
  }

  

  var body = {};
  //if the modal is opened via datapoint click the date will be fixed and a different body will be loaded
  if (props.isDateFixed) {
    body = (
      <AddWeightBody
        selectedDate={props.fixedDate}
        submittedWeight={submittedWeight}
        handleWeightChange={handleWeightChange}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
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
