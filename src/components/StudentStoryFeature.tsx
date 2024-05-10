import React, { useRef, useState, useEffect, Suspense } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import ReactDOM from "react-dom"; // Import ReactDOM

const videos = [
  {
    id: 1,
    title: "Jae",
    college: "West Kentucky Community & Technical College",
    program: "Criminal Justice",
    src: "https://demo.kctcs.edu/ko/media/jae.mp4",
  },
  {
    id: 2,
    title: "Drew",
    college: "Your College Name",
    program: "Your Program Name",
    src: "https://demo.kctcs.edu/ko/media/drew.mp4",
  },
];

function StudentStoryFeature() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen((prevFullscreen) => !prevFullscreen);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    setIsFullscreen((prevFullscreen) => !prevFullscreen);

    // Unmute and play the video when expanding
    if (!isFullscreen) {
      const videoElement = document.getElementById(`video`);
      if (videoElement) {
        videoElement.muted = false;
        videoElement.play();
      }
    }
    // Pause the video when collapsing
    else {
      const videoElement = document.getElementById(`video`);
      if (videoElement) {
        videoElement.pause();
      }
    }
  };

  const handleProgramClick = (program) => {
    history.push(`/programs?search=${program}`);
    window.location.href = `/programs?search=${program}`;
  };

  const handleVideoTitleClick = (index) => {
    setCurrentVideo(index);
    setIsMuted(true); // Mute the video when changing the source
  };

  const [textWidth, setTextWidth] = useState(0);
  const textRef = useRef(null);

  const [isTextInView, setIsTextInView] = useState(false);

  // Your existing code...

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Measure the width of the text span
            const width = textRef.current.offsetWidth;
            setTextWidth(width);
            setIsTextInView(true); // Set to true when text span is in view
          } else {
            // Reset the width of the bar when leaving view
            setTextWidth(0);
            setIsTextInView(false); // Set to false when text span leaves view
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(textRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="pt-[64px] pb-[48px] lg:pt-[128px] lg:pb-[96px] transition-all ease-in-out duration-300">
      <div className="relative  lg:container lg:mx-auto ">
        <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[72px]">
          <div className="container mx-auto px-[24px] lg:px-0 w-full lg:w-[50%]">
            <motion.h1
              initial={{ opacity: 0 }} // Set initial opacity to 0
              animate={{
                opacity: isTextInView ? 1 : 0,

                transition: { duration: 0.95, ease: "easeInOut" },
              }} // Fade in when text span is in view
              className="text-[48.8px] leading-[52px] lg:text-[61.04px] lg:leading-[64px] font-[800] text-[#00467F] lg-[96px] mb-[16px] lg:mb-[24px]"
            >
              <span ref={textRef} id="text-span" className="relative">
                <motion.span
                  id="bar-span"
                  className="bar absolute bottom-0 z-[-1]"
                  animate={{
                    width: isTextInView ? "92%" : 0,
                    x: isTextInView ? 0 : -20,
                    opacity: isTextInView ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                />
                Transform{" "}
              </span>
              Your Education
              <span className="dot">.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }} // Set initial opacity to 0
              animate={{
                opacity: isTextInView ? 1 : 0,

                transition: { duration: 0.75, ease: "easeInOut" },
              }}
              className="text-[18px] lg:text-[21px] lg:leading-[32px] leading-[28px] text-[#00467F] "
            >
              At KCTCS, we understand that every student has unique needs and
              goals. That's why we offer flexible scheduling options, including
              online and hybrid courses, to accommodate your busy lifestyle.
              Plus, our affordable tuition rates make it possible for you to
              pursue your dreams without breaking the bank.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }} // Set initial opacity to 0
              animate={{
                opacity: isTextInView ? 1 : 0,

                transition: { duration: 0.75, ease: "easeInOut" },
              }}
              className="flex gap-[8px] mt-[32px]"
            >
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="cursor-pointer w-full max-w-[220px] lg:w-auto"
                  onClick={() => handleVideoTitleClick(index)}
                >
                  <div
                    className={`flex flex-col  transition ease-in-out duration-[200ms]  gap-[8px] ${currentVideo === index ? "bg-[white]  hover:bg-[white]  " : "shadow-[0] "}`}
                  >
                    <div
                      className={`overflow-hidden aspect-video w-full border-[6px] bg-[#f5f5f5] ${currentVideo === index ? "border-[#FBBF24] " : "shadow-[0] border-[transparent]"}`}
                    >
                      {" "}
                      <video
                        id={`video`}
                        src={video.src}
                        className="object-cover w-full h-full object-center"
                        muted={isMuted}
                        controls={isFullscreen}
                        autoPlay="autoplay"
                      />
                    </div>
                    <div className="text-[#00467F] text-[20px] font-[600] pb-[16px]">
                      {video.title}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Video Content */}
          <motion.div
            className={`w-full lg:w-[50%] relative`}
            initial={{ opacity: 0, scale: 0.5 }} // Initial state of the animation
            animate={{ opacity: 1, scale: 1 }} // Target state of the animation
            transition={{ duration: 0.75 }} // Duration of the animation
          >
            <div key={videos[currentVideo].id} className="">
              {isFullscreen && (
                <div className="fixed top-0 left-0 w-full h-full z-[999] bg-[rgba(0,0,0,0.5)]"></div>
              )}
              <Suspense fallback={<div>Loading...</div>}>
                <motion.div
                  className={` ${
                    isFullscreen
                      ? "m-[24px] fixed w-[calc(100%-48px)] h-auto lg:h-[calc(100%-24px)] top-0 left-0 z-[1000]"
                      : "relative "
                  }`}
                  initial={{ opacity: 0, scale: 1 }}
                  animate={
                    isFullscreen
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 1, scale: 1 }
                  }
                  transition={{ duration: 0.75 }}
                >
                  {isFullscreen && (
                    <div className="flex justify-end mb-[16px] lg:absolute top-0 right-0 lg:p-[24px]">
                      <div
                        className="flex items-center gap-[8px] cursor-pointer group"
                        onClick={toggleFullscreen}
                      >
                        <button className="p-[8px] group-hover:scale-[1.15] lg:p-[8px] transform rotate-45 inline-block transition-ease-in-out hover:opacity-100 duration-[200ms] group-hover:opacity-100 text-white rounded-full bg-[#FBBF24]">
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
                        </button>
                        <span className="text-[11.7px] lg:text-[14px]  transition-ease-in-out duration-[200ms]   uppercase font-[600] tracking-[1px] text-[white]">
                          Close
                        </span>
                      </div>
                    </div>
                  )}

                  <motion.div
                    initial={{ opacity: 0 }} // Set initial opacity to 0
                    animate={{
                      opacity: isTextInView ? 1 : 0,
                      y: isTextInView ? 0 : 40,
                      transition: { duration: 0.5, ease: "easeInOut" },
                    }}
                    className="aspect-w-16 aspect-h-9"
                  >
                    <video
                      id={`video`}
                      src={videos[currentVideo].src}
                      className="object-cover w-full h-full object-center"
                      muted={isMuted}
                      controls={isFullscreen}
                      autoPlay="autoplay"
                    />
                    {!isFullscreen && (
                      <>
                        <div
                          className="cursor-pointer group absolute w-full h-full top-0 left-0 z-[2]"
                          onClick={toggleFullscreen}
                        >
                          <div className="text-[#00467F] absolute flex w-full h-full items-center justify-center  p-[16px] z-[1]">
                            <div className="flex items-center gap-[8px] z-[2] group cursor-pointer">
                              <button className="p-[8px] lg:p-[12px] group-hover:scale-[1.095]  border-[white] transition-ease-in-out duration-[200ms] opacity-1 group-hover:opacity-100 bg-[] text-white rounded-full">
                                <svg
                                  className="w-[48px] group-hover:scale-[1] h-[48px] lg:w-[48px] mr-[4px] lg:h-[48px] fill-white"
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
                      </>
                    )}
                  </motion.div>
                </motion.div>

                {!isFullscreen && <></>}
              </Suspense>
            </div>
          </motion.div>
        </div>
        <div className="w-full flex justify-center mt-[32px] lg:mt-[64px]">
          <a
            className="rounded-full inline-block hover:bg-[white] hover:text-[#00467F] border-[1px] border-[#00467F] transition-ease-in-out duration-[250ms]  font-[600] py-[16px] px-[48px] text-[17.5px] bg-[#00467F] text-white"
            href="/success-stories"
          >
            Watch All Student Stories
          </a>
        </div>
      </div>
    </div>
  );
}

export default StudentStoryFeature;
