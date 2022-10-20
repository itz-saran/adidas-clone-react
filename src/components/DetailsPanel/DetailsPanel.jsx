import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BiRuler, BiBox } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { GrAlert } from "react-icons/gr";

import { toINR } from "../../assets/helpers/helper";
import Size from "../Size/Size";
import ButtonOutline from "../ButtonOutline/ButtonOutline";

import "./DetailsPanel.css";

export class DetailsPanel extends Component {
  render() {
    const { category, review, price } = this.props.product;
    return (
      <div className="details-panel f-regular">
        <div className="pre-header flex">
          <div className="product-category">
            {category ? category.join(" • ") : ""}
          </div>
          <div className="rating">{review ? review.count : ""}</div>
        </div>
        <div className="product-title f-italic title-xl">FORUM LOW SHOES</div>
        <div className="product-info">
          <div className="price-info">
            MRP in Indian currency: <br />
            <span className="f-bold price">{toINR(price ?? "")}</span> per pair{" "}
            <br />
            (Inclusive of all taxes)
          </div>
          <div className="product-color">{this.props.current.color}</div>
        </div>
        <Size sizes={this.props.current.sizes} />
        <Link to="/size-guide">
          <span className="size-guide">
            <BiRuler /> Size guide
          </span>
        </Link>
        <div className="add-to-bag flex">
          <ButtonOutline
            bold
            theme="black"
            fullWidth
            title="ADD TO BAG"
            to="/cart"
          />
          <div className="wishlist-btn flex-center">
            <Link>
              <FaRegHeart />
            </Link>
          </div>
        </div>
        <div className="selling-points">
          <div className="flex">
            <GrAlert /> <Link>FREE SHIPPING FOR ALL ORDERS</Link>
          </div>
          <div className="flex">
            <BiBox /> <Link>FREE RETURNS</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailsPanel;
