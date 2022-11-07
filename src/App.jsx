import React, { useState, useEffect } from "react";
import NavigationBar from "./components/NavigationBar";
import NavigationButton from "./components/NavigationButton";
import Sections from "./components/Sections";
function App() {

  function handleNavbarStatus() {
    const navbarStatus = JSON.parse(localStorage.getItem('navbarStatus'))
    let style = {}

    if (navbarStatus) {
      style = {
        display: 'flex'
      }
    } else {
      style = {
        display: 'none'
      }
    }

    console.log(style);
    return style
  }

  return (
    <>
      <NavigationButton />
      <NavigationBar displayStatus={handleNavbarStatus()} />
      <Sections />
    </>
  );
}

export default App;
