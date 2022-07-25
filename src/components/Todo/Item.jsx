import React from "react";
import style from "../../css/Todo.module.css"
import { useDispatch } from "react-redux"
import { removeTodo, toggleTodoComplete } from "../../store/AppSlice";

const Item = ({ id, text, complete }) => {
    let dispatch = useDispatch()

    return (
        <li key={id}>
            <div>
                <input id={id} type={"checkbox"} value={complete} onChange={() => dispatch(toggleTodoComplete({ id }))} />
                <label htmlFor={id}>{text}</label>
            </div>

            <span className={style.delete} onClick={() => dispatch(removeTodo({ id }))}>&times;</span>
        </li>
    )
}

export default Item