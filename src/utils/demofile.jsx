import thumbnail from '../assets/thumbnail.png'
import profilepic from '../assets/tedxpic.png'
import '../components/YoutubeEmbed.sass'

const videoId = 'Fxu8vsMi7Ws'
export const demoVideo = <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>;
export const demoThumbnail = thumbnail;
export const demoChannelLink = '/channel/TedX';
export const demoVideoLink = '/video/Dfl1mfo';
export const demoChannelName = 'Ted X';
export const demoVideoTitle = 'Changer son regard sur les hommes pour voir le monde autrement: Clair Michalon at TEDxParis';
export const demoProfilePicture = profilepic