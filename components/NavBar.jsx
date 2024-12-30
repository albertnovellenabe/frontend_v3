"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import "./NavBar.css"
import Link from "next/link";
import Image from "@node_modules/next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Drawer } from 'flowbite';


const NavBar = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);

  return (
    <nav className="sticky top-0 left-0 navbar-flex-between w-full py-2 bg-primary-white shadow px-4 z-20">
      <div className="flex">
        <button type="button" className="md:hidden pb-1 px-2 hover:bg-gray-200 rounded-lg text-stone-700 focus:ring-2 focus:ring-stone-400" data-drawer-target="navbar-sidebar-mobile-drawer" data-drawer-show="navbar-sidebar-mobile-drawer" aria-controls="navbar-sidebar-mobile-drawer">
          <FontAwesomeIcon
            icon={faBars}
            style={{fontSize: 20, verticalAlign: "middle" }}
          />
        </button>
        <Link href='/' className="navbar-flex-center gap-2 px-2 flex pl-3">
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
            <Link href="/" className="navbar-flex-center gap-2 flex">
              <span className="navbar-menu-desktop">About</span>
            </Link>
            <Link href="/" className="navbar-flex-center gap-2 flex">
              <span className="navbar-menu-desktop">Services</span>
            </Link>
            <Link href="/" className="navbar-flex-center gap-2 flex">
              <span className="navbar-menu-desktop">Contact</span>
            </Link>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="md:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5 px-2">
            <button type="button" onClick={() => {console.log("Button Pressed")}} className="navbar-button rounded py-1 px-2 hover:bg-blue-100 transition delay-20 text-blue-500 focus:ring-2 focus:ring-blue-200">Sign In
            </button>
          </div>
        ) : (
          <div>
            TT
          </div>
        )}
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden flex relative">
          {isUserLoggedIn ? (
              <div className="flex gap-3 md:gap-5 px-2">
                <button type="button" onClick={() => {console.log("Button Pressed")}} className="navbar-button rounded py-1 px-2 hover:bg-blue-100 transition delay-20 text-blue-500 focus:ring-2 focus:ring-blue-200">Sign In</button>
              </div>
            ) : (
              <div>
                T
              </div>
            )}
      </div>
    </nav>
  )
}

export default NavBar;