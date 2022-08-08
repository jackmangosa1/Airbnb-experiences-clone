import React from "react";
import ReactDOM from "react-dom/client"
import Navbar from "./conponents/Navbar";
import Stylesheet from "./Stylesheet";
import Hero from "./conponents/Hero";

export default function App(){
    return(
        <div>
            <Stylesheet/>
            <Navbar/>
            <Hero/>
            
        </div>
    )
}