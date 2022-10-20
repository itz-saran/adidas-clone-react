import React, { Component } from "react";

import "./ProductImage.css";

export class ProductImage extends Component {
  render() {
    return (
      <div className="product-image">
        <img
          src={this.props.image.src}
          sizes="(max-width: 320px) 320px, (max-width: 420px) 420px, (max-width: 600px) 600px, (max-width: 640px) 640px, (max-width: 840px) 840px"
          srcSet={`${this.props.image.w320}, ${this.props.image.w420}, ${this.props.image.w600}, ${this.props.image.w640}, ${this.props.image.w840}`}
          alt=""
        />
      </div>
    );
  }
}

export default ProductImage;
