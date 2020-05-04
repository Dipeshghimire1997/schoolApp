import React from "react";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Application from "../Components/Application/Application";

export default function Layout() {
  return (
    <div>
      <div>First ma Nav bar </div>
  

      <div>
        
        <Application />
        <Home />
        <About />
      </div>

      <div>Last ma Footer</div>
    </div>
  );
}
