import React, { useState, useEffect } from 'react';
import axios from "axios";

function EffectTutorial() 
{

    const [data, setData] = useState("Pie");
    const [count, setCount] = useState(0);

    useEffect(() => 
    {
      axios.get("https://jsonplaceholder.typicode.com/comments")
      .then
        (response => 
        { 
          setData(response.data);
          console.log(data);
        }
        )
    }, [])

    return (
        <div>
            <div>
                <h1>{count}</h1>
                <button onClick={() => { setCount(count + 1)}}></button>
            </div>
        </div>
    )
}

export default EffectTutorial