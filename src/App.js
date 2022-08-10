import React from "react";
import ReactDOM from "react-dom/client"
import Navbar from "./conponents/Navbar";
import Stylesheet from "./Stylesheet";
import Hero from "./conponents/Hero";
import Card from "./conponents/Card";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";
import Data from "./Data";

export default function App(){

    const experiencesData = Data.map( experience =>{
        return(
            <Card
                id = {experience.id}
                experience = {experience}
            /> 
        )
    })
    return(
        <div>
            <Stylesheet/>
            <Navbar/>
            <Hero/>
            <section className="cards-list">
                {experiencesData}
            </section>
           
            
        </div>
    )
}