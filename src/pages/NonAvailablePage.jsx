import Navbar from "../components/Navbar";
import "./NonAvailablePage.sass";
import SideBar from "../components/SideBar";

const NonAvailablePage = () => {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <div className="content">
          <SideBar />
          <div className="subs-page-container">
            This page is not available for non-registered users :(
                <a href="/" ><strong>Go back</strong></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NonAvailablePage;
