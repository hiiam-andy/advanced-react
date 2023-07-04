import { useState } from "react";
import classes from "./Counter.module.scss";

export default function Counter() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <button className={classes.btn} onClick={() => setCount(++count)}>
        ADD
      </button>
      <h1>{count}</h1>
    </div>
  );
}
