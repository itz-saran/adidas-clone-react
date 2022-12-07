import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import "./VariantSelector.css";

const VariantSelector = (props) => {
  const { SKU } = useParams();
  const productData = useSelector((state) => state.product);
  return (
    <div className="variant-selector">
      <div className="available-colors f-bold">{`${productData.product.thumbnails?.length} colors available`}</div>
      <div className="thumbnail-container flex">
        {productData.product.thumbnails?.map((thumbnail, idx) => (
          <Link to={thumbnail.to} key={idx}>
            <div
              className={`thumbnail ${SKU === thumbnail.SKU ? "selected" : ""}`}
            >
              <img src={thumbnail.src} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VariantSelector;
