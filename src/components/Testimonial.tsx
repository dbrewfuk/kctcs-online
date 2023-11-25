import { useState } from "react";
import stories from "../stories.json";

const Testimonial = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePreviousSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? stories.length - 1 : prevIndex - 1,
    );
  };

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === stories.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentSlide = stories[slideIndex];

  return (
    <div className="py-[64px] lg:py-[96px] relative">
      <div className="absolute w-full h-full top-0 left-0 -z-0">
        <img
          className="object-cover w-full h-full"
          src="./assets/header.jpeg"
        />
      </div>
      <div className="absolute w-full h-full top-0 left-0 z-10 bg-blue-900 opacity-50"></div>
      <div className="container mx-auto px-8 relative z-20">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 96 97"
              fill="none"
            >
              <circle cx="48" cy="48.4214" r="48" fill="#FFD000" />
              <path
                d="M33.41 68.8469C31.3567 68.8469 29.5834 68.2873 28.0901 67.1681C26.7835 66.0489 25.7568 64.5566 25.0102 62.6913C24.4502 60.8259 24.1702 58.6808 24.1702 56.2558C24.1702 52.7117 24.7302 49.1675 25.8501 45.6234C27.1568 41.8927 29.0234 38.5351 31.45 35.5505C34.0633 32.3794 37.1433 29.8612 40.6899 27.9958L44.0498 30.5141C40.3165 32.0063 37.0499 34.5246 34.25 38.0687C31.45 41.6129 29.4901 45.3436 28.3701 49.2608C27.2501 53.178 27.3434 56.7222 28.6501 59.8933H29.2101C29.5834 58.774 30.1434 57.9346 30.89 57.375C31.6367 56.8154 32.6633 56.5356 33.97 56.5356C35.09 56.5356 36.1166 56.8154 37.0499 57.375C37.9833 57.9346 38.6366 58.6808 39.0099 59.6135C39.5699 60.5461 39.8499 61.5721 39.8499 62.6913C39.8499 63.8105 39.5699 64.8364 39.0099 65.7691C38.4499 66.7018 37.7033 67.4479 36.7699 68.0075C35.8366 68.5671 34.7166 68.8469 33.41 68.8469ZM60.8495 68.8469C58.7962 68.8469 57.0229 68.2873 55.5296 67.1681C54.223 66.0489 53.1963 64.5566 52.4497 62.6913C51.8897 60.8259 51.6097 58.6808 51.6097 56.2558C51.6097 52.7117 52.1697 49.1675 53.2896 45.6234C54.5963 41.8927 56.4629 38.5351 58.8895 35.5505C61.5028 32.3794 64.5828 29.8612 68.1294 27.9958L71.4893 30.5141C67.7561 32.0063 64.4894 34.5246 61.6895 38.0687C58.8895 41.6129 56.9296 45.3436 55.8096 49.2608C54.6896 53.178 54.7829 56.7222 56.0896 59.8933H56.6496C57.0229 58.774 57.5829 57.9346 58.3296 57.375C59.0762 56.8154 60.1029 56.5356 61.4095 56.5356C62.5295 56.5356 63.5561 56.8154 64.4894 57.375C65.4228 57.9346 66.0761 58.6808 66.4494 59.6135C67.0094 60.5461 67.2894 61.5721 67.2894 62.6913C67.2894 63.8105 67.0094 64.8364 66.4494 65.7691C65.8894 66.7018 65.1428 67.4479 64.2094 68.0075C63.2761 68.5671 62.1561 68.8469 60.8495 68.8469Z"
                fill="#00467F"
              />
            </svg>
          </div>

          <div>
            <blockquote className="text-4xl text-white font-semibold mt-5 mb-6 lg:mt-10">
              “Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.”
            </blockquote>
            <div className="text-xl font-semibold text-white">John Doe</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
