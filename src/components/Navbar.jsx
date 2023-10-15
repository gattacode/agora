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
        <a href='..' className="burger-logo menu">
          <img src={logo} alt="agora logo" className="logo" draggable="false"/>
        </a>
        <Searchbar className="logo"></Searchbar>
        <div className="post-profile menu">
        <a href='/upload'><img src={upload} alt="upload logo" className="logo upload" draggable="false"/></a>
          <img src={search} alt="search logo" className="logo search" draggable="false"/>
        <a href='/myaccount'><img src={userpic} alt="profile-pic logo" className="logo profile-pic" draggable="false"/></a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
