import Navbar from "../components/Navbar";
import {
  demoVideo,
  demoVideoLink,
  demoVideoTitle,
  demoChannelName,
  demoChannelLink,
  demoProfilePicture,
} from "../utils/demofile";
import "./VideoPage.sass";
import SideBar from "../components/SideBar";

const VideoPage = () => {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <div className="content">
          <SideBar />
          <div className="video-page-container">
            <div className="video-reader">
              {demoVideo}
              <div className="video-description">
                <a href={demoChannelLink}>
                  <img
                    src={demoProfilePicture}
                    alt="profile"
                    draggable="false"
                  ></img>
                </a>
                <div className="video-details">
                  <h2>{demoVideoTitle}</h2>
                  <a href={demoChannelLink}>{demoChannelName}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoPage;
