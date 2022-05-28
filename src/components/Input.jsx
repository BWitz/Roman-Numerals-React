import React, {useState, useReducer} from 'react';

const reducer = (state, action) => 
{
    switch(action.type)
    {
        case "INCREMENT":
            return {...state, count: state.count + 1};
        case "DECREMENT":
            return {...state, count: state.count - 1};
        case "TOGGLESHOWTEXT":
            console.log()
            return {...state, showText: !state.showText};
        default:
            return state;
    }
}

const Input = () => 
{

    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});
    return(
        <div>
        <h1>{state.showText && state.count}</h1>
        <button onClick={() => {dispatch({ type: "INCREMENT"})}}></button>
        <button onClick={() => {dispatch({ type: "DECREMENT"})}}></button>
        <button onClick={() => {dispatch({ type: "TOGGLESHOWTEXT"})}}></button>
        </div>
    )

    /*
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState('');
    
    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const inputHandler = (e) => {
        setInputValue(e.target.value)
    }

    return(
        <div>
        <div className="button-example">
        <p>{counter}</p>
        <button onClick={increment}>Increment </button>
        <button onClick={decrement}>Decrement </button>
        </div>
        <div className="input-example">
        <input placeholder="Enter a value" onChange={event => inputHandler(event)}>
        </input>
        <h1>{inputValue}</h1>
        </div>
        </div>
    )
    */
}

export default Input;