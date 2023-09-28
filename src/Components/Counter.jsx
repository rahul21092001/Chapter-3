import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const clickdec = () => {
    setCount(count - 1);
  };

  const clickinc = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={clickinc}>Increment</button>
      <div>{count}</div>
      <button onClick={clickdec}>Decrement</button>
      <br/>
      <br/>
      <hr/>
    </div>
  );
};

export default Counter;
