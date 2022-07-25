import React from "react";
import styles from "../../css/Form.module.css"

const FormField = ({ register, errors, name}) => {

    return (
        <div className={styles.name}>
            <input placeholder={name}
                {...register( name , {
                    required: 'This textarea is required',
                    minLength: {
                        value: 5,
                        message: 'Length of name must be at least 5 symbols'
                    }
                })} />
            <div className={styles.error}>{errors?.firstName && <p>{errors?.firstName?.message || "error"}</p>}</div>
        </div>
    )
}

export default FormField