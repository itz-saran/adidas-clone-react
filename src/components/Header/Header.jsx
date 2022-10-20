import React from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import HeaderMid from "../HeaderMid/HeaderMid";
import HeaderTop from "../HeaderTop/HeaderTop";

import "./Header.css";

const Header = () => {
  return (
    <>
      <section className="main-header">
        <HeaderTop />
        <HeaderMid />
        <HeaderMenu />
      </section>
    </>
  );
};

export default Header;
