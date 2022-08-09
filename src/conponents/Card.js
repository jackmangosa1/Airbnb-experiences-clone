import React from "react";
import  ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSwimmer } from '@fortawesome/free-solid-svg-icons'


export default function Card(props){

    let badgeText
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            <img src={`../images/${props.img}`} alt="photo" className="card-image"/>
            { badgeText && <div className="card-badge">{badgeText}</div>}
            <div className="card-stats">
                <FontAwesomeIcon icon={faStar} className="star"/>
                <span className="rating"> {props.rating} </span>
                <span className="gray reviewCount"> {props.reviewCount} </span>
                <span className="gray location"> {props.location} </span>
            </div>
            <p className="card-title">{props.title}</p>
            <p><b>From ${props.price}</b> / person</p>
        </div>
        )}
