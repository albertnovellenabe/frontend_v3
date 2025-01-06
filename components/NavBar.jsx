"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "@node_modules/next/image";
import { Drawer } from "flowbite";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter
import { useEffect, useState } from "react";
import MobileSideBar from "./MobileSideBar";
import "./NavBar.css";

const NavBar = () => {
  const isUserLoggedIn = true;
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  const handleSignIn = () => {
    router.push("/signin");
  };

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

  return (
    <>
      <MobileSideBar close={closeMobileSideBar} />
      <nav className="sticky top-0 left-0 navbar-flex-between w-full py-2 bg-gray-100 shadow px-4 z-20">
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

          <div className="ml-10 py-1">
            <ul className="flex gap-10 md:gap-10 md:flex hidden">
              <li>
                <Link href="/" className="navbar-flex-center flex">
                  <span className="navbar-menu-desktop">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/" className="navbar-flex-center flex">
                  <span className="navbar-menu-desktop">About Us</span>
                </Link>
                <div className="navbar-menu-desktop-aboutus-container">
                  <div className="navbar-menu-desktop-aboutus-wrapper">
                    <ul className="flex flex-col gap-2 my-3">
                      <li className="text-xs hover:bg-blue-100 transition delay-20 p-2">
                        <a href="/">Our Mission</a>
                      </li>
                      <li className="text-xs hover:bg-blue-100 transition delay-20 p-2">
                        <a href="/">Our Team</a>
                      </li>
                      <li className="text-xs hover:bg-blue-100 transition delay-20 p-2">
                        <a href="/">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/" className="navbar-flex-center flex">
                  <span className="navbar-menu-desktop">Services</span>
                </Link>
                <div className="navbar-menu-desktop-services-container">
                  <div className="navbar-menu-desktop-services-wrapper">
                    <ul className="flex flex-col gap-2 my-3">
                      <li className="text-xs hover:bg-blue-100 transition delay-20 p-2">
                        <a href="/">DOST Scholarships</a>
                      </li>
                      <li className="text-xs hover:bg-blue-100 transition delay-20 p-2">
                        <a href="/">Internships</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/" className="navbar-flex-center flex">
                  <span className="navbar-menu-desktop">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="md:flex hidden">
          {isUserLoggedIn ? (
            <div className="flex gap-3 md:gap-5 px-2">
              <button
                type="button"
                onClick={() => {
                  handleSignIn();
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
                  handleSignIn();
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
    </>
  );
};

//export default dynamic(() => Promise.resolve(NavBar), { ssr: false });
export default NavBar;
//export default dynamic(() => Promise.resolve(NavBar), { ssr: false });
