import React, { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0); // state created
    function handleClickplus() {
        setCount(count + 1);
    }
    function handleClickminus() {
        setCount(count - 1);
    }
    return (
        <div>
            <button onClick={handleClickplus}>Increment</button>z
            <p>Count: {count}</p>
            <button onClick={handleClickminus}>Deccrement</button>z
        </div>
    );
}