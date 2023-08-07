import { useState } from "react";
import stories from "./stories.json";

const Testimonial = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handlePreviousSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? stories.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === stories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentSlide = stories[slideIndex];

  return (
    <div>
      <div className="py-5 bg-black text-white">
        <div className="container">
          <div className="d-flex flex-column gap-5 align-items-center">
            <div className="row w-100 gap-4">
              <div className="col-8">
                <h1 className="display-3">{currentSlide.quote}</h1>
              </div>
              <div className="col">
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex gap-3">
                    <div onClick={handlePreviousSlide}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="currentColor"
                        className="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        />
                      </svg>
                    </div>
                    <div onClick={handleNextSlide}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </div>
                  </div>
                  <img
                    src={currentSlide.avatar}
                    className="rounded-circle"
                    alt="Avatar"
                    style={{ width: "80px" }}
                  />
                  <p className="fs-4 lh-base">
                    {currentSlide.name}, <span className="d-inline-block mx-1">
                    <a
                      className="d-inline btn btn-outline-light"
                      href={`/programs?search=${currentSlide.career}`}
                    >
                      {currentSlide.career}
                    </a> 
                    </span>
                    <br />
                    <span className="d-inline-block me-1">
                    <a
                      className="d-inline btn btn-outline-light"
                      href={`/programs?search=${currentSlide.major}`}
                    >
                      {currentSlide.major}
                    </a> 
                    </span>
                    , {currentSlide.college}, {currentSlide.year}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <a className="btn btn-light" href="./student-stories">Read More Stories</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
