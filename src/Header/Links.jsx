import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css"

const Links = ({path}) => {

    return(
        <div>
            <Link to={path}>
                <button className={style.btn}>{path}</button>
            </Link>
        </div>
    )
}

export default Links