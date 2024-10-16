import { useState } from "react";

const Counter = () => {
    
    const [count, setCount] = useState(0);
    
    //functions
    const handleIncrease = () => {
        setCount(count + 1);
    };

    const handleDecrease = () => {
        setCount(count - 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    const getCountColor = () => {
        if (count > 0) return 'green';
        if (count < 0) return 'red';
        return 'black';
      };

    return(
        <div className="container">
        <h1 className="heading" >Ice Cream Counter</h1>
        <div>
            <p className="countervalue" style={{ color: getCountColor() }}>{count}</p>
            <button onClick={handleDecrease} >DECREASE</button>
            <button onClick={handleReset}>RESET</button>
            <button onClick={handleIncrease}>INCREASE</button>
        </div>
        </div>
    )
};

export default Counter;
