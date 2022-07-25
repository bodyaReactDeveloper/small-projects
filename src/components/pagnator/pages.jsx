import React from "react";
import styles from "../../css/Paginator.module.css"

const Pages = ({ setCurrent, current, arrOfCurrents }) => {

    return (
        <>
            <div className={styles.paginator}>
                {arrOfCurrents.map((page, index) => {
                    return <span onClick={() => setCurrent(page)}
                        className={current === page ? styles.active : styles.default}
                        key={index}> {page} </span>
                })}
            </div>
        </>

    )
}

export default Pages