import React from "react";
import  ReactDOM from "react-dom/client";

export default function Hero(){
    return(
        <section className="hero">
            <img src="../images/grid.png" alt="grid" className="hero-photo"/>
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}