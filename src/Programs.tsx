import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import programs from "./programs.json";
import Testimonial from "./testimonial";
import HeaderInterior from "./header-interior";

type College = Partial<{
  name: string;
  url: string;
  tracks: string;
}>; 

function Programs() {
   const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);
  const initialSearchQuery = searchParams.get("search") || "";
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedColleges, setSelectedColleges] = useState<
  { name: string; url: string }[]
>([]);

  const handleCollegeChange = (programIndex: any, collegeIndex: any) => {
  const updatedSelectedColleges = [...selectedColleges];
  const selectedProgram = programs[programIndex];
  const selectedCollege = selectedProgram.colleges[collegeIndex];

  updatedSelectedColleges[programIndex] = {
    name: selectedCollege?.name || "",
    url: selectedCollege?.url || "",
  };

  setSelectedColleges(updatedSelectedColleges);
};

  const handleProgramCardClick = (programIndex: any) => {
    const updatedPrograms = programs.map((program, index) => ({
      ...program,
      selected: index === programIndex,
    }));

    const selectedProgram = updatedPrograms.find(
      (program) => program.selected === true
    );
    const selectedCollege = selectedProgram?.colleges.find(
      (college) => college.selected === true
    );

    const updatedSelectedColleges = [...selectedColleges];
    updatedSelectedColleges[programIndex] = {
      name: selectedCollege?.name || "",
      url: selectedCollege?.url || "",
    };

    setSelectedColleges(updatedSelectedColleges);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    history.push(`/programs?search=${searchQuery}`);
  };

const filteredPrograms = programs.filter((program) =>
  program.program.toLowerCase().includes(searchQuery.toLowerCase()) || program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
  (program.keywords && program.keywords.toLowerCase().includes(searchQuery.toLowerCase()))
);


  return (
    <div>


    <HeaderInterior/>
     <div className="pt-5 pb-5">
    <div className="container">
    <h1 className="display-1 mt-5">Explore Programs</h1>
    </div>
    </div>
    <div className="container-fluid px-3">
    <div className="ratio ratio-16x9 bg-primary">
    <img className="object-fit-cover" src="./assets/header.jpeg" alt="Placeholder Image"/>
    </div>
    </div>
   

      <div className="py-5">
      <div className="container">
      <p className="h1 mb-5">From <a
                      className="d-inline btn btn-outline-dark"
                      href={`/programs?search=agriculture`}
                    >agriculture</a> to <a
                      className="d-inline btn btn-outline-dark"
                      href={`/programs?search=health`}
                    >health science technology</a> to <a
                      className="d-inline btn btn-outline-dark"
                      href={`/programs?search=paralegal`}
                    >paralegal</a> , we offer more than 90 programs entirely online. Explore the options and start your journey to a better job and a better life!</p>
                    <form onSubmit={handleSubmit} className="mb-3">
       <div className="input-group input-group-lg">
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
            </div>
          </form>
      </div>
      </div>
       
          <div className="pb-5">
        <div className="container">
        <div className="row row-gap-4">
          {programs
          .filter((program) =>
  program.program.toLowerCase().includes(searchQuery.toLowerCase()) || program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
  (program.keywords && program.keywords.toLowerCase().includes(searchQuery.toLowerCase()))          )
          .map((program, index) => (
            <div className="col-3">
            <div className="border" key={index}>
              <div className="d-flex gap-4">
                <div className="p-3 w-100">
                  <h3 className="text-wrap text-break">{program.program}</h3>
                  <p>{program.description}</p>
                  <div className="btn-group d-flex flex-column gap-1">
                    <div>
                      <div className="dropdown w-100">
                        <button
                          type="button"
                          className="btn btn-secondary dropdown-toggle w-100"
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
                      <a
  type="button"
  className={`btn btn-secondary w-100 ${!selectedColleges[index]?.url ? 'disabled' : ''}`}
  href={selectedColleges[index]?.url || ''}
>
  Visit Website
</a>

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
      <Testimonial />
    </div>
  );
}

export default Programs;

