import CommentsCard from "./CommentsCard";
import { useState } from "react";
function VideoInfo({ videoData }) {
  //   console.log(videoData);

  const [videoInfo, setVideoInfo] = useState(videoData);
  const [isVisible, setIsVisible] = useState(false);

  function handleLikes() {
    let video = { ...videoInfo };
    video.upvotes = video.upvotes + 1;
    setVideoInfo(video);
  }

  function handleDisikes() {
    let video = { ...videoInfo };
    video.downvotes = video.downvotes + 1;
    setVideoInfo(video);
  }

  function handleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={videoData.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={videoData.title}
      />
      <h1> {videoData.title} </h1>
      <span>
        {" "}
        {videoData.views} views | Uploaded {videoData.createdAt}
      </span>
      <button onClick={handleLikes}> {videoData.upvotes} 👍</button>
      <button onClick={handleDisikes}> {videoData.downvotes} 👎</button>
      <button onClick={handleVisibility}>
        {" "}
        {isVisible ? "Hide Comments" : "Show Comments"}{" "}
      </button>
      <CommentsCard comments={videoData.comments} />
    </div>
  );
}

export default VideoInfo;
