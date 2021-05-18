import React from "react";
import {BrowserRouter} from 'react-router-dom';
import TopBar from "./components/TopBar";
import Background from "./components/BackGround";
import About from "./components/About";
import Recent from "./components/Recent";

export function App() {
   return (
      <BrowserRouter>
         <TopBar/>
         <Recent/>
         <Background/>
         <About/>
      </BrowserRouter>
   );
}
