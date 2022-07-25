import React, { useState } from "react";
import { useSelector } from "react-redux";
import style from "../css/Todo.module.css"
import Tasks from "./Todo/Tasks";
import TodoField from "./Todo/TodoField";

const Todo = () => {
    const [text, setText] = useState('');
    // const [todos, setTodos] = useState([])

    const todos = useSelector(state => state.app.todos);

    debugger;

    return (
        <div className={style.container}>
            <TodoField text={text} handleText={setText} />
            
            <Tasks todos={todos} />
        </div>
    );
}

export default Todo