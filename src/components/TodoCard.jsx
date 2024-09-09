import PropTypes from "prop-types";

function TodoCard({ children, deleteTodo, updateTodo, index }) {
  return (
    <li className="todoItem">
      <div className="actionsContainer">
        <span>{children}</span>
        <div>
          <i
            className="fa-solid fa-pen-to-square"
            onClick={() => updateTodo(index)}
          ></i>{" "}
          <i
            className="fa-solid fa-trash"
            onClick={() => deleteTodo(index)}
          ></i>
        </div>
      </div>
    </li>
  );
}

TodoCard.propTypes = {
  children: PropTypes.object,
  deleteTodo: PropTypes.func,
  index: PropTypes.number,
  updateTodo: PropTypes.func,
};

export default TodoCard;
