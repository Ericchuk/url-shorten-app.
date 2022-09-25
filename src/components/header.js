import logo from "../url-shortening-api-master/images/logo.svg";
import hamburger from "../url-shortening-api-master/images/hamburger.png";
import DescriptionSection from "./descriptionSection";
import Nav from "./nav";
import { useState } from "react";



function Header() {
  const [open, setOpen] = useState(false);

  const openHamburger = () => {
    setOpen(!open);
  };

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
        {open ? <Nav open={open}/> : null}
      </header>
      <DescriptionSection />
    </>
  );
}

export default Header;
