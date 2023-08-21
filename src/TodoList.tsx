import { useState } from "react";

interface Item {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Item[]>([
    { id: 1, text: "Item 1", completed: false },
    { id: 2, text: "Item 2", completed: true },
    { id: 3, text: "Item 3", completed: false },
  ]);
  const [text, setText] = useState<string>("");

  function handleToggle(id: number) {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  }

  function handleAdd() {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text,
        completed: false,
      },
    ]);
    setText("");
  }

    function clearAll() {
        setTodos([]);
    }

  return (
    <div className="main-container">
      <h1>Todo List</h1>
      <ul>
        {todos.map((item) => (
          <li
            key={item.id}
            onClick={() => handleToggle(item.id)}
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            {item.text}
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Add Todo Item" onChange={e => setText(e.currentTarget.value)}/>
      <button onClick={handleAdd}>Add</button>
      <button onClick={clearAll}>Clear</button>
    </div>
  );
};

export default TodoList;
