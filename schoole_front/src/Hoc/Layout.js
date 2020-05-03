import React from "react";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";

export default function Layout() {
  return (
    <div>
      <div>First ma Nav bar </div>

      <div>
        <Home />
        <About />
      </div>

      <div>Last ma Footer</div>
    </div>
  );
}
