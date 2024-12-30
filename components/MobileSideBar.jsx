import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faX } from "@fortawesome/free-solid-svg-icons";
import Image from "@node_modules/next/image";
import Link from "next/link";
import "./MobileSideBar.css";
const MobileSideBar = () => {
  return (
    <>
      <div
        className="fixed top-0 left-0 z-40 h-screen overflow-y-auto transition-transform -translate-x-full bg-white w-60 dark:bg-gray-800"
        id="navbar-sidebar-mobile-drawer"
        tabIndex="-1"
        aria-labelledby="drawer-parent"
      >
        <div className="navbar-sidebar-mobile-head">
          <button
            className="px-2 hover:bg-gray-200 rounded-lg text-stone-700 focus:ring-2 focus:ring-stone-400"
            data-drawer-hide="navbar-sidebar-mobile-drawer"
            aria-controls="navbar-sidebar-mobile-drawer"
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
        <div
          className="relative w-full"
          id="controls-carousel"
          data-carousel="static"
        >
          <div className="relative overflow-hidden h-64">
            {/* MAIN */}
            <div
              className="hidden duration-500 ease-in-out"
              data-carousel-item="active"
            >
              <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <ul className="flex flex-col gap-3">
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                  <li>
                    <Link
                      href="/"
                      className="flex pr-2"
                      data-drawer-hide="navbar-sidebar-mobile-drawer"
                      aria-controls="navbar-sidebar-mobile-drawer"
                    >
                      <div className="navbar-menu-mobile">
                        <span>Home</span>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="align-middle text-xs"
                          style={{ paddingLeft: 158 }}
                        />
                      </div>
                    </Link>
                  </li>
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                  <li>
                    <Link href="/" className="flex pr-2">
                      <div className="navbar-menu-mobile">
                        <span>About</span>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="align-middle text-xs"
                          style={{ paddingLeft: 157 }}
                        />
                      </div>
                    </Link>
                  </li>
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                  <li>
                    <Link
                      href="/"
                      className="flex flex-col pr-2"
                      data-drawer-hide="navbar-sidebar-mobile-drawer"
                      aria-controls="navbar-sidebar-mobile-drawer"
                    >
                      <div className="navbar-menu-mobile">
                        <span>Services</span>
                      </div>
                    </Link>
                    {/*data-drawer-show="navbar-sidebar-mobile-drawer-more"*/}
                    <div
                      className="navbar-menu-mobile-more pl-4"
                      data-carousel-next
                    >
                      <span>More</span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="align-middle text-xs"
                        style={{ paddingLeft: 170 }}
                      />
                    </div>
                  </li>
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                  <li>
                    <Link
                      href="/"
                      className="flex pr-2"
                      data-drawer-hide="navbar-sidebar-mobile-drawer"
                      aria-controls="navbar-sidebar-mobile-drawer"
                    >
                      <div className="navbar-menu-mobile">
                        <span>Contact</span>
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="align-middle text-xs"
                          style={{ paddingLeft: 143 }}
                        />
                      </div>
                    </Link>
                  </li>
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                </ul>
              </div>
            </div>
            {/* MORE */}
            <div className="hidden duration-500 ease-in-out" data-carousel-item>
              <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <ul className="flex flex-col gap-3">
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                  <li>
                    <div className="navbar-menu-mobile" data-carousel-prev>
                      <span>More</span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="align-middle text-xs"
                        style={{ paddingLeft: 158 }}
                      />
                    </div>
                  </li>
                  <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                </ul>
              </div>
            </div>
            <div data-carousel-item></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSideBar;
