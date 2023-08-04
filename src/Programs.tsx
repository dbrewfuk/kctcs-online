import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import programs from "./programs.json";

function Programs() {
   const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);
  const initialSearchQuery = searchParams.get("search") || "";
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedColleges, setSelectedColleges] = useState([]);

  const handleCollegeChange = (programIndex, collegeIndex) => {
    const updatedPrograms = programs.map((program, index) => {
      const isCurrentProgram = index === programIndex;

      return {
        ...program,
        selected: isCurrentProgram,
        colleges: program.colleges.map((college, cIndex) => ({
          ...college,
          selected: isCurrentProgram && cIndex === collegeIndex,
        })),
      };
    });

    const selectedProgram = updatedPrograms.find(
      (program) => program.selected === true
    );
    const selectedCollege = selectedProgram.colleges.find(
      (college) => college.selected === true
    );

    const updatedSelectedColleges = [...selectedColleges];
    updatedSelectedColleges[programIndex] = {
      name: selectedCollege?.name || "",
      url: selectedCollege?.url || "",
    };

    setSelectedColleges(updatedSelectedColleges);
  };

  const handleProgramCardClick = (programIndex) => {
    const updatedPrograms = programs.map((program, index) => ({
      ...program,
      selected: index === programIndex,
    }));

    const selectedProgram = updatedPrograms.find(
      (program) => program.selected === true
    );
    const selectedCollege = selectedProgram.colleges.find(
      (college) => college.selected === true
    );

    const updatedSelectedColleges = [...selectedColleges];
    updatedSelectedColleges[programIndex] = {
      name: selectedCollege?.name || "",
      url: selectedCollege?.url || "",
    };

    setSelectedColleges(updatedSelectedColleges);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/programs?search=${searchQuery}`);
  };

  const filteredPrograms = programs.filter((program) =>
    program.program.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div>

    <div className="ratio ratio-21x9 bg-primary">
    <img className="object-fit-cover" src="https://via.placeholder.com/1200x400" alt="Placeholder Image"/>
    </div>
    <div className="py-5">
    <div className="container">
    <h1 className="display-1">Explore Programs</h1>
    </div>
    </div>
      <div className="py-5">
      <div class="container">
       <form onSubmit={handleSubmit} className="mb-3">
            <input
              type="text"
              placeholder="Search programs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control"
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
          </div>
          </div>
          <div className="py-5">
        <div className="container">
        <div className="row row-gap-4">
          {programs
          .filter((program) =>
          program.program.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((program, index) => (
            <div className="col-3">
            <div className="border" key={index}>
              <div className="d-flex gap-4">
                <div className="p-3 w-100">
                  <h3 className="text-wrap text-break">{program.program}</h3>
                  <p>{program.description}</p>
                  <div className="btn-group d-flex flex-column gap-2">
                    <div>
                      <div className="dropdown w-100">
                        <button
                          type="button"
                          className="btn btn-secondary dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          rel="nofollow"
                          onClick={() => handleCollegeChange(index, 0)}
                        >
                          {selectedColleges[index]?.name || "Select College"}
                        </button>
                        <ul className="dropdown-menu">
                          {program.colleges.map((college, collegeIndex) => (
                            <li key={collegeIndex}>
                              <a
                                className="dropdown-item"
                                href="#"
                                rel="nofollow"
                                onClick={(e) => {


                                e.preventDefault();
                                  handleCollegeChange(index, collegeIndex);

                                  }
                                }
                              >
                                {college.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => {
                          window.location.href = selectedColleges[index]?.url;
                        }}
                        disabled={!selectedColleges[index]?.name}
                      >
                        {selectedColleges[index]?.name
                          ? `Visit ${selectedColleges[index]?.name}`
                          : "Select College"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Programs;

