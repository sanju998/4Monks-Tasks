import React, { useRef, useState } from "react";
import "./VideoPlayer.css";
import ThreedotIcon from "../../assets/Images/Threedot.svg";
import VolumeIcon from "../../assets/Images/VolumeIcon.svg";
import VolumeOffIcon from "../../assets/Images/VolumeOffIcon.svg";
import Heart from "../../assets/Images/Heart.svg";
import ColorHeart from "../../assets/Images/HeartFill.svg";
import Chat from "../../assets/Images/Chat.svg";
import Share from "../../assets/Images/Logout.svg";
import Cake from "../../assets/Images/Cake.jpg";
import Slider from "react-slick";

function VideoPlayer(props) {
  const videoRef = useRef();
  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [follow, setFollow] = useState(true);
  const [heartColor, setHeartColor] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoclick = () => {
    if (playing) {
      setPlaying(false);
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      setPlaying((play) => !play);

    }
  };

  window.setInterval(function () {
    setCurrentTime(videoRef.current?.currentTime);
    setProgress((videoRef.current?.currentTime / videoRef.current?.duration) * 100);
    setCurrentTime(Number(videoRef.current?.currentTime).toFixed(2));
  }, 100);


  // console.log(progress)
  // console.log(currentTime)
  return (
    <div className="video mt-4">
      <video
        id={props.id}
        className="video-player"
        loop
        ref={videoRef}
        src={props.video_src}
        autoPlay
        muted={isMuted}
      // onProgress={handleProgress}
      />
      <div
        onClick={handleVideoclick}
        className="video-container  text-white">
        <div className="contents">
          <div
            className="p-3 pt-5"
            style={{
              fontSize: "12px",

            }}
          >
            <div className="d-flex justify-content-between w-100">
              <div className="d-flex justify-content-between align-items-center">
                <div className="profile-div overflow-hidden">
                  <img src={props.profile_img} alt="" width="100%" />
                </div>
                <div className="mx-2">{props.user_name}</div>
                <button
                  className="py-2 px-3  rounded-pill"
                  onClick={() => setFollow(!follow)}
                >
                  {follow ? "Follow" : "Following"}
                </button>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <img style={{ cursor: "pointer" }} src={ThreedotIcon} alt="" />

                </div>
                <div className="ms-4" >
                  <img style={{ cursor: "pointer" }} src={isMuted ? VolumeOffIcon : VolumeIcon} onClick={() => setIsMuted(!isMuted)} alt="" />

                </div>
              </div>
            </div>
            <div className="mt-2">{props.discreption}</div>
          </div>
          <div className="w-100">
            <div className="w-100 p-3 d-flex justify-content-end text-center">
              <div>
                <div>
                  <div className="icon-div" onClick={() => setHeartColor(!heartColor)}>
                    <img src={heartColor ? Heart : ColorHeart} alt="" onClick={() => setHeartColor(!heartColor)} />
                  </div>
                  <div>{props.likes}</div>
                </div>
                <div className="my-3">
                  <div className="icon-div">
                    <img src={Chat} alt="" />
                  </div>
                  <div>{props.n_of_comments}</div>
                </div>
                <div>
                  <div className="icon-div">
                    <img src={Share} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100 ps-3">
              <Carousel sliderData={props.sliderData} />
            </div>
            <div className="mb-4 mt-3 px-3 d-flex justify-content-between align-items-center">
              <div className="progressbar">
                <div style={{ width: `${progress}%` }}></div>
              </div>
              <div
                className="ms-2 text-end"
                style={{ fontSize: "10px", whiteSpace: "pre", width: "60px" }}
              >
                {currentTime} {currentTime > 60 ?
                  "min" : "sec"}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;

// --------------------------Carousel---------------------------

function Carousel(props) {

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.4,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        {props.sliderData.map((item) => (

          <div className="slide-box d-flex ">
            <div>
              <img src={Cake} alt="" />
            </div>
            <div className="px-2 py-1 w-100">
              <div style={{ fontSize: "12px" }}>  {item.cake_name}</div>
              <div className="mt-1" style={{ fontSize: "10px" }}>
                {item.cake_weight}
              </div>
              <div className="d-flex justify-content-between w-100">
                <div className="mt-1" style={{ fontSize: "12px" }}>
                  <span>
                    <del>  {item.real_price}
                    </del>
                  </span>
                  <span
                    className="ms-3"
                    style={{ color: "var(--primary-color)" }}
                  >
                    {item.offer_price}

                  </span>
                </div>

                <div className="mt-1" style={{ fontSize: "12px" }}>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
        ))
        }
      </Slider>
    </>
  );
}
