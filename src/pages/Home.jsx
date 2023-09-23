import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import "./Home.sass";

const Home = () => {
  return (
    <>
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
