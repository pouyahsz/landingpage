import styles from './InputText.module.scss';
import React from 'react';
// eslint-disable-next-line react/display-name
const TextInput = React.forwardRef((props, ref) => {
    const looseFocusHandler = () => {
        onLooseFocus(false)
    }
    if (props.type === "text") {
        return (
            <>
                <label htmlFor={props.id} className={styles["purchasing-processes__label"]}>{props.labelText}</label>
                <input type="text" id={props.id} onBlur={props.looseFocusHandler} onInput={props.looseFocusHandler} ref={ref} className={`${styles["purchasing-processes__input"]} ${props.errorStatus ? styles["purchasing-processes__error"] : ""}`} />
            </>
        )
    }
    if (props.type === "number") {
        return (
            <>
                <label htmlFor={props.id} className={styles["purchasing-processes__label"]}>{props.labelText}</label>
                <input type="number" id={props.id} onBlur={props.looseFocusHandler} onInput={props.looseFocusHandler} ref={ref} className={`${styles["purchasing-processes__input"]} ${props.errorStatus ? styles["purchasing-processes__error"] : ""}`} />
            </>
        )
    }

})


export default TextInput;