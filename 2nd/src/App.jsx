import { useState } from "react";

function App() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }
  const handleAddTodo = (event) => {
    event.preventDefault();
    if(!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map((todo) => {todo.id === id ? {...todo, completed: !todo.completed} : todo}))
  }

  return (
    <>
      <main>
        <h1>할 일 목록</h1>
        <form onSubmit={handleAddTodo}>
          <input type="text" placeholder="할 일을 추가 해 보세요!" value={input} onChange={handleInputChange} />
          <button type="submit">추가</button>
        </form>
        <ul>
          {todos.map((todo) => {
            <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
              <button onClick={() => {handleToggleTodo(todo.id)}}>
                {todo.completed ? "취소" : "완료"}
              </button>
              <button onClick={() => {handleDeleteTodo(todo.id)}}>삭제</button>
            </li>
          })}
        </ul>
      </main>
    </>
  )
}

export default App;