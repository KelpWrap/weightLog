import React from "react";
import PropTypes from "prop-types";
import DataPoint from "./DataPoint";

export default class graph extends React.Component{
    static propTypes = {
        dataPoints: PropTypes.array,
        clickHandler: PropTypes.func,
    };
}