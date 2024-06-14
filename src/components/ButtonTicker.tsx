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
    <div className="relative h-full w-full">
      <Marquee
        direction="up"
        speed={20}
        gradient={false}
        pauseOnHover={true}
        className="custom-marquee flex w-full gap-[32px]"
      >
        <div className="marquee-inner w-full flex flex-col gap-[32px]">
          {buttons.map((button, index) => (
            <div
              key={index}
              className={`marquee-item flex max-w-[125vw] lg:max-w-[999px] ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <Button
                type="primary-dark"
                depth="medium"
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
