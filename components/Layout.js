import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({children}) => (
  <>
    <Navbar />
    <main>
      <section className="w-full min-h-screen">{children}</section>
    </main>
    <Footer />
  </>
);

export default Layout;
