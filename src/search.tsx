import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = () => {

	 const history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    history.push(`/programs?search=${searchQuery}`);
    window.location.href = `/programs?search=${searchQuery}`;
  };
return (

<div className="py-5 border bg-secondary">
    <div className="container">
    <div className="row align-items-end">
    <div className="col"><h1 className="display-1 text-info">Start Your Future Now.</h1></div>
    <div className="col"><h3 className="text-info">Explore Programs</h3>
    <form className="mb-3" onSubmit={handleSubmit}>
    <div className="input-group mb-3">
            <input
              type="text"
              placeholder="Search programs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control"
            />
            <button type="submit" className="btn btn-outline-dark" onClick={handleSubmit}>
              Search
            </button>
            </div>

          </form></div>
    </div>
    
    </div>
    </div>
	)


};

export default Search;