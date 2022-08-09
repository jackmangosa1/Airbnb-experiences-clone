import React from "react";
import ReactDOM from "react-dom/client"
import Navbar from "./conponents/Navbar";
import Stylesheet from "./Stylesheet";
import Hero from "./conponents/Hero";
import Card from "./conponents/Card";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";
import Data from "./Data";

export default function App(){

    const experiences = Data.map( experience =>{
        return(
            <Card
            img = {experience.coverImg}
            rating = {experience.stats.rating}
            reviewCount = {experience.stats.reviewCount}
            location ={experience.location}
            title = {experience.title}
            price = {experience.price}     
            /> 
        )
    })
    return(
        <div>
            <Stylesheet/>
            <Navbar/>
            <Hero/>
            <section className="cards-list">
                {experiences}
            </section>
           
            
        </div>
    )
}