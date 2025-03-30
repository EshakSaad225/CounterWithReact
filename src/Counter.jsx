import React , {useState} from 'react';


function Counter(){

    const [counter,setCounter] = useState(0);

    const increment = () => {
        // setCounter(counter + 1);    // this way to update one time only
        setCounter( c => c+1);  // this way to update multiple times
        setCounter( c => c+1);
        setCounter( c => c+1);
    }
    const decrement = () => {
        setCounter(counter-1) ;
    }
    const reset = () =>{
        setCounter(0);
    }

    return(
        <div className="counter-container">
            <p className="counter-display">{counter}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    );



}
export default Counter;