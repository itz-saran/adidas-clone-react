import React from "react";
import { useSelector } from "react-redux";
import Accordion from "../Accordion/Accordion";

import "./Highlights.css";

const Highlights = (props) => {
  const productData = useSelector((state) => state.product);
  return (
    <Accordion title={"Highlights"} open>
      <div className="highlights grid-2">
        {productData.product.highlights?.map((highlight, idx) => (
          <div className="highlight" key={idx}>
            <img
              className="highlight-img"
              src={productData.currentShowcase.images?.highlights?.[idx]}
              alt=""
            />
            <h5 className="headline f-bold-pro">{highlight.title}</h5>
            <div className="highlight-content f-regular">
              {highlight.content}
            </div>
          </div>
        ))}
      </div>
    </Accordion>
  );
};

export default Highlights;
