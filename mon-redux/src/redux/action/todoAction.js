// import { LocationCitySharp } from "@material-ui/icons";
import { ADD_TODO, COMPETE_TODO, DELETE_TODO, EDIT_TODO } from "../constants/actionTypes";
// newTask={id:5,isComplete:false,text:valeur-state}
export const addTodo = (newTask) => {
  return {
    type: ADD_TODO,
    payload: newTask,
  };
};
export const editTodo = (p) => {
  return {
    type: EDIT_TODO,
    // p={index:   ,  editedText:    }
    payload: p,
  };
};

export const deleteTodo = (id) => {
    return {
      type: DELETE_TODO,
      payload: id,
    };
  };

  export const completeTodo = (id) => {
    return {
      type: COMPETE_TODO,
      payload: id,
    };
  };