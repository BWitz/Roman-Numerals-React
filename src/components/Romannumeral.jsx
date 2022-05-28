import React, { useState, useEffect } from "react"
import '../styles/Romannumeral.css'

const markupHandler = (str) =>
{
    if (str.length > 20)
    {
        return <textarea className="Text-Box" value={str}></textarea>
    }
    else
    {
        return <h2 className="Roman-Num">{str}</h2>
    }
}

const Romannumeral = ({input, romanNum}) => 
{
    return (
        <div className="Roman-Numeral-Div">
            {romanNum ? markupHandler(romanNum) : 'Try entering a number below'}
            <h2 className="Number-Input">{input}</h2>
        </div>
    )
}

export default Romannumeral;