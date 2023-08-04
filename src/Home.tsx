import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/programs?search=${searchQuery}`);
  };

  return (
    <div>
     <div className="ratio ratio-21x9 bg-primary">
    <img className="object-fit-cover" src="https://via.placeholder.com/1200x400" alt="Placeholder Image"/>
    </div>
    <div className="py-5">
    <div className="container">
    <div className="row">
    <div className="col"><h1 className="display-1">Home</h1></div>
    <div className="col"><form className="mb-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search programs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control"
            />
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Search
            </button>
          </form></div>
    </div>
    
    </div>
    </div>
  
    </div>
  );
}

export default Home;