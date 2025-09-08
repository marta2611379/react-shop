import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState<number>(0);

  function increment(): void {
    setCount(count + 1);
  }

  function dencrement(): void {
    setCount(count - 1);
  }
  return (
    <div>
      <button className="btn btn-warning" onClick={dencrement}>
        -
      </button>
      <span className="mx-3">{count}</span>
      <button className="btn btn-success" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Counter;
