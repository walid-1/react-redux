import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action/todoAction";
const AddTodo = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const add = () => {
    dispatch(addTodo({ id: Math.random(), isComplete: false, text: text }));
    setText("");
  };
  return (
    <div className="Input-Container">
      <div className="add-element">
        <h1>TO-DO APP!</h1>
        <h4>Add New To-Do</h4>
        <input
          type="text"
          id="myInput"
          placeholder="Enter New Task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <button className="add-Btn" onClick={add}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;