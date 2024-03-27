import React, { useState, useEffect } from "react";

const videos = [
  {
    id: 1,
    title: "Jae Freeman",
    college: "West Kentucky Community & Technical College",
    program: "Criminal Justice",
    src: "https://demo.kctcs.edu/ko/media/jae.mp4", // Replace with your video URLs
  },
  {
    id: 2,
    title: "Drew Mckinney",
    college: "Ashland Community & Technical College",
    program: "Associate in Arts",
    src: "https://demo.kctcs.edu/ko/media/drew.mp4", // Replace with your video URLs
  },
];

function VideoGrid() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isMuted, setIsMuted] = useState(
    [...new Array(videos.length)].map(() => true),
  );
  const [isFullscreen, setIsFullscreen] = useState(
    Array(videos.length).fill(false),
  );
  const [isHovered, setIsHovered] = useState(Array(videos.length).fill(false));

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen((prevFullscreen) =>
        prevFullscreen.map((_, index) =>
          index === currentVideo
            ? !prevFullscreen[index]
            : prevFullscreen[index],
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

  const nextVideo = () => {
    setCurrentVideo((currentVideo + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((currentVideo - 1 + videos.length) % videos.length);
  };

  return (
    <div className="py-[64px] lg:py-[96px] transition-all ease-in-out duration-300">
      <div className="container relative overflow-hidden px-8 lg:px-0 mx-auto">
        <h1 className="text-6xl font-black text-[#00467F] lg-[96px] mb-[48px]">
          Your Success Is Our Success
        </h1>

        {/* Video Content */}
        <div className="grid grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <div>
              <div
                key={video.id}
                onMouseEnter={() => handleMouseEnter(index)}
                className={`overflow-hidden ${
                  isFullscreen[index]
                    ? "m-[24px] fixed w-[calc(100%-48px)] h-[calc(100%-48px)] top-0 left-0 bg-white z-[1000]"
                    : "relative"
                }`}
              >
                {isFullscreen[index] && (
                  <button
                    onClick={() => toggleFullscreen(index)}
                    className="p-[12px] transform rotate-45 inline-block absolute transition-ease-in-out opacity-25 hover:opacity-100 duration-[200ms] group-hover:opacity-100 top-[16px] right-[16px]  text-white rounded-full"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 33 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.7792 0.904053L16.0287 0.90529L16.0287 16.1254L0.808594 16.1254L0.808594 17.8746H16.0287L16.0299 33.0959L17.7804 33.0947V17.8746H33.0005L32.9992 16.1266L17.7798 16.1272L17.7792 0.904053Z"
                        fill="white"
                      ></path>
                    </svg>
                  </button>
                )}
                {!isFullscreen[index] && (
                  <div className="absolute w-full h-full">
                    <div className="aspect-video absolute z-50 w-full top-[50%] transform translate-y-[-50%]">
                      {/* Video Player */}

                      <div className="group absolute w-[400px] h-[400px] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                        <button
                          onClick={() => toggleFullscreen(index)}
                          className="p-[12px] absolute top-[50%] transition-ease-in-out duration-[200ms] left-[50%] opacity-0 group-hover:opacity-100 transform translate-x-[-50%] translate-y-[-50%]  bg-[#E7A614] text-white rounded-full"
                        >
                          <svg
                            className="w-[32px] h-[32px] fill-white"
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
                <div className="aspect-w-16 aspect-h-9">
                  <video
                    id={`video-${index}`}
                    src={video.src}
                    className="object-cover w-full h-full object-center"
                    muted={isMuted[index]}
                    controls={isFullscreen[index]}
                  />
                </div>
              </div>
              {!isFullscreen[index] && (
                <div className="text-[#00467F] mt-[16px]">
                  <div className="text-[32px] font-semibold mb-[4px] text-[#00467F]">
                    {video.title}
                  </div>
                  <div className="text-[18px] border-b-[2px] text-[#00467F] mb-[4px] inline-block font-[600]">
                    {video.program}
                  </div>
                  <div className="text-[18px] font-[600]">{video.college}</div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-full flex justify-end">
          <div className="flex py-2 gap-2">
            <button
              className="text-black p-3 rounded-full bg-white"
              onClick={prevVideo}
              disabled={currentVideo === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 32 33"
                fill="none"
              >
                <path
                  d="M0.290002 17.1264L10.29 27.1264L11.71 25.7064L3.41 17.4164L32 17.4164L32 15.4164L3.41 15.4164L11.7 7.1264L10.29 5.7164L0.290002 15.7164C0.103751 15.9038 -0.000792498 16.1572 -0.000792521 16.4214C-0.000792544 16.6856 0.103751 16.939 0.290002 17.1264Z"
                  fill="#00467F"
                />
              </svg>
            </button>
            <button
              className="text-black p-3 rounded-full bg-white transform rotate-180"
              onClick={nextVideo}
              disabled={currentVideo === videos.length - 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 32 33"
                fill="none"
              >
                <path
                  d="M0.290002 17.1264L10.29 27.1264L11.71 25.7064L3.41 17.4164L32 17.4164L32 15.4164L3.41 15.4164L11.7 7.1264L10.29 5.7164L0.290002 15.7164C0.103751 15.903
                  8 -0.000792498 16.1572 -0.000792521 16.4214C-0.000792544 16.6856 0.103751 16.939 0.290002 17.1264Z"
                  fill="#00467F"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoGrid;
