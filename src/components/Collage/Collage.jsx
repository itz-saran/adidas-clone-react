import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import Breadcrumb from "../BreadCrumb/Breadcrumb";
import ProductImage from "../ProductImage/ProductImage";

import "./Collage.css";

const Collage = forwardRef((props, ref) => {
  const product = useSelector((state) => state.product);
  return (
    <div className="collage-wrapper" aria-expanded="false" ref={ref}>
      <div className="breadcrumb-wrapper">
        <Breadcrumb breadcrumb={product.product.breadcrumb} />
      </div>
      <div className="collage grid">
        {product.currentShowcase.images?.showcase.map((image, idx) => (
          <ProductImage key={idx} image={image} />
        ))}
      </div>
    </div>
  );
});

export default Collage;
