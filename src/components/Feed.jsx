import VideoCard from './VideoCard';
import './Feed.sass'


const Feed = () => {
    return (
      <>
      <div className='video-grid'>
        <VideoCard/><VideoCard/><VideoCard/><VideoCard/><VideoCard/><VideoCard/><VideoCard/><VideoCard/>
        <VideoCard/><VideoCard/><VideoCard/><VideoCard/><VideoCard/><VideoCard/><VideoCard/><VideoCard/>
      </div>
      </>
    );
  };
  
  export default Feed;