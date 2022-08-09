import React from "react";
import ReactDOM from "react-dom/client"
import Navbar from "./conponents/Navbar";
import Stylesheet from "./Stylesheet";
import Hero from "./conponents/Hero";
import Card from "./conponents/Card";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";

export default function App(){
    return(
        <div>
            <Stylesheet/>
            <Navbar/>
            <Hero/>
            <Card 
            img="swim.png"
            rating= {5.0}
            reviewCount= "(6) •"
            country= "USA"
            title="Life lessons with Kathie Zaferez"
            price="From 136$ / person"
            
            />
            
        </div>
    )
}