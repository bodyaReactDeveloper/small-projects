import React from "react";
import styles from "../../css/Paginator.module.css"
const ButtonSwitch = ({ setCurrent, current, numberOfPages }) => {

    return (
        <>
            {
                numberOfPages
                    ?
                    <button disabled={current === numberOfPages.length && true}
                        onClick={() => setCurrent(prev => prev === numberOfPages.length ? prev : prev + 1)}
                        className={styles.switch}>Next</button>
                    :
                    <button disabled={current === 1 && true}
                        onClick={() => setCurrent(prev => prev === 1 ? prev : prev - 1)}
                        className={styles.switch}>Prev</button>
            }
        </>

    )
}

export default ButtonSwitch