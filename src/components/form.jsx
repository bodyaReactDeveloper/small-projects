import React from "react";
import { useForm } from "react-hook-form";
import styles from "../css/Form.module.css"
import FormField from "./Form/FormField";



const Form = () => {
    
    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit
    } = useForm({
        mode: 'onBlur'
    })

    const onSub = data => {
        alert(JSON.stringify(data))
    }
    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit(onSub)}>
                <FormField errors={errors} name="firstname" register={register}/>

                <FormField errors={errors} name="lastname" register={register}/>


                <div><input type={'submit'} value='send' className={styles.button_63} disabled={!isValid} /></div>

            </form>
        </div>
    )

}

export default Form