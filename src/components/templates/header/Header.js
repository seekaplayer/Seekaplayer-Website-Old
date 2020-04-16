import React from "react";
import Logo from "../../images/Logo";
import NavItems from "./NavItems";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Logo />
      <ul>
        {NavItems.map((navItem) => {
          return (
            <li key={navItem.name}>
              <Link to={navItem.path}>{navItem.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default Header;
