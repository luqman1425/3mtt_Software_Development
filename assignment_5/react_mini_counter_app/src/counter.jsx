import React from "react";
const CounterApp = () => {
    // 1) useState hook to store and update the counter value
    const [count, setCount] = React.useState(0);
    const maxNumberLimit = 10;

    // 2) Setting the increment and decrement counte function
    function handleIncrease(){
        if(count < maxNumberLimit)
        {
            setCount(prevCount=>prevCount + 1);
        }
    };

    const handleDecrease = () => {
        if(count > 0){
            setCount(count - 1);
        }
    };

    // 3) Message display based on edge cases
    const getMessage = () => {
        if(count === maxNumberLimit){
            return "You have reached the limit"
        }
        return " ";
         
    };
    return (  
       <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Click Counter App</h2>
      <h1>{count}</h1>
      <button onClick={handleIncrease} style={{ margin: '5px' }}>Increase</button>
      <button onClick={handleDecrease} style={{ margin: '5px' }}>Decrease</button>
      <p style={{ color: 'red', fontWeight: 'bold' }}>{getMessage()}</p>
    </div>
    );
}
 
export default CounterApp;