import React from "react";
import  ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSwimmer } from '@fortawesome/free-solid-svg-icons'


export default function Card(props){
    console.log(props.experience)
    let badgeText
    if(props.experience.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.experience.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            <img src={`../images/${props.experience.coverImg}`} alt="photo" className="card-image"/>
            { badgeText && <div className="card-badge">{badgeText}</div>}
            <div className="card-stats">
                <FontAwesomeIcon icon={faStar} className="star"/>
                <span className="rating"> {props.experience.stats.rating} </span>
                <span className="gray reviewCount"> {props.experience.stats.reviewCount} </span>
                <span className="gray location"> {props.experience.location} </span>
            </div>
            <p className="card-title">{props.experience.title}</p>
            <p><b>From ${props.experience.price}</b> / person</p>
        </div>
        )}
