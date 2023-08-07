import stories from "./stories.json";
import { Link } from "react-router-dom";
import Search from "./search";
import HeaderInterior from "./header-interior";

function StudentStories() {
  return (
    <div>
    <HeaderInterior/>


      <div>
        
        <div className="py-5">
          <div className="container">
            
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container">
        <h1 className="display-1 py-5">Success Stories</h1>
          <p className="h1">
            Hear from students and alumni about the transformative impact of a
            credential from KCTCS Online.
          </p>
        </div>
      </div>

      <div className="ratio ratio-16x9">
        <video
          src="https://www.dropbox.com/s/sd90kljtxqp68dg/background-video.mp4?raw=1"
          className="object-fit-cover"
          autoPlay
        />
      </div>

      <div className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1>A Student Success Story</h1>
            </div>
            <div className="col-4">
               <p className="h5 lh-base">
                    John Smith, <span className="d-inline-block mx-1">
                    <a
                      className="d-inline btn btn-outline-dark"
                      href={`/programs?search=nurse`}
                    >
                      Nurse
                    </a> 
                    </span>
                    <br/>
                    <span className="d-inline-block mx-1">
                    <a
                      className="d-inline btn btn-outline-dark"
                      href={`/programs?search=nurse`}
                    >
                      Nurse Aide
                    </a> 
                    </span>
                    , Gateway Community and Technical College, 2023
                  </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section py-5">
        <div className="container">
          <div className="d-flex gap-4">
            {stories.map((story, index) => (
              <div className="col" key={index}>
                <div>
                  <div className="ratio ratio-4x5">
                    <img src={story.avatar} alt="Card" />
                  </div>
                </div>
                <div className="">
                  <div className="d-flex flex-column">
                    <div>
                      <div className="ratio ratio-4x3">
                        <img className="object-fit-cover" src={story.avatar} />
                      </div>
                      <h3>Story Headline</h3>
                      <p>
                        {story.name}
                        <br />
                        {story.major}
                      </p>
                      <a
                        className="btn btn-primary"
                        href={`/stories/${story.id}`}
                        key={story.id}
                      >
                        Learn more
                      </a>
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
