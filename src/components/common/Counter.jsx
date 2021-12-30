import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <button
        type="button"
        className="btn btn-success"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <input type="text" value={count} />
    </div>
  );
};

export default Counter;
