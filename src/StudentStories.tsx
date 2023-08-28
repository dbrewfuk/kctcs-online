import stories from "./stories.json";
import { Link } from "react-router-dom";
import Search from "./search";
import HeaderInterior from "./header-interior";
import VideoBlock from "./video-block";


function StudentStories() {
  const featured = stories.filter((story) => story.featured)[0];
  return (
    <div className="text-secondary-navy">
    <HeaderInterior/>


      <div>
        
        <div className="py-5">
          <div className="container">
            
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container">
        <div className="w-75">
        <h1 className="display-1 pt-5">Success Stories</h1>
          <p className="h1 fw-normal">
            Hear from students and alumni about the transformative impact of a
            credential from KCTCS Online.
          </p>
        </div>
        </div>
      </div>

      <div className="ratio ratio-16x9">
        <VideoBlock />
      </div>

      <div className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1>A Student Success Story</h1>
            </div>
            <div className="col-6">
               <p className="h4 lh-base">
                    {featured.name},<span className="d-inline-block mx-1"></span>
                    
                    <span className="d-inline-block me-1">
                    <a
                      className="d-inline btn btn-outline-dark"
                      href={`/programs?search=nurse`}
                    >
                      {featured.major}
                    </a> 
                    </span>
                    , {featured.college}, {featured.year}
                  </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section pb-5">
        <div className="container">
          <div className="d-flex gap-3 pt-4 border-top">
            {stories.filter((story) => !story.featured).map((story, index) => (

              <div className="col p-3 rounded-3 border hover-shadow d-flex flex-column" key={index}>
              
                <div className="">
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-column">
                      <div className="ratio ratio-4x3 mb-2">
                        <img className="object-fit-cover rounded-3" src={story.avatar} />
                      </div>
                      <h3>Story Headline</h3>
                      <p>
                        {story.name}
                        <br />
                        {story.major}
                      </p>
                      <div className="d-inline-block"><a
                        className="btn btn-shadow"
                        href={`/stories/${story.id}`}
                        key={story.id}
                      >
                        Read {story.name}'s Story
                      </a></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  <Search />
   
    </div>
  );
}

export default StudentStories;
