import React, { useState, useEffect, Suspense } from "react";
import { useHistory, useLocation } from "react-router-dom";

function Hero({ title }) {
  const words = title.split(" ");

  // Extract unique credentials, program areas, and plan names

  return (
    <div className="bg-primary h-[400px] relative lg:h-[520px]">
      <div className="w-full h-full">
        <Suspense fallback={<div>Loading...</div>}>
          <video
            src="https://www.dropbox.com/s/sd90kljtxqp68dg/background-video.mp4?raw=1"
            className="object-cover w-full h-full"
            autoPlay
          ></video>
        </Suspense>
        <div className="absolute top-0 w-full h-full pb-[32px]">
          <div className="container px-[24px] lg:px-0 mx-auto h-full">
            <div className="flex h-full items-end  justify-end">
              <div className="w-full lg:w-1/2 flex flex-col">
                <h1 className="text-[64px] leading-[64px] xl:text-[76px] text-[white] font-black mb-[32px]">
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
