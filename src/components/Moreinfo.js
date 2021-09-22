import React from 'react';
import '../styles/moreinfo.css';

export default function Moreinfo(props) {
    const {data}=props;
        const { name, username, email, phone, company, website, address } = data;
    const { street, suite, city, zipcode } = address;
    return (
        <div className= "moreinfo">
            <p> - name:<span>{name}</span></p>
            <p> - username:<span>{username}</span></p>
            <p> - email:<span>{email}</span></p>
            <p> - phone:<span>{phone}</span></p>
            <p> - company:<span>{company.name}</span></p>
            <p> - website:<span>{website}</span></p>
            <p> - address:
                <p> - street:<span>{street}</span></p>
                <p> - suite:<span>{suite}</span></p>
                <p> - city:<span>{city}</span></p>
                <p> - zipcode:<span>{zipcode}</span></p>
            </p>
        </div>
    );



}






//<div style= {{border: "1px solid black",  width: "300px", height:"300px"}}></div>