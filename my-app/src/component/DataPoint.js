import React from "react";
import PropTypes from "prop-types";


export default class DataPoint extends React.Component{
    static propTypes = {
        date: PropTypes.string,
        weight: PropTypes.number,
        clickHandler: PropTypes.func,
    };

    handleClick = () => {
        this.props.clickHandler(this.props.date, this.props.weight);
    };

    render() {
        const className = [
            " ",
            this.props.weight,
        ];
        return (
            <div className={className.join(" ").trim()}>
            <button onClick= {this.handleClick}>{this.props.date}{this.props.weight}</button>
            </div>
        );
    }

}