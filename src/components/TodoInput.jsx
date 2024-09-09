import PropTypes from "prop-types";
import { forwardRef } from "react";

// Đặt tên cho component khi sử dụng forwardRef
const TodoInput = forwardRef(function TodoInput(
  { addTodo, todoValue, setTodoValue, handleUpdate, toggleUpdate },
  ref
) {
  return (
    <header>
      <input
        type="text"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="Enter todo..."
        ref={ref} // Sử dụng ref đúng cách
      />
      <button onClick={toggleUpdate ? handleUpdate : addTodo}>
        {toggleUpdate ? "Update" : "Add"}
      </button>
    </header>
  );
});

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
  todoValue: PropTypes.string.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  toggleUpdate: PropTypes.bool.isRequired,
  setTodoValue: PropTypes.func.isRequired,
};

export default TodoInput;
