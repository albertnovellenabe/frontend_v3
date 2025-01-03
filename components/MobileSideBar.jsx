"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import Image from "@node_modules/next/image";
import Link from "next/link";
import "./MobileSideBar.css";
import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "flowbite";

const MobileSideBar = ({ close }) => {
  // x = slide of index
  // place = target
  /*
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return <></>;
  }*/

  const [place, setPlace] = useState(null);
  const a = {
    aboutus: {
      ourmission: "Our Mission",
      ourteam: "Our Team",
      contactus: "Contact Us",
    },
    services: {
      dostscholarships: "DOST Scholarships",
      internships: "Internships",
    },
  };

  const slideDestination = (x, target) => {
    const carouselElement = document.getElementById("mobile-sidebar-carousel");
    const items = [
      {
        position: 0,
        el: document.getElementById("mobile-slider-main"),
      },
      {
        position: 1,
        el: document.getElementById("mobile-slider-more"),
      },
      {
        position: 2,
        el: document.getElementById("mobile-slider-empty"),
      },
    ];
    const options = {
      defaultPosition: null,

      indicators: {
        items: [
          {
            position: 0,
            el: document.getElementById("mobile-slider-main"),
          },
          {
            position: 1,
            el: document.getElementById("mobile-slider-more"),
          },
          {
            position: 2,
            el: document.getElementById("mobile-slider-empty"),
          },
        ],
      },
    };
    const instanceOptions = {
      id: "mobile-sidebar-carousel",
      override: true,
    };
    var carousel;
    if (x === 1) {
      options.defaultPosition = 0;
      carousel = new Carousel(carouselElement, items, options, instanceOptions);
      setPlace(target);
      carousel.next();
    } else if (x === 0) {
      options.defaultPosition = 1;
      carousel = new Carousel(carouselElement, items, options, instanceOptions);
      /*
      setTimeout(function () {
        setPlace("");
      }, 1000);*/
      carousel.prev();
      setPlace("");
    }
  };

  return (
    <>
      <div
        className="fixed md:hidden top-0 left-0 z-40 h-screen overflow-y-auto transition-transform -translate-x-full bg-white w-56 dark:bg-gray-800"
        id="navbar-sidebar-mobile-drawer"
      >
        <div className="navbar-sidebar-mobile-head">
          <button
            className="px-2 hover:bg-gray-200 rounded-lg text-stone-700 focus:ring-2 focus:ring-stone-400"
            onClick={(x) => {
              close();
            }}
          >
            <FontAwesomeIcon icon={faX} className="align-middle" />
          </button>
          <Image
            src="/assets/images/universitylogo.png"
            width={100}
            height={100}
            alt="partnerlogo2"
          />
        </div>
        <div>
          <div className="relative w-full" id="mobile-sidebar-carousel">
            <div className="relative overflow-hidden h-72">
              {/* MAIN */}
              <div id="mobile-slider-main" className="delay-0 ease-in-out">
                <div className="absolute block w-full -translate-x-1/2 left-1/2">
                  <ul className="flex flex-col gap-3">
                    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <li>
                      <Link
                        href="/"
                        className="flex pr-2"
                        onClick={(x) => {
                          close();
                        }}
                      >
                        <div className="navbar-menu-mobile">
                          <span className="align-middle">Home</span>
                        </div>
                      </Link>
                    </li>
                    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <li>
                      <Link
                        href="/"
                        className="flex flex-col pr-2"
                        onClick={(x) => {
                          close();
                        }}
                      >
                        <div className="navbar-menu-mobile">
                          <span className="align-middle">About Us</span>
                        </div>
                      </Link>
                      <div
                        className="navbar-menu-mobile-more pl-4 py-1"
                        onClick={(x) => slideDestination(1, "About Us")}
                      >
                        <span>More</span>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="align-middle text-xs pl-40"
                        />
                      </div>
                    </li>
                    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <li>
                      <Link
                        href="/"
                        className="flex flex-col pr-2"
                        onClick={(x) => {
                          close();
                        }}
                      >
                        <div className="navbar-menu-mobile">
                          <span className="align-middle">Services</span>
                        </div>
                      </Link>
                      <div
                        className="navbar-menu-mobile-more pl-4 py-1"
                        onClick={(x) => slideDestination(1, "Services")}
                      >
                        <span>More</span>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="align-middle text-xs pl-40"
                        />
                      </div>
                    </li>
                    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                  </ul>
                </div>
              </div>
              {/* MORE */}
              <div
                id="mobile-slider-more"
                className="delay-0 hidden ease-in-out"
              >
                <div className="absolute block w-full -translate-x-1/2 left-1/2">
                  <ul className="flex flex-col gap-3">
                    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <li>
                      <div
                        className="navbar-menu-mobile"
                        onClick={(x) => slideDestination(0)}
                      >
                        <FontAwesomeIcon
                          icon={faArrowLeft}
                          className="align-middle text-xs pr-2 pt-1"
                        />
                        <span className="align-middle">Back</span>
                      </div>
                    </li>
                    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <li>
                      <div className="navbar-menu-mobile flex flex-col gap-2">
                        <span className="align-middle cursor-default">
                          {place}
                        </span>
                        {place &&
                          Object.keys(
                            a[place.toLowerCase().replace(/\s/g, "")]
                          ).map((key, index) => (
                            <Link
                              href="/"
                              key={key}
                              className="flex flex-col pr-2 navbar-menu-mobile-services-options"
                              onClick={(x) => {
                                close();
                                //slideDestination(0, "-");
                              }}
                            >
                              {a[place.toLowerCase().replace(/\s/g, "")][key]}
                            </Link>
                          ))}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* PURPOSELY LEFT BLANK */}
              <div
                id="mobile-slider-empty"
                className="delay-0 hidden ease-in-out"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSideBar;
