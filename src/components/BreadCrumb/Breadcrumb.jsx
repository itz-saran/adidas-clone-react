import React, { Component } from "react";
import { Link } from "react-router-dom";

import { AiOutlineRollback } from "react-icons/ai";

import "./Breadcrumb.css";

export class Breadcrumb extends Component {
  render() {
    return (
      <div className="breadcrumb f-regular flex-center">
        {this.props.breadcrumb?.map((path, idx) => {
          return (
            <div key={idx}>
              <Link
                to={path.name === "back" ? -1 : path.to}
                className={path.name === "back" ? "back-btn" : ""}
              >
                {path.name === "back" ? <AiOutlineRollback /> : ""}
                {path.name}
              </Link>
              {idx > 0 && idx < this.props.breadcrumb.length - 1 ? (
                <span>&nbsp;/&nbsp;</span>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Breadcrumb;
