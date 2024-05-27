import { Fragment } from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const addCount = () => {setCount(count + 1)} // 1 증가
  const minusCount = () => {setCount(count - 1)} // 1 감소
  const reset = () => {setCount(0);} // reset

  return (
    <Fragment>
      <main>
        <div className="container">
          <h2>count : {count}</h2>
          <button onClick={addCount}>+</button>
          <button onClick={minusCount}>-</button>
          <button onClick={reset}>reset</button>
        </div>
      </main>
    </Fragment>
  )  
}

export default App;