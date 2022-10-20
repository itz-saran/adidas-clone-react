import React, { Component, createRef } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NewsCard from "../NewsCard/NewsCard";

import ProductCard from "../ProductCard/ProductCard";

import "./Carousel.css";

export class carousel extends Component {
  constructor(props) {
    super(props);
    this.findWidth = this.findWidth.bind(this);
    this.cardListRef = createRef();
    this.cardWidth = null;
    this.moveCarousalRight = this.moveCarousalRight.bind(this);
    this.moveCarousalLeft = this.moveCarousalLeft.bind(this);
  }

  moveCarousalRight() {
    this.cardListRef.current.scrollBy(4 * this.cardWidth, 0);
  }

  moveCarousalLeft() {
    this.cardListRef.current.scrollBy(-(4 * this.cardWidth), 0);
  }

  findWidth(e) {
    this.cardWidth = e.current.offsetWidth;
  }

  render() {
    return (
      <>
        <div className={`carousel-wrapper ${this.props.lg ?? ""}`}>
          <div
            className="carousel-btn btn-left flex-center"
            onClick={this.moveCarousalLeft}
          >
            <FaArrowLeft />
          </div>
          <div className="card-list flex" ref={this.cardListRef}>
            {this.props.products
              ? this.props.products.map((product, i) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    callback={this.findWidth}
                    newItem
                  />
                ))
              : ""}
            {this.props.news
              ? this.props.news.map((news) => {
                  return <NewsCard key={news.id} newsItem={news} />;
                })
              : ""}
          </div>
          <div
            className="carousel-btn btn-right flex-center"
            onClick={this.moveCarousalRight}
          >
            <FaArrowRight />
          </div>
        </div>
      </>
    );
  }
}

export default carousel;
