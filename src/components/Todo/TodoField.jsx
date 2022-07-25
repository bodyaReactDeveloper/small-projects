import React from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../../store/AppSlice";
import style from "../../css/Todo.module.css"

const TodoField = ({text, handleText}) => {
    let dispatch = useDispatch()
    
    const addTask = text => {
        if(text.trim().length){
            dispatch(addTodos({text}))
        }
        handleText('')
}
    return (
        <div className={style.task_form}>
            <input value={text} onChange={ e => handleText(e.target.value)}/> 
                <button className={style.btn} onClick={() => addTask(text)}><span>add Task</span></button>
        </div>
    )
}


export default TodoField