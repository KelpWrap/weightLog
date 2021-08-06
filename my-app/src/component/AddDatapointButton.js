import React from "react";
import { IconButton } from "@material-ui/core/";
import Add from "@material-ui/icons/Add";

export default function App (props)  {
    return (
      <div style={{
        margin:'auto'
      }}>
        <IconButton aria-label="addButton" onClick={() => props.onClick()} color="primary">
          <Add />
        </IconButton>
      </div>
    );
}

