import React, { useRef, useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import videosData from "../data/stories";
// Importing JSON data

function VideoGrid() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isMuted, setIsMuted] = useState(Array(videosData.length).fill(true));
  const [isFullscreen, setIsFullscreen] = useState(
    Array(videosData.length).fill(false),
  );
  const [isHovered, setIsHovered] = useState(
    Array(videosData.length).fill(false),
  );
  const history = useHistory();
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen((prevFullscreen) =>
        prevFullscreen.map((value, index) =>
          index === currentVideo ? !value : value,
        ),
      );
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [currentVideo]);

  const toggleFullscreen = (videoIndex) => {
    setIsFullscreen((prevFullscreen) =>
      prevFullscreen.map((value, index) =>
        index === videoIndex ? !value : value,
      ),
    );

    // Unmute and play the video when expanding
    if (!isFullscreen[videoIndex]) {
      const videoElement = document.getElementById(`video-${videoIndex}`);
      if (videoElement) {
        videoElement.muted = false;
        videoElement.play();
      }
    }
    // Pause the video when collapsing
    else {
      const videoElement = document.getElementById(`video-${videoIndex}`);
      if (videoElement) {
        videoElement.pause();
      }
    }
  };

  const handleProgramClick = (program) => {
    history.push(`/programs?search=${program}`);
    window.location.href = `/programs?search=${program}`;
  };

  const nextVideo = () => {
    setCurrentVideo((currentVideo + 1) % videosData.length);
  };

  const prevVideo = () => {
    setCurrentVideo((currentVideo - 1 + videosData.length) % videosData.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Fade up effect
      animate={{ opacity: 1, y: 0 }} // Fade up effect
      transition={{ duration: 0.25 }}
      className="pt-[80px] pb-[0px] lg:pt-[96px] lg:pb-[80px] transition-all ease-in-out duration-300"
    >
      <div className="container relative px-[24px] lg:px-0 mx-auto">
        {/* Video Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px] gap-y-[48px] pb-[48px] ">
          {videosData.map((video, index) => (
            <div key={video.id}>
              <Suspense fallback={<div>Loading...</div>}>
                {isFullscreen[index] && (
                  <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-[999] bg-[rgba(0,0,0,0.5)]"></div>
                )}
                <div
                  onMouseEnter={() =>
                    setIsHovered((prev) =>
                      prev.map((value, i) => (i === index ? true : value)),
                    )
                  }
                  onMouseLeave={() =>
                    setIsHovered((prev) =>
                      prev.map((value, i) => (i === index ? false : value)),
                    )
                  }
                  className={`${
                    isFullscreen[index]
                      ? "m-[24px] fixed w-[calc(100%-48px)] top-0 flex flex-col h-full items-center justify-center left-0 z-[1000]"
                      : "relative"
                  }`}
                >
                  {!isFullscreen[index] && (
                    <div
                      className="absolute w-full h-full cursor-pointer"
                      onClick={() => toggleFullscreen(index)}
                    >
                      <div className="aspect-video absolute z-50 w-full z-[1] top-[50%] transform translate-y-[-50%]">
                        {/* Video Player */}

                        <div className="group absolute w-[400px] h-[400px] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[-1]">
                          <button className="p-[12px] absolute top-[50%] transition-ease-in-out duration-[200ms] left-[50%]  group-hover:scale-[1.125] z-[-1] transform translate-x-[-50%] translate-y-[-50%]  bg-[#E7A614] text-white rounded-full">
                            <svg
                              className="w-[24px] h-[24px] fill-white"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z"></path>
                              <path d="M0 0h24v24H0z" fill="none"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Video Player */}
                  <div className="container mx-auto">
                    {isFullscreen[index] && (
                      <div className="flex justify-end w-full mb-[16px] top-0 right-0">
                        <button
                          className="flex items-center gap-[8px] cursor-pointer group"
                          onClick={() => toggleFullscreen(index)}
                          ref={closeButtonRef}
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              toggleFullscreen(index);
                            }
                          }}
                          aria-label="Close fullscreen video"
                        >
                          <span className="p-[8px] group-hover:scale-[1.15] lg:p-[8px] transform rotate-45 inline-block transition-ease-in-out hover:opacity-100 duration-[200ms] group-hover:opacity-100 text-white rounded-full bg-[#FBBF24]">
                            <svg
                              className="lg:w-[18px] group-hover:scale-[1] lg:h-[18px] w-[16px] h-[16px] fill-white"
                              viewBox="0 0 33 34"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.7792 0.904053L16.0287 0.90529L16.0287 16.1254L0.808594 16.1254L0.808594 17.8746H16.0287L16.0299 33.0959L17.7804 33.0947V17.8746H33.0005L32.9992 16.1266L17.7798 16.1272L17.7792 0.904053Z"
                                fill="white"
                              ></path>
                            </svg>
                          </span>
                          <span className="hidden text-[11.7px] lg:text-[14px] transition-ease-in-out duration-[200ms] uppercase font-[600] tracking-[1px] text-[white]">
                            Close
                          </span>
                        </button>
                      </div>
                    )}
                    <div className="aspect-[16/9] w-full bg-[#f5f5f5] relative overflow-hidden ">
                      <video
                        id={`video-${index}`}
                        className="object-cover w-full h-full object-center"
                        muted={isMuted[index]}
                        controls={isFullscreen[index]}
                      >
                        <source src={video.src} type="video/mp4" />
                        {isFullscreen[index] && (
                          <track
                            src={video.subtitles}
                            kind="subtitles"
                            srcLang="en"
                            label="English"
                            default
                          />
                        )}
                      </video>
                    </div>
                  </div>
                </div>
              </Suspense>
              {!isFullscreen[index] && (
                <div className="text-[#00467F] mt-[16px]">
                  <div className="text-[24px] font-semibold mb-[4px] text-[#00467F]">
                    {video.firstname}
                  </div>
                  <div
                    className="text-[18px] hidden cursor-pointer border-b-[2px] text-[#00467F] mb-[4px] inline-block font-[400]"
                    onClick={() => handleProgramClick(video.program)}
                  >
                    {video.program}
                  </div>
                  <div className="text-[18px] font-[400]">{video.college}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default VideoGrid;
