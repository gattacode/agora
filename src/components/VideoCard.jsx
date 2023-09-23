import {
  demoThumbnail,
  demoVideoLink,
  demoVideoTitle,
  demoChannelName,
  demoChannelLink,
  demoProfilePicture,
} from "../utils/demofile";
import './VideoCard.sass'

const VideoCard = () => {
  return (
    <>
      <div className="thumbnail">
        <a href={demoVideoLink}>
          <img src={demoThumbnail} alt="thumbnail" />
        </a>
        <div className="video-description">
          <img src={demoProfilePicture} alt="profile"></img>
          <div className="video-details">
            <a href={demoVideoLink}>
              <h2>{demoVideoTitle}</h2>
              <span class="bulle-nom">{demoVideoTitle}</span>
            </a>
            <a href={demoChannelLink}>{demoChannelName}</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
