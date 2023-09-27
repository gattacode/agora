import {
    demoVideo,
    demoVideoLink,
    demoVideoTitle,
    demoChannelName,
    demoChannelLink,
    demoProfilePicture,
  } from "../utils/demofile";
  import "./VideoPage.sass";
  
  const VideoPage = () => {
    return (
      <>
        <div className="video-reader">
          {demoVideo}
          <div className="video-description">
            <img src={demoProfilePicture} alt="profile" draggable="false"></img>
            <div className="video-details">
              <a href={demoVideoLink}>
                <h2>{demoVideoTitle}</h2>
              </a>
              <a href={demoChannelLink}>{demoChannelName}</a>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default VideoPage;
  