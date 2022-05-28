import React from 'react'



const Romannumeral = ({input, romanNum}) => 
{
    return (
        <div>
            <h2>{input}</h2>
            <p>{romanNum ? romanNum : "Nothing has been converted!"}</p>
        </div>
    )
}

export default Romannumeral;