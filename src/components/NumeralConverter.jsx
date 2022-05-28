import React, { useState} from 'react'
import Romannumeral from './Romannumeral'
import '../styles/NumeralConverter.css';

export default function Numeralconverter() {

    const [input, setInput] = useState("");
    const [romanNum, setRomanNum] = useState("");

    const inputHandler = (e) => {
        if (e.target.value.length < 9){
            setInput(e.target.value);
            setRomanNum(convertNumber(parseInt(e.target.value), 10))
        }
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
        <h1 className="Website-Header">Roman Numerals</h1>
        <i>Numeri Romani pro hodie</i>
        <Romannumeral input={input} romanNum={romanNum} />
        <input className="Number-Input" type="number" placeholder="Enter A Number Here" onChange={e => inputHandler(e)} />
    </div>
  )
}