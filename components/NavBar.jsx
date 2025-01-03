"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import "./NavBar.css";
import Link from "next/link";
import Image from "@node_modules/next/image";
import MobileSideBar from "./MobileSideBar";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Drawer, Dropdown } from "flowbite";

const NavBar = () => {
  const isUserLoggedIn = true;

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return null;
  }

  const openMobileSideBar = (x) => {
    const $targetEl = document.getElementById("navbar-sidebar-mobile-drawer");
    const MobileSideBar = new Drawer($targetEl);
    MobileSideBar.show();
  };

  const closeMobileSideBar = (x) => {
    const $targetEl = document.getElementById("navbar-sidebar-mobile-drawer");
    const MobileSideBar = new Drawer($targetEl);

    MobileSideBar.hide();
  };

  const navbarHover = () => {
    const $targetEl = document.getElementById("navbar-aboutus-dropdownHover");
    const $triggerEl = document.getElementById("navbar-aboutus-dropdown");
    const options = {
      placement: "bottom",
      triggerType: "click",
      offsetSkidding: 0,
      offsetDistance: 10,
      delay: 300,
      ignoreClickOutsideClass: false,
      onHide: () => {
        console.log("dropdown has been hidden");
      },
      onShow: () => {
        console.log("dropdown has been shown");
      },
      onToggle: () => {
        console.log("dropdown has been toggled");
      },
    };

    // instance options object
    const instanceOptions = {
      id: "navbar-services-dropdownHover",
      override: true,
    };
    const dropdown = new Dropdown(
      $targetEl,
      $triggerEl,
      options,
      instanceOptions
    );
    dropdown.show();
  };

  const navbarOut = () => {
    /*
    const $targetEl = document.getElementById("navbar-services-dropdownHover");
    const $triggerEl = document.getElementById("navbar-services-dropdown");

    const dropdown = new Dropdown($targetEl, $triggerEl);
    dropdown.hide();*/
  };

  return (
    <div>
      <MobileSideBar close={closeMobileSideBar} />
      <nav className="sticky top-0 left-0 navbar-flex-between w-full py-2 bg-primary-white shadow px-4 z-20">
        <div className="flex">
          <button
            type="button"
            onClick={openMobileSideBar}
            className="md:hidden pb-1 px-2 hover:bg-gray-200 rounded-lg text-stone-700 focus:ring-2 focus:ring-stone-400"
          >
            <FontAwesomeIcon
              icon={faBars}
              style={{ fontSize: 20, verticalAlign: "middle" }}
            />
          </button>
          <Link href="/" className="navbar-flex-center gap-2 px-2 flex pl-3">
            <Image
              src="/assets/images/universitylogo.png"
              width={100}
              height={100}
              alt="partnerlogo2"
            />
          </Link>
          <div className="flex gap-10 md:gap-10 md:flex hidden pl-10 py-1">
            <Link href="/" className="navbar-flex-center gap-2 flex">
              <span className="navbar-menu-desktop">Home</span>
            </Link>
            <Link
              href="/"
              className="navbar-flex-center gap-2 flex"
              id="navbar-aboutus-dropdown"
            >
              <span
                className="navbar-menu-desktop"
                onMouseOver={navbarHover}
                onMouseOut={navbarOut}
              >
                About Us
              </span>
            </Link>
            <div
              id="navbar-aboutus-dropdownHover"
              className="z-40 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    DOST Scholarships
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Internships
                  </a>
                </li>
              </ul>
            </div>
            <Link
              href="/"
              className="navbar-flex-center gap-2 flex"
              id="navbar-services-dropdown"
              data-dropdown-toggle="navbar-services-dropdownHover"
              data-dropdown-trigger="hover"
            >
              <span className="navbar-menu-desktop">Services</span>
            </Link>
            <div
              id="navbar-services-dropdownHover"
              className="z-40 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    DOST Scholarships
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Internships
                  </a>
                </li>
              </ul>
            </div>
            <Link href="/" className="navbar-flex-center gap-2 flex">
              <span className="navbar-menu-desktop">Contact</span>
            </Link>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="md:flex hidden">
          {isUserLoggedIn ? (
            <div className="flex gap-3 md:gap-5 px-2">
              <button
                type="button"
                onClick={() => {
                  console.log("Button Pressed");
                }}
                className="navbar-button rounded py-1 px-2 hover:bg-blue-100 transition delay-20 text-blue-500 focus:ring-2 focus:ring-blue-200"
              >
                Sign In
              </button>
            </div>
          ) : (
            <div>TT</div>
          )}
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex relative">
          {isUserLoggedIn ? (
            <div className="flex gap-3 md:gap-5 px-2">
              <button
                type="button"
                onClick={() => {
                  console.log("Button Pressed");
                }}
                className="navbar-button rounded py-1 px-2 hover:bg-blue-100 transition delay-20 text-blue-500 focus:ring-2 focus:ring-blue-200"
              >
                Sign In
              </button>
            </div>
          ) : (
            <div>T</div>
          )}
        </div>
      </nav>
    </div>
  );
};

//export default dynamic(() => Promise.resolve(NavBar), { ssr: false });
export default NavBar;
//export default dynamic(() => Promise.resolve(NavBar), { ssr: false });
