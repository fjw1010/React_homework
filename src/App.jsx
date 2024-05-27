import { Fragment } from "react";
import { useState } from "react"
function App() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState();

  return (
    <Fragment>
      <div>
        count: {count}
      </div>
      <div>
        <button>+</button>
        <button>-</button>
        <button>reset</button>
      </div>
    </Fragment>
  )  
}
export default App;