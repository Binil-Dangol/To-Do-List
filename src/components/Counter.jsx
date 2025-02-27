import {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increament = () => {
        setCount(prevCount => prevCount + 1);
    }

    const reset = () => {
        setCount(0);
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    return (
        <>
            <h1 className='counterHeading'>Counter</h1>
            <p className='counterNumber'>{count}</p>
            <button className='button' onClick={increament}>+1</button>
            <button className='button' onClick={reset}>Reset</button>
            <button className='button' onClick={decrement}>-1</button>
        </>
    );
}

export default Counter;