import React, { useRef, useState, useEffect, Suspense } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "./Button";
import videos from "../data/stories.json";

function StudentStoryFeature() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();
  const videoRefs = useRef([]);
  const closeButtonRef = useRef(null);
  const triggerButtonRef = useRef(null); // Ref for the button that triggered the modal
  // Get the index of the first featured video
  const initialIndex = videos.findIndex((video) => video.feature);
  // Initialize state with the index of the first featured video or 0 if none are featured
  const [currentVideo, setCurrentVideo] = useState(
    initialIndex !== -1 ? initialIndex : 0,
  );
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

    const videoElement = videoRefs.current[currentVideo];
    if (videoElement) {
      videoElement.muted = isFullscreen;
      if (!isFullscreen) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  };

  const handleProgramClick = (program) => {
    history.push(`/programs?search=${program}`);
  };

  const handleVideoTitleClick = (index) => {
    if (index !== currentVideo) {
      if (videoRefs.current[currentVideo]) {
        videoRefs.current[currentVideo].muted = true;
        videoRefs.current[currentVideo].pause();
      }
      setCurrentVideo(index);
    }
  };

  useEffect(() => {
    // Reset to the first featured video whenever the videos array updates
    const newInitialIndex = videos.findIndex((video) => video.feature);
    setCurrentVideo(newInitialIndex !== -1 ? newInitialIndex : 0);
  }, [videos]);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    setIsFullscreen((prevFullscreen) => !prevFullscreen);

    const videoElement = videoRefs.current[currentVideo];
    if (videoElement) {
      videoElement.muted = isFullscreen;
      if (!isFullscreen) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      // Save the element that triggered the modal
      triggerButtonRef.current = document.activeElement;
      if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      }

      // Log the currently focused element
      const logFocus = (event) => {
        console.log("Focused element:", event.target);
      };

      return () => {
        document.removeEventListener("focus", logFocus, true);
      };
    } else if (triggerButtonRef.current) {
      // Return focus to the element that triggered the modal
      triggerButtonRef.current.focus();
    }
  }, [isModalOpen]);

  // Handle trapping focus within the modal
  const handleKeyDown = (e) => {
    if (e.key === "Tab" && isModalOpen) {
      const focusableElements = [
        closeButtonRef.current,
        // Add more focusable elements in modal if present
      ].filter(Boolean);

      if (e.shiftKey && document.activeElement === firstElement) {
        // Shift + Tab on first element: move to last element
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        // Tab on last element: move to first element
        e.preventDefault();
      }
    }
  };

  return (
    <div
      className="pt-[64px] pb-[48px] lg:pt-[128px] lg:pb-[96px]"
      onKeyDown={handleKeyDown} // Listen for Tab key presses
    >
      <div className="relative lg:container lg:mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-[24px] lg:gap-[80px]">
          <div className="container mx-auto px-[24px] lg:px-0 w-full lg:w-[50%]">
            <h1 className="text-[48.8px] leading-[52px] lg:text-[64px] lg:leading-[64px] tracking-[-1.5px] font-[800] text-[#00467F] lg-[96px] mb-[16px] lg:mb-[24px] has-bar">
              <span className="relative">
                <motion.span />
                Transform{" "}
              </span>
              Your{" "}
              <span className="whitespace-nowrap">
                <span className="bar adjusted-e">Education</span>
                <span className="dot">.</span>
              </span>
            </h1>
            <p className="text-[18px] lg:text-[21px] lg:leading-[32px] leading-[28px] text-[#00467F]">
              At KCTCS, we understand that every student has unique needs and
              goals. That's why we offer flexible scheduling options, including
              online and hybrid courses, to accommodate your busy lifestyle.
              Plus, our affordable tuition rates make it possible for you to
              pursue your dreams without breaking the bank.
            </p>
            <div className="flex gap-[8px] mt-[32px]">
              {videos.map(
                (video, index) =>
                  video.feature && (
                    <div
                      key={index}
                      className="cursor-pointer w-full lg:max-w-[220px] lg:w-auto"
                      onClick={() => handleVideoTitleClick(index)}
                    >
                      <div
                        className={`flex flex-col transition ease-in-out duration-[200ms] gap-[8px] ${
                          currentVideo === index
                            ? "bg-[white] hover:bg-[white]"
                            : "shadow-[0]"
                        }`}
                      >
                        <div
                          className={`overflow-hidden aspect-video w-full bg-[#f5f5f5] ${
                            currentVideo === index
                              ? "border-[#FBBF24] border-[6px]"
                              : "shadow-[0] border-[0]"
                          }`}
                        >
                          {" "}
                          <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            id={`video-${index}`}
                            className="object-cover w-full h-full object-center"
                            muted={true}
                            controls={isFullscreen}
                          >
                            {" "}
                            <source src={video.src} type="video/mp4" />
                          </video>
                        </div>
                        <div className="text-[#00467F] text-[20px] font-[600] pb-[16px]">
                          {video.firstname}
                        </div>
                      </div>
                    </div>
                  ),
              )}
            </div>
          </div>

          {/* Video Content */}
          <div className="w-full lg:w-[50%]">
            <div
              key={videos[currentVideo].id}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {isFullscreen && (
                <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-[999] bg-[rgba(0,0,0,0.5)]"></div>
              )}
              <Suspense fallback={<div>Loading...</div>}>
                <div
                  className={`${
                    isFullscreen
                      ? "m-[24px] fixed w-[calc(100%-48px)] top-0 flex flex-col h-full items-center justify-center left-0 z-[1000]"
                      : "relative"
                  }`}
                >
                  <div className="container mx-auto">
                    {isFullscreen && (
                      <div className="flex justify-end w-full mb-[16px] top-0 right-0">
                        <button
                          className="flex items-center gap-[8px] cursor-pointer group"
                          onClick={toggleModal}
                          ref={closeButtonRef}
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              toggleModal();
                            }
                          }}
                          aria-label="Close fullscreen video"
                        >
                          <span className="p-[8px] group-hover:scale-[1.15] lg:p-[8px] transform rotate-45 inline-block transition-ease-in-out hover:opacity-100                         duration-[200ms] group-hover:opacity-100 text-white rounded-full bg-[#FBBF24]">
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
                        ref={(el) => (videoRefs.current[currentVideo] = el)}
                        id={`video-${currentVideo}`}
                        className="object-cover w-full h-full object-center"
                        muted={false}
                        controls={false}
                      >
                        <source
                          src={videos[currentVideo].src}
                          type="video/mp4"
                        />
                        {isFullscreen && (
                          <track
                            src={videos[currentVideo].subtitles}
                            kind="subtitles"
                            srcLang="en"
                            label="English"
                            default
                          />
                        )}
                      </video>
                      {!isFullscreen && (
                        <div
                          className="cursor-pointer group absolute w-full h-full flex items-center justify-center top-0 left-0 z-[2]"
                          onClick={toggleFullscreen}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              toggleFullscreen();
                            }
                          }}
                          aria-label="Open fullscreen video"
                        >
                          <div className="group absolute w-[400px] h-[400px] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[-1]">
                            <button className="p-[12px] absolute top-[50%] transition-ease-in-out duration-[200ms] left-[50%]  group-hover:scale-[1.125] z-[-1] transform translate-x-[-50%] translate-y-[-50%]  bg-[#E7A614] text-white rounded-full">
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
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center mt-[40px] lg:mt-[64px]">
                  <a
                    href="/success-stories.aspx"
                    role="button"
                    aria-label="Watch All Stories"
                    tabIndex="0"
                    className="cursor-pointer inline-block rounded-full bg-[#00467F] font-[600] border text-center whitespace-nowrap transition ease-in-out duration-[250ms]      bg-[#00467F] border-[#00467F] text-[white] hover:bg-[white] hover:text-[#00467F] text-[500] hover:border-[#00467F]    py-[16px] px-[32px] text-[16px] lg:py-[14px] lg:px-[40px] lg:text-[17.5px] "
                  >
                    See All Stories
                  </a>
                </div>
              </Suspense>
            </div>
          </div>
        </div>
        <div className="w-full hidden flex justify-center mt-[32px] lg:mt-[48px]">
          <Button
            label="Watch All Stories"
            href="/success-stories.aspx"
            type="primary"
          />
        </div>
      </div>
    </div>
  );
}

export default StudentStoryFeature;
