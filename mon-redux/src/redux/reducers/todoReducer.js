import { ADD_TODO, COMPETE_TODO, DELETE_TODO, EDIT_TODO } from "../constants/actionTypes"

const initState={
    todos:[
        {id:0,isComplete:false,text:"todo 1"},
        {id:1,isComplete:false,text:"todo 2"}
    ],
}

export const todoReducer=(state=initState,action)=>{
    switch(action.type){
        case ADD_TODO:return {
            ...state,todos:[...state.todos,action.payload]
        }
        case EDIT_TODO:return{
            ...state,todos:state.todos.map(el=>  el.id===action.payload.index? {...el,text:action.payload.editedText} : el )
        }
        case DELETE_TODO: return {
            ...state,todos:state.todos.filter(el=> el.id!=action.payload)
        }
        case COMPETE_TODO: return {

            ...state,todos:state.todos.map(el => el.id===action.payload? {...el, isComplete:!el.isComplete}:el  )
        } 
        default:return state
    }
}