import React from 'react';

export default function Button(props) {
    const {label, onClick }= props;
    return(
        <button onClick={onClick} >{label}</button>
    );
}

