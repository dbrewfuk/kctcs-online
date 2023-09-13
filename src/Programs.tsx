import { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import programs from "./programs.json";
import Testimonial from "./testimonial";
import Header from "./header";

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

  const dropdownMenus = document.querySelectorAll('.dropdown-menu');
  dropdownMenus.forEach((menu) => {
    menu.classList.remove('show');
  });


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
    <div className="text-secondary-navy">


    <Header/>
     <div className="pt-5 pb-4 bg-primary">
    <div className="container">
    <h1 className="display-1 mt-5  pt-2 mb-0 mt-0 text-white">Explore Programs</h1>
    </div>
    </div>
    <div className="container-fluid bg-primary px-3 pb-4">
   
    </div>
   

      <div id="results" className="py-5">
      <div className="container">
      <p className="h1 mb-5 text-info">From <a
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
            <button type="submit" className="btn btn-outline-info">
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
  (program.keywords && program.keywords.toLowerCase().includes(searchQuery.toLowerCase()))          ).sort((a, b) => a.program.localeCompare(b.program))
          .map((program, index) => (
            <div className="col-3">
            <div className="border rounded-3 hover-shadow h-100" key={index}>
              <div className="p-3 h-100">
                <div className="d-flex flex-column justify-content-between gap-1 h-100 w-100">
                <div>
                  <h3 className="text-wrap text-break">{program.program}</h3>
                  <p>{program.description}</p>
                  </div>
                  <div>
                  <div className="d-flex flex-column gap-1">
                    <div>
                      <div className="dropdown rounded-pill w-100">
                        {program.colleges.length > 0 ? (
 <button
  type="button"
  className={`btn btn-outline-dark dropdown-toggle w-100 ${selectedColleges[index] ? 'btn-dark text-white' : ''}`}
  data-bs-toggle="dropdown"
  aria-expanded="false"
  rel="nofollow"

>
  {selectedColleges[index]?.name || ""} 
  Available at <span className="fw-bold">{program.colleges.length}</span> Colleges
  
</button>


) : (
  <button
    type="button"
    className="btn btn-outline-dark w-100 mb-2"
    disabled
  >
    No Colleges Available
  </button>
)}
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
                    </div>

                    </div>
               
                 
                      {
  selectedColleges[index]?.url ? (
    <div class="d-flex flex-column gap-1">
    <a
      type="button"
      className="btn btn-primary rounded-pill w-100"
      href=""
    >
     Request Information
    </a>
     <a
      type="button"
      className="btn btn-outline-dark btn-text rounded-pill w-100"
      href={selectedColleges[index]?.url}
    >
     Visit College Website
    </a>
    </div>
  ) : null
}


                   
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

