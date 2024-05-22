import React, { useState, useEffect } from "react";

const ProgramResults = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://kctcs-online.vercel.app/api/programs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPrograms(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {programs.map((program, index) => (
        <div key={index}>
          <h3>{program.plan}</h3>
          <p>{program.description}</p>
          <p>{program.credential}</p>
          <p>{program.college}</p>
          <p>{program.area}</p>
          <p>{program.sector}</p>
        </div>
      ))}
    </div>
  );
};

export default ProgramResults;
