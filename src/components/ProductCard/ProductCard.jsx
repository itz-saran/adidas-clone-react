import React, { Component, createRef } from "react";
import { Link } from "react-router-dom";
import { toINR } from "../../assets/helpers/helper";

import { FaRegHeart } from "react-icons/fa";

import "./ProductCard.css";

export class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.cardRef = createRef();
    this.priceRef = createRef();
  }

  // componentDidMount() {
  //   this.props.callback(this.cardRef);
  // }

  componentDidUpdate() {
    this.props.callback(this.cardRef);
  }

  render() {
    return (
      <>
        <div
          ref={this.cardRef}
          className="product-card card-wrapper f-light"
          onMouseEnter={
            () =>
              (this.priceRef.current.style.cssText =
                "transform:translateY(-10px)")
            // this.setState({ style: { transform: `translateY(-10px)` } })
          }
          onMouseLeave={() =>
            (this.priceRef.current.style.cssText = "transform:translateY(0px)")
          }
        >
          <Link to={`/product/${this.props.product.id}`}>
            <div className="card-img">
              <img src={`${this.props.product.src}`} alt="" />
              <span>
                <FaRegHeart />
              </span>
              <div className="price-detail flex-column" ref={this.priceRef}>
                {this.props.product.discount ? (
                  <div className="f-bold discount">{`-${this.props.product.discount}%`}</div>
                ) : (
                  ""
                )}
                <div className="flex flex-wrap">
                  <div
                    className={`price ${
                      this.props.product.discount ? "strike" : ""
                    }`}
                  >
                    {toINR(this.props.product.price)}
                  </div>
                  {this.props.product.discount ? (
                    <div className="price red">
                      {toINR(
                        this.props.product.price -
                          this.props.product.price *
                            (this.props.product.discount / 100)
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="product-description">
              <div>{this.props.product.name}</div>
              <div className="color-grey">{this.props.product.category}</div>
              {this.props.newItem ? <div>new</div> : ""}
            </div>
          </Link>
        </div>
      </>
    );
  }
}

export default ProductCard;
