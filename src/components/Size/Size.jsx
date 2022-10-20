import React, { Component, createRef } from "react";

import "./Size.css";

export class Size extends Component {
  constructor(props) {
    super(props);
    this.selectCurrentSize = this.selectCurrentSize.bind(this);
    this.displayState = this.displayState.bind(this);
    this.refList = createRef([]);
    this.refList.current = [];
    this.state = { selectedSize: null };
  }

  componentDidMount() {}

  selectCurrentSize(e) {
    this.setState({ selectedSize: e.target });
    this.refList.current?.forEach((btn) => btn.classList.remove("selected"));
    e.target.classList.add("selected");
    this.displayState();
  }

  displayState() {
    console.log(this.state);
  }

  render() {
    // const { qty } = this.state.selectedSize;
    return (
      <div className="size-selector">
        <h4 className="f-bold">Sizes</h4>
        <div className="sizes grid">
          {this.props.sizes?.map(({ size, qty }, idx) => (
            <button
              onClick={this.selectCurrentSize}
              key={idx}
              className="size flex-center"
              ref={(element) => (this.refList.current[idx] = element)}
            >
              {size}
            </button>
          ))}
        </div>
        {/* {qty > 1 && qty < 10 ? <span className="red">Low in stock</span> : ""} */}
      </div>
    );
  }
}

export default Size;
