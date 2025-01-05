import React, { useState } from "react";
import Navbar from "./NavBar";
import Footer from "../Pages/Footer/Footer";

export default function Layout() {
  const [activeLink, setActiveLink] = useState(null);
  const [activeFooterLink, setActiveFooterLink] = useState(null);

  return (
    <div>
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      <Footer
        activeFooterLink={activeFooterLink}
        setActiveFooterLink={setActiveFooterLink}
      />
    </div>
  );
}
