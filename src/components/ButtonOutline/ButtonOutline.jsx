import React, { Component } from "react";
import { Link } from "react-router-dom";

import { HiArrowNarrowRight } from "react-icons/hi";

import "./ButtonOutline.css";

export class ButtonOutline extends Component {
  render() {
    return (
      <div
        className={`btn-outline-${this.props.theme ?? ""} ${
          this.props.bold ? "f-bold" : ""
        }`}
        style={{
          maxWidth: this.props.fullWidth
            ? "100%"
            : `${10 + this.props.width ?? 0}rem`,
        }}
      >
        <div className="btn-outline">
          <div className="btn-content flex">
            <div>
              <Link to={this.props.to}>{this.props.title}</Link>
            </div>
            <div>
              <HiArrowNarrowRight />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonOutline;
