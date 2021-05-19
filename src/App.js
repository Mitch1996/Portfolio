import React from "react";
import {BrowserRouter} from 'react-router-dom';
import TopBar from "./components/TopBar";
import Background from "./components/BackGround";
import About from "./components/About";
import Recent from "./components/Recent";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

export function App() {
   return (
      <BrowserRouter>
         <TopBar/>
         <Recent/>
         <Background/>
         <About/>
         <Skills/>
         <Resume/>
         <Footer/>
      </BrowserRouter>
   );
}
