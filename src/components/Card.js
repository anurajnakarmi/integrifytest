import React from 'react';
import Button from './Button';
import '../styles/card.css';

export default function Card(props) {

    const { name, username, website, handleOnClick } = props;
    return (
        <div className="cardContainer" >
           
            <div className="avatarContainer" >
                A
            </div>
            <div>
            <p className="nameContainer">
                {name}
            </p>
            <p classname="usernameContainer">
                {username}
            </p>
            <a href= {website}>
                {website}
            
            </a>
            </div>   


            <Button onClick = {handleOnClick} label= "More Details" />



        </div>
    )
}
