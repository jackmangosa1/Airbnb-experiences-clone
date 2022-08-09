import React from "react";
import  ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSwimmer } from '@fortawesome/free-solid-svg-icons'


export default function Card(props){
    return(
        <div className="card">
            <img src={`../images/${props.img}`} alt="photo" className="card-image"/>
            <div className="card-stats">
                <FontAwesomeIcon icon={faStar} className="star"/>
                <span>{props.rating}</span>
                <span className="gray"> {props.reviewCount}</span>
                <span className="gray"> {props.country}</span>
            </div>
            <p>{props.title}</p>
            <p>{props.price}</p>
           
           

        </div>
    )
}