import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Button from "./Button";

function ButtonTicker() {
  const [buttons, setButtons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleApplyClick = (buttonText) => {
    const queryParams = new URLSearchParams();
    queryParams.append("search", buttonText);
    const queryString = queryParams.toString();
    window.location.href = `/explore-programs.html?${queryString}`;
  };

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://kctcs-online.vercel.app/api/programs-with-colleges",
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const plans = [...new Set(data.map((item) => item.plan))];
        setButtons(plans);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="relative h-full w-full pt-[24px] pb-[32px] flex flex-col gap-[12px]">
      <Marquee
        direction="left"
        speed={20}
        gradient={false}
        gradientColor="#0070D4"
        pauseOnHover={true}
        className="custom-marquee flex w-full gap-[12px]"
      >
        <div className="marquee-inner w-full flex  gap-[12px]">
          {buttons.map((button, index) => (
            <div
              key={index}
              className={`marquee-item flex opacity-[50%]  ${index % 2 === 0 ? "" : ""}`}
            >
              <Button
                type="primary"
                depth=""
                size="small"
                onClick={() => handleApplyClick(button)}
              >
                {button}
              </Button>
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee
        direction="right"
        speed={20}
        gradient={false}
        pauseOnHover={true}
        className="custom-marquee flex w-full gap-[12px]"
      >
        <div className="marquee-inner w-full flex  gap-[12px]">
          {buttons.map((button, index) => (
            <div
              key={index}
              className={`marquee-item flex opacity-[50%]  ${index % 2 === 0 ? "" : ""}`}
            >
              <Button
                type="primary"
                depth=""
                size="small"
                onClick={() => handleApplyClick(button)}
              >
                {button}
              </Button>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default ButtonTicker;
