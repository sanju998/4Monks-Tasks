import "./ShortsVideo.css";
import React from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { VideosData } from "../../utils/VideosData";

function ShortsVideo() {
  return (
    <div className="app">
      <div className="app_videos">
        {VideosData.map((item) => (
          <VideoPlayer
            id={item._id}
            video_src={item.video_src}
            profile_img={item.profile_img}
            user_name={item.user_name}
            likes={item.likes}
            n_of_comments={item.n_of_comments}
            discreption={item.discreption}
            sliderData={item.sliderData}
          />
        ))}
      </div>
    </div>
  );
}
export default ShortsVideo;
