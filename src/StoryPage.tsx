import stories from "./stories.json";
import { useParams } from "react-router-dom";
import HeaderInterior from "./header-interior";

function StoryPage() {

    const { id }: { id: string } = useParams();

  const story = stories.find((story) => story.id === id);
  return (
    <div>
    <HeaderInterior/>

      {/* Hero */}
       <div className="pt-5 pb-5">
    <div className="container pt-5">

    <div className="row align-items-end pt-5">

      <div className="col">
      <h1 className="display-1 py-5">{story?.headline}</h1>
         <p className="fs-3">{story?.name}, <a className="btn btn-outline-dark me-1" href={`/programs?search=${story.career}`}>{story?.career}</a>, <br/><a className="btn btn-outline-dark me-1" href={`/programs?search=${story.major}`}>{story?.major}</a>, {story?.college}, {story?.year}</p>
      </div>
    </div>

    </div>
    </div>
    <div className="container-fluid px-3">
    <div className="ratio ratio-16x9">
                <video
                  src="https://www.dropbox.com/s/sd90kljtxqp68dg/background-video.mp4?raw=1"
                  className="object-fit-cover"
                  autoPlay
                />
              </div>
    </div>
   

      {/* Intro */}
      <div className="py-5">
        <div className="container">
          
          <div className="row justify-content-center">
            <div className="col-8">
              
              <p>
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus. Curabitur
                tempor quis eros tempus lacinia. Nam bibendum pellentesque quam
                a convallis. Sed ut vulputate nisi. Integer in felis sed leo
                vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat
                ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus
                lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit
                amet magna non ligula vestibulum eleifend. Nulla varius volutpat
                turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed
                nec ante dictum sem condimentum ullamcorper quis venenatis nisi.
                Proin vitae facilisis nisi, ac posuere leo
              </p>
              <p className="display-3 my-5">{story?.quote}</p>
              <p>
                Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus. Curabitur
                tempor quis eros tempus lacinia. Nam bibendum pellentesque quam
                a convallis. Sed ut vulputate nisi. Integer in felis sed leo
                vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat
                ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus
                lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit
                amet magna non ligula vestibulum eleifend. Nulla varius volutpat
                turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed
                nec ante dictum sem condimentum ullamcorper quis venenatis nisi.
                Proin vitae facilisis nisi, ac posuere leo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoryPage;
