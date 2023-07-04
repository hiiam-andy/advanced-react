import { useState } from "react";
import "./Counter.scss";

export default function Counter() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(++count)}>ADD</button>
      <h1>{count}</h1>
    </div>
  );
}
