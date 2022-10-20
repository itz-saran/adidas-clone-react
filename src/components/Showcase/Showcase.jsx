import React, { Component } from "react";
import Collage from "../Collage/Collage";

import "./Showcase.css";

export class Showcase extends Component {
  render() {
    return (
      <div className="showcase">
        <Collage current={this.props.current} />
      </div>
    );
  }
}

export default Showcase;
