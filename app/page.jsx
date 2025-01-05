"use client";
import "./page.css";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <>
        <section className="w-full flex-center flex-col bg-primary-pastelblack">
          <div className="page-section1">
            <div className="app-standard-view flex text-center">
              <h1 className="page-section1-h">
                Investing in the present and future with [Org name]
              </h1>
              <p className="page-section1-p pt-10">
                Investing in the now and the future
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
      <Footer />
    </>
  );
};

export default Home;
