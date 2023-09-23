import logo from "../assets/logo.png";
import upload from "../assets/upload.png";
import Searchbar from "./Searchbar";
import userpic from "../assets/defaultuserpic.png";
import search from "../assets/search.png";

import "./Navbar.sass";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="burger-logo menu">
          <img src={logo} alt="agora logo" className="logo"/>
        </div>
        <Searchbar className="logo"></Searchbar>
        <div className="post-profile menu">
          <img src={upload} alt="upload logo" className="logo upload"/>
          <img src={search} alt="search logo" className="logo search"/>
          <img src={userpic} alt="profile-pic logo" className="logo profile-pic"/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
