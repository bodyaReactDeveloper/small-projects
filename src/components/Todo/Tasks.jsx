import React from "react";
import Item from "./Item";
import style from "../../css/Todo.module.css"

const Tasks = ({todos}) => {

    return (
        <div className={style.task_list}>
            {
                todos.map( todo => <Item key={todo.id} {...todo}/>)
            }
        </div>
    )
}

export default Tasks