import React, { useState } from "react";

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
    program: "Criminal Justice",
    src: "https://demo.kctcs.edu/ko/media/drew.mp4", // Replace with your video URLs
  },
];

function VideoSlider() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isMuted, setIsMuted] = useState(
    [...new Array(videos.length)].map(() => true),
  );

  const toggleMute = (videoIndex) => {
    const updatedMutedState = [...isMuted];
    updatedMutedState[videoIndex] = !updatedMutedState[videoIndex];
    setIsMuted(updatedMutedState);
  };

  const nextVideo = () => {
    setCurrentVideo((currentVideo + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((currentVideo - 1 + videos.length) % videos.length);
  };

  return (
    <div className="py-[64px] lg:py-[96px]">
      <div className="container relative overflow-hidden px-8 lg:px-0 mx-auto">
        <h1 className="text-6xl font-black text-blue-900 mt-[64px] lg-[96px] mb-[48px]">
          Student Success Stories
        </h1>

        <div className="relative aspect-video w-3/4">
          <div
            className="w-full h-full gap-5 flex absolute top-0"
            style={{
              transform: `translateX(-${
                currentVideo * (100 / videos.length)
              }%)`,
              transition: "transform 0.3s ease-in-out",
              display: "flex",
              width: `${videos.length * 100}%`,
            }}
          >
            {videos.map((video, index) => (
              <div
                key={video.id}
                style={{
                  width: `calc(100% / ${videos.length})`,
                  position: "relative",
                }}
              >
                <video
                  src={video.src}
                  className="w-full h-full cover"
                  autoPlay
                  muted={isMuted[index]}
                  loop
                />
                <div
                  className="absolute bottom-0 left-0 mb-5 ml-5 text-white transition ease-in-out duration-300ms"
                  style={{ opacity: index === currentVideo ? 1 : 0 }}
                >
                  <div className="text font-semibold">{video.title}</div>
                  <div className="text font-semibold">{video.program}</div>
                  <div className="text font-semibold">{video.college}</div>
                </div>
                <div className="absolute bottom-0 right-0 mb-5 mr-5 text-white">
                  <button
                    onClick={() => toggleMute(index)}
                    className="p-2 bg-white bg-opacity-50 text-white rounded-full"
                  >
                    {isMuted[index] ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <mask
                          id="mask0_1_46"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1_46)">
                          <path
                            d="M19.8 22.6L16.775 19.575C16.3583 19.8417 15.9167 20.0708 15.45 20.2625C14.9833 20.4542 14.5 20.6083 14 20.725V18.675C14.2333 18.5917 14.4625 18.5083 14.6875 18.425C14.9125 18.3417 15.125 18.2417 15.325 18.125L12 14.8V20L6.99999 15H2.99999V8.99999H6.19999L1.39999 4.19999L2.79999 2.79999L21.2 21.2L19.8 22.6ZM19.6 16.8L18.15 15.35C18.4333 14.8333 18.6458 14.2917 18.7875 13.725C18.9292 13.1583 19 12.575 19 11.975C19 10.4083 18.5417 9.00832 17.625 7.77499C16.7083 6.54165 15.5 5.70832 14 5.27499V3.22499C16.0667 3.69165 17.75 4.73749 19.05 6.36249C20.35 7.98749 21 9.85832 21 11.975C21 12.8583 20.8792 13.7083 20.6375 14.525C20.3958 15.3417 20.05 16.1 19.6 16.8ZM16.25 13.45L14 11.2V7.94999C14.7833 8.31666 15.3958 8.86665 15.8375 9.59999C16.2792 10.3333 16.5 11.1333 16.5 12C16.5 12.25 16.4792 12.4958 16.4375 12.7375C16.3958 12.9792 16.3333 13.2167 16.25 13.45ZM12 9.19999L9.39999 6.59999L12 3.99999V9.19999Z"
                            fill="black"
                          />
                        </g>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <mask
                          id="mask0_1_51"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1_51)">
                          <path
                            d="M14 20.725V18.675C15.5 18.2417 16.7083 17.4083 17.625 16.175C18.5417 14.9417 19 13.5417 19 11.975C19 10.4083 18.5417 9.00834 17.625 7.77501C16.7083 6.54167 15.5 5.70834 14 5.27501V3.22501C16.0667 3.69167 17.75 4.73751 19.05 6.36251C20.35 7.98751 21 9.85834 21 11.975C21 14.0917 20.35 15.9625 19.05 17.5875C17.75 19.2125 16.0667 20.2583 14 20.725ZM3 15V9.00001H7L12 4.00001V20L7 15H3ZM14 16V7.95001C14.7833 8.31667 15.3958 8.86667 15.8375 9.60001C16.2792 10.3333 16.5 11.1333 16.5 12C16.5 12.85 16.2792 13.6375 15.8375 14.3625C15.3958 15.0875 14.7833 15.6333 14 16Z"
                            fill="#1C1B1F"
                          />
                        </g>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-end">
          <div className="flex py-3 gap-1">
            <button
              className="text-black w-[48px] h-[48px]"
              onClick={prevVideo}
              disabled={currentVideo === 0}
              style={{ opacity: currentVideo === 0 ? 0.5 : 1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
              >
                <g clipPath="url(#clip0_287_5028)">
                  <path
                    d="M0.290002 17.1264L10.29 27.1264L11.71 25.7064L3.41 17.4164L32 17.4164L32 15.4164L3.41 15.4164L11.7 7.1264L10.29 5.7164L0.290002 15.7164C0.103751 15.9038 -0.000792498 16.1572 -0.000792521 16.4214C-0.000792544 16.6856 0.103751 16.939 0.290002 17.1264Z"
                    fill="#00467F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_287_5028">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(32 32.4214) rotate(-180)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button className="text-black w-[48px]" onClick={nextVideo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
              >
                <g clipPath="url(#clip0_287_5030)">
                  <path
                    d="M31.71 15.7164L21.71 5.71637L20.29 7.13637L28.59 15.4264H0V17.4264H28.59L20.3 25.7164L21.71 27.1264L31.71 17.1264C31.8963 16.939 32.0008 16.6856 32.0008 16.4214C32.0008 16.1572 31.8963 15.9037 31.71 15.7164Z"
                    fill="#00467F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_287_5030">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(0 0.421387)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoSlider;
