import "@styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Provider from "@components/Provider";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import MobileSideBar from "@components/MobileSideBar";
import Hydration from "@components/Hydration";
export const metaData = {
  title: "GDG Challenge",
  description: "Website building contest",
};

/*
  TODO: add <Provider>...</Provider>      <- Setup Later
*/

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link
        href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css"
        rel="stylesheet"
      />
    </head>
    <body>
      <main>{children}</main>
      <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
    </body>
  </html>
);

export default RootLayout;
