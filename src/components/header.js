import logo from "../url-shortening-api-master/images/logo.svg";
import hamburger from "../url-shortening-api-master/images/hamburger.png";
import Nav from "./nav";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  const openHamburger = () => {
    setOpen(!open);
  };

  const list = ["Features", "Pricing", "Resources"];
  // loop through items in list to create an ordered list
  const ListItems = list.map((item) => <li key={item}>{item}</li>);
  // second list items after the horizontal line
  const list2 = ["Login", "Sign Up"];
  // loop through eash items in list 2
  const ListItems2 = list2.map((item) => <button key={item}>{item}</button>);

  return (
    <>
      <header>
        <img src={logo} alt="logo" className="logo" />
        <img
          src={hamburger}
          alt="hamburger"
          className="hamburger"
          onClick={openHamburger}
        />
        {open ? <Nav open={open} /> : null}
        
        <ul className="desktopNav">
          <ul>{ListItems}</ul>
          <ol>{ListItems2}</ol>
        </ul>
      </header>
    </>
  );
}

export default Header;
