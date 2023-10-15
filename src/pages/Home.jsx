import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import "./Home.sass";

const Home = () => {
  return (
    <>
      <div className="message">🚧 IMPORTANT: This project is currently under development and not yet ready for production use. </div>
      <div className="main-container">
        <Navbar />
        <div className="content">
          <SideBar />
          <Feed />
        </div>
      </div>
    </>
  );
};

export default Home;
