import { useState, useEffect, useRef } from "react";
import stories from "../data/stories.json";
import { motion } from "framer-motion";
import Button from "./Button";
// Import the image file

const Testimonial = () => {
  const textRef = useRef(null);
  const [isTextInView, setIsTextInView] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Measure the width of the text span

            setIsTextInView(true); // Set to true when text span is in view
          } else {
            // Reset the width of the bar when leaving view

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
    <div className="relative pt-[64px] lg:pt-[80px] pb-[56px] min-h-[66vh] lg:pb-[80px] overflow-hidden bg-[#FBBF24]">
      <div className="container mx-auto relative z-[999]">
        <h1 className="text-[48px] hidden font-[800] text-[white] mb-[32px] text-center">
          What Students are Saying.
        </h1>
      </div>
      <div className="absolute w-full h-full top-0 left-0 -z-0 background-cover">
        <img
          className="absolute w-full h-full top-0 left-0 -z-0 object-cover"
          src="/assets/header.jpeg"
        />
      </div>
      <motion.div
        ref={textRef}
        initial={{ opacity: 0 }} // Set initial opacity to 0
        animate={{
          opacity: isTextInView ? 1 : 0,
          y: isTextInView ? 0 : 40,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        className="pt-[56px] pb-[56px] w-[calc(100%-48px)] lg:pt-[64px] lg:pb-[64px] relative z-[1] px-[48px] lg:px-[64px]  mx-[24px] lg:mx-[auto] bg-[#005CB8] mb-[0] container overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]"
      >
        <div className="container mx-auto relative z-20">
          <div className="flex flex-col gap-[32px]">
            <div className="flex lg:flex-row gap-[24px] items-end lg:gap-[40px]">
              <div className="h-[56px] w-[56px] lg:min-h-[64px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="56px"
                  viewBox="0 0 80 67"
                  fill="none"
                >
                  <path
                    d="M7.48438 63.7228L7.49665 63.7337L7.5096 63.7438C9.88807 65.5937 12.9069 66.5 16.5266 66.5C18.8755 66.5 20.9826 65.9772 22.8339 64.9193L22.8558 64.9068L22.8764 64.8921C24.6984 63.5906 26.1376 62.023 27.1856 60.1889C28.2383 58.3467 28.7663 56.3678 28.7663 54.2603C28.7663 51.9209 28.2474 49.9296 27.1771 48.3169C26.1253 46.4828 24.6731 45.1542 22.825 44.3515C21.2411 43.3055 19.5169 42.7781 17.6627 42.7781C15.6168 42.7781 13.9877 43.1552 12.8545 43.9874C11.8388 44.5086 10.9791 45.4607 10.2527 46.7774L10.1337 46.7179C8.96848 42.3476 9.229 37.7265 10.9394 32.8397L10.9394 32.8398L10.9418 32.8327C12.6857 27.6008 15.5525 22.7362 19.5506 18.2381C23.7964 13.493 28.5286 10.1353 33.746 8.14771L34.5447 7.84347L33.8881 7.29635L27.0716 1.61589L26.8104 1.39829L26.5121 1.56105C20.9038 4.62011 16.0583 8.5728 11.9785 13.4176L11.9768 13.4196C8.15288 18.0083 5.22049 23.1081 3.18099 28.7167L3.18082 28.7166L3.17655 28.7294C1.3924 34.0819 0.5 39.5633 0.5 45.1716C0.5 49.2512 1.00978 52.8412 2.04045 55.9333L2.04623 55.9506L2.05325 55.9674C3.34216 59.0608 5.1516 61.6492 7.48438 63.7228ZM51.0347 63.7228L51.0469 63.7337L51.0599 63.7438C53.4384 65.5937 56.4572 66.5 60.0769 66.5C62.4233 66.5 64.4195 65.978 66.0347 64.9012L66.0414 64.8967L66.048 64.8921C67.87 63.5906 69.3092 62.023 70.3572 60.1889C71.4099 58.3467 71.9379 56.3678 71.9379 54.2603C71.9379 51.9325 71.4241 49.9492 70.3645 48.3408C69.5605 46.4915 68.2246 45.1555 66.3753 44.3515C64.7914 43.3055 63.0672 42.7781 61.213 42.7781C59.1433 42.7781 57.4102 43.1641 56.0489 43.9757C55.0244 44.4944 54.2672 45.4447 53.7414 46.7466L53.684 46.7179C52.5188 42.3476 52.7793 37.7265 54.4897 32.8397L54.4897 32.8398L54.4921 32.8327C56.2361 27.6006 59.103 22.7358 63.1015 18.2375L63.1016 18.2376L63.1102 18.2274C67.0969 13.4932 71.8223 10.1383 77.2892 8.15036L78.1066 7.85314L77.4384 7.29635L70.6218 1.61589L70.3607 1.39829L70.0623 1.56105C64.4541 4.62011 59.6086 8.5728 55.5288 13.4176L55.5271 13.4196C51.7032 18.0083 48.7708 23.1081 46.7313 28.7167L46.7311 28.7166L46.7268 28.7294C44.9427 34.0819 44.0503 39.5633 44.0503 45.1716C44.0503 49.2512 44.5601 52.8412 45.5907 55.9333L45.5965 55.9506L45.6035 55.9674C46.8924 59.0608 48.7019 61.6492 51.0347 63.7228Z"
                    fill="white"
                    stroke="white"
                  />
                </svg>
              </div>
              <div className="w-auto flex flex-col gap-[10px] flex-wrap">
                <div className="text-[25px] leading-[28px] lg:text-[31px] lg:leading-[36px] text-[#FBBF24] font-[600]">
                  {currentSlide.name}
                </div>
                <div className="text-[16px] leading-[16px] lg:text-[20px] font-[600] text-white whitespace-wrap">
                  {currentSlide.major}
                </div>
              </div>
            </div>

            <div>
              <motion.blockquote
                className="text-[25px] leading-[36px] lg:text-[39.01px] lg:leading-[52px] text-white font-[200]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {currentSlide.quote}
              </motion.blockquote>
            </div>
          </div>
        </div>
        <div className="flex hidden relative z-[2] transition ease-in-out duration-[250ms] items-center flex-wrap justify-center gap-[24px] pt-[32px]">
          {stories.map((story, index) => (
            <div
              key={index}
              className={` border-[6px] rounded-full ${
                slideIndex === index
                  ? "bg-white  border-[#FBBF24] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]"
                  : "border-[#005CB8]"
              }`}
            >
              <div
                className={`w-[64px] overflow-hidden  transition ease-in-out duration-250 h-[64px] rounded-full cursor-pointer`}
                onClick={() => setSlideIndex(index)}
              >
                <img
                  src={story.avatar}
                  className="w-full h-full object-cover"
                  alt="Avatar"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="container mx-auto px-[24px] bottom-[48px] lg:px-[0]">
        <div className="flex justify-end gap-[16px] mt-[24px] relative">
          <button
            onClick={handlePreviousSlide}
            className="bg-[#005CB8] text-white px-[12px] py-[8px] rounded-[4px] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 22"
              fill="none"
              className="w-[24px] h-[24px]"
            >
              <path
                d="M0.290794 11.41L10.2908 21.41L11.7108 19.99L3.41079 11.7L32.0008 11.7V9.7L3.41079 9.7L11.7008 1.41L10.2908 0L0.290794 10C0.104543 10.1874 2.30959e-08 10.4408 0 10.705C-2.30959e-08 10.9692 0.104543 11.2226 0.290794 11.41Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            onClick={handleNextSlide}
            className="bg-[#005CB8] text-white px-[12px] py-[8px] rounded-[full] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="#fff"
              className="w-[24px] h-[24px]"
            >
              <path d="m31.71 15.295-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
