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

/**
 * 리액트 counter 앱 만들기
 * 1) 숫자(초기값:0)와 +, -, reset 버튼을 만든다.
 * 2) + 버튼 클릭 시 숫자를 1 증가 시킨다.
 * 3) - 버튼 클릭 시 숫자를 1 감소 시킨다.
 * 4) reset 버튼 클릭 시 숫자를 다시 0으로 변경한다.
 * 5) className과 css 파일을 생성하고, 원하는 css를 추가한다. 
 * 6) 태그 최상단에 Fragment 추가한다
 */