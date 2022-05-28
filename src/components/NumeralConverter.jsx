import React, { useState, useEffect, useReducer } from 'react'
import Romannumeral from './Romannumeral'

export default function Numeralconverter() {

    const [input, setInput] = useState("");
    const [romanNum, setRomanNum] = useState("");

    const inputHandler = (e) => {
        setInput(e.target.value);
        setRomanNum(convertNumber(parseInt(e.target.value), 10))
    }

    const convertNumber = (decimal) => {
        const chart = [
            [ 'M', 1000],
            ['CM',  900],
            [ 'D',  500],
            ['CD',  400],
            [ 'C',  100],
            ['XC',   90],
            [ 'L',   50],
            ['XL',   40],
            [ 'X',   10],
            ['IX',    9],
            [ 'V',    5],
            ['IV',    4],
            [ 'I',    1]
          ];

          return chart.reduce((acc, numeral) => 
          {
            const [roman, remainder] = acc;
            const [letter, value] = numeral;
            return [roman + letter.repeat(remainder / value),
                    remainder % value];
          }, ['', decimal])[0];
    }

    return (
    <div>
    <h1>Roman Numeral Converter Page</h1>
        <input type="number" placeholder="Please enter a number!" onChange={e => inputHandler(e)} />
        <Romannumeral input={input} romanNum={romanNum} />
    </div>
  )
}