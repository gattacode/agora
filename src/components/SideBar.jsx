import house from "../assets/house.png";
import dice from "../assets/dice.png";
import group from "../assets/group.png";
import history from "../assets/history.png";
import sun from "../assets/sun.png";
import "./SideBar.sass";

const SideBar = () => {
  return (
    <>
      <div className="page-menu">
        <div className="choice-menu">
          <a href="/">
            <img src={house} alt="house logo" className="house" draggable="false"/>
          </a>
          <a href="/explore">
            <img src={dice} alt="dice logo" className="dice" draggable="false"/>
          </a>
          <a href="/subscriptions">
            <img src={group} alt="group logo" className="sublogo" draggable="false"/>
          </a>
          <a href="/history">
            <img src={history} alt="history logo" className="history-logo" draggable="false"/>
          </a>
        </div>
        <img src={sun} alt="history logo" draggable="false"/>
      </div>
    </>
  );
};

export default SideBar;
