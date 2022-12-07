import React, { forwardRef, useRef, useState } from "react";
import Collage from "../Collage/Collage";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import "./Showcase.css";
import VariantSelector from "../VariantSelector/VariantSelector";
import Highlights from "../Highlights/Highlights";
import Description from "../Description/Description";
import Details from "../Details/Details";
import Recommended from "../Recommended/Recommended";
import FeaturedPosts from "../FeaturedPosts/FeaturedPosts";
import Reviews from "../Reviews/Reviews";

const Showcase = forwardRef((props, ref) => {
  const collageRef = useRef();
  const [state, setState] = useState({ isExpanded: false });

  const expand = () => {
    const isExpanded = collageRef.current.getAttribute("aria-expanded");
    if (isExpanded === "false") {
      collageRef.current.setAttribute("aria-expanded", true);
      setState({ isExpanded: true });
    } else {
      collageRef.current.setAttribute("aria-expanded", false);
      setState({ isExpanded: false });
    }
  };

  return (
    <div className="showcase" ref={ref}>
      <Collage ref={collageRef} />
      <div className="expand-btn flex-center">
        <button className="btn f-bold" onClick={expand}>
          {state.isExpanded ? (
            <>
              SHOW LESS <RiArrowUpSLine />
            </>
          ) : (
            <>
              SHOW MORE <RiArrowDownSLine />
            </>
          )}
        </button>
      </div>
      <VariantSelector />
      <div className="accordion-container">
        <Highlights />
        <Description />
        <Details />
      </div>
      <Recommended title={"YOU MAY ALSO LIKE"} />
      <div className="accordion-container">
        <FeaturedPosts />
        <Reviews />
      </div>
      <Recommended title={"OTHERS ALSO BOUGHT"} />
      <Recommended title={"RECENTLY VIEWED ITEMS"} />
    </div>
  );
});

export default Showcase;
