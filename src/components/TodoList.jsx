import PropTypes from "prop-types";
import TodoCard from "./TodoCard";

function TodoList({ todos, deleteTodo, updateTodo }) {
  return (
    <ul className="main">
      {todos?.map((item, index) => {
        return (
          <TodoCard
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            key={index}
            index={index}
          >
            <p>{item}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func,
  updateTodo: PropTypes.func,
};
export default TodoList;
