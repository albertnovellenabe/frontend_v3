import "./page.css";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <>
      <section className="w-full flex-center flex-col bg-stone-900">
        <div className="page-section1">
          <div className="app-standard-view flex text-center">
            <h1 className="page-section1-h">
              Make your app the best it can be with Firebase and generative Ai
              HELLO WORLD. 112
            </h1>
            <p className="page-section1-p pt-10">
              Build & run moden, AI-powered experiences users love with
              Firebase, a platform designed to support you throughout your app
              development journey. Backed by Google and trusted by millions of
              businesses around the world.
            </p>
          </div>
          <div className="app-standard-view flex text-center pt-5">
            <button
              type="button"
              className="page-section1-getstarted-button hover:bg-foreground-amber-400 transition delay-50 bg-yellow-400"
            >
              <span className="page-section1-getstarted-button-cnt">
                Get Started
              </span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="page-section1-getstarted-button-cnt pl-1"
              />
            </button>
          </div>
        </div>
      </section>
      <section className="w-full flex-center flex-col">
        <div className="app-standard-view flex">
          <h1>Make your world a better place HELLO WORLD</h1>
        </div>
      </section>
      <section className="w-full flex-center flex-col">
        <div className="app-standard-view flex">
          <h1>Make your world a better place</h1>
        </div>
      </section>
      <section className="w-full flex-center flex-col">
        <div className="app-standard-view flex">
          <h1>Make your world a better place</h1>
        </div>
      </section>
    </>
  );
};

export default Home;
