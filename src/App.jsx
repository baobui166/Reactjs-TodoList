import { useEffect, useRef, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const todos = ["Go to gym", "Walk", "Play football"];

  const [todoValue, setTodoValue] = useState("");
  const [todoList, setTodoList] = useState(() => {
    const data = localStorage.getItem("todos");

    return JSON.parse(data) ? JSON.parse(data) : todos;
  });
  const [toggleUpdate, setToggleUpdate] = useState(false);
  const [currentId, setCurrentId] = useState(null); // Dùng để lưu id của todo đang được chỉnh sửa
  const inputRef = useRef();

  const addTodo = () => {
    setTodoList((prev) => (prev = [...prev, todoValue]));
    setTodoValue("");
    inputRef.current.focus();
    setToggleUpdate(false);
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((_, index) => index !== id));
  };

  const updateTodo = (id) => {
    setTodoValue(todoList[id]); // Lấy giá trị todo đang muốn chỉnh sửa
    inputRef.current.focus();
    setCurrentId(id); // Lưu lại id của todo đang chỉnh sửa
    setToggleUpdate(true);
  };

  const handleUpdate = () => {
    setTodoList((prev) => {
      const updatedList = prev.map((item, index) =>
        index === currentId ? todoValue : item
      );
      return updatedList;
    });
    setTodoValue("");
    inputRef.current.focus();
    setToggleUpdate(false);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <TodoInput
        addTodo={addTodo}
        todoValue={todoValue}
        handleUpdate={handleUpdate}
        toggleUpdate={toggleUpdate}
        setTodoValue={setTodoValue}
        ref={inputRef} // Truyền ref vào component con (sử dụng React.forwardRef nếu cần)
      />
      <TodoList
        todos={todoList} // Truyền danh sách todo được cập nhật
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        handleUpdate={handleUpdate}
      />
    </>
  );
}

export default App;
