import { useReducer } from 'react';
import '../styles/Counter.css'

function reducer(state, action)
{
    switch (action.type)
    {
        case 'increment':
            console.log(action)
            return {...state, count: state.count + 1}
        case 'decrement':
            console.log(action)
            return {...state, count: state.count - 1}
        case 'reset':
            console.log(action)
            return {...state, count: 0}
        case 'operation':
            console.log(action);
            return {...state, operation: action.payload}
        default:
            return state
    }
}

function Counter()
{
    const initialState = {count : 0, operation: "KidsNextDoor"}
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>Count: {state.count}</p>
            <p>What's good: {state.operation}</p>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            <input onChange={e => dispatch({type: 'operation', payload: e.target.value})}></input>
        </div>
    );
}

export default Counter;