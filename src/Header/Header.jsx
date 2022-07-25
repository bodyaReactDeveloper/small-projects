import React from "react";
import Links from "./Links";
import style from "./Header.module.css"

const Header = () => {

    return (
        <header className={style.header}>
            <div className={style.wrap}>
                <Links path="form" />
                <Links path="paginator" />
                <Links path="todo" />
                <Links path="stopwatch" />
                <Links path="cardMemory" />
            </div>

            <div className={style.title}>

                These are my projects
            </div>

        </header>
    )
}

export default Header