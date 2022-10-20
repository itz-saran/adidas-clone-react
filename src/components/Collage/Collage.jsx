import React, { Component } from "react";
import Breadcrumb from "../BreadCrumb/Breadcrumb";
import ProductImage from "../ProductImage/ProductImage";

export class Collage extends Component {
  render() {
    return (
      <div>
        <div className="collage grid">
          {this.props.current.images?.showcase.map((image, idx) => (
            <ProductImage key={idx} image={image} />
          ))}
          <Breadcrumb breadcrumb={this.props.breadcrumb} />
        </div>
      </div>
    );
  }
}

export default Collage;
