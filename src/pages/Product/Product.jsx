import React, { Component } from "react";

import "../../components/Header/Header";
import Header from "../../components/Header/Header";
import { fetchUrl } from "../../assets/helpers/helper";

import "./Product.css";
import DetailsPanel from "../../components/DetailsPanel/DetailsPanel";
import Showcase from "../../components/Showcase/Showcase";
import NewsLetter from "../../components/SignUpAd/NewsLetter";
import Footer from "../../components/Footer/Footer";

export class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { product: {}, currentShowcase: {} };
    this.getRef = this.getRef.bind(this);
  }

  getRef(refVal, refName) {
    this[refName] = refVal;
  }

  componentDidMount() {
    fetchUrl("forum-low-shoes", "GET").then((res) => {
      this.setState({
        ...this.state,
        product: res,
        currentShowcase: res.variants[0],
      });
      // console.log(this.state);
    });
  }

  render() {
    return (
      <>
        <Header />
        <main className="main-content flex">
          <Showcase
            breadcrumb={this.state.product.breadcrumb}
            current={this.state.currentShowcase}
          />
          <DetailsPanel
            product={this.state.product}
            current={this.state.currentShowcase}
          />
        </main>
        <NewsLetter />
        <Footer />
      </>
    );
  }
}

export default Product;
