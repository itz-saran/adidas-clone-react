import React, { Component } from "react";

import { BiUser } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import SearchBar from "../SearchBar/SearchBar";

import "./HeaderMenuRight.css";

export class HeaderMenuRight extends Component {
  render() {
    return (
      <>
        <div className="menu-right flex">
          <SearchBar />
          <div className="flex icon-group">
            <div>
              <BiUser />
            </div>
            <div>
              <FaRegHeart />
            </div>
            <div>
              <BsBag />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HeaderMenuRight;
