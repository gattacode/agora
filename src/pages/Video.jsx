import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import VideoPage from "../components/VideoPage";
import SideBar from "../components/SideBar";

const Video = () => {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <div className="content">
          <SideBar />
          <VideoPage />
        </div>
      </div>
    </>
  );
};

export default Video;
