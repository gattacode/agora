import "./Searchbar.sass";
import { useState } from "react";
import searchbutton from "../assets/search.png";

const Searchbar = () => {
    const [userInput, setUserInput] = useState('');

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    return (
    <>
      <form method="get" action="/search" accept-charset="UTF-8" className="Searchbar">
        <input type="text" placeholder="Search..." autoComplete="off" name="query" value={userInput} onChange={handleInputChange}/>
        <button type="submit">
        <img src={searchbutton} alt="search button" className="logo search-button"/>
        </button>
      </form>
    </>
  );
};

export default Searchbar;
