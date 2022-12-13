import { useRef, useState } from 'react';
import Button from '../../components/common/Button';
import styles from './style.module.scss';
function Authentication({ onChangeStep }) {
    const [error, setError] = useState(false);
    const phoneNumberValue = useRef();
    function nextStepHandler() {
        if (phoneNumberValue.current.value.length === 11) {
            onChangeStep("verifying");
            setError(false);
        } else {
            phoneNumberValue.current.focus();
            setError(true);
        }
    }
    function looseFocusHandler() {
        setError(false);
    }
    return (
        <div className={styles["purchasing-processes__input-box"]}>
            <div className={styles["purchasing-processes__title-container"]}>
                <h2 className={styles["purchasing-processes__title"]}>فرانت هوکس</h2>
            </div>
            <div className={styles["purchasing-processes__operation-name-container"]}>
                <h4 className={styles["purchasing-processes__operation-name"]}>ورود / ثبت نام</h4>
            </div>
            <div className={styles["purchasing-processes__input-container"]}>
                <label htmlFor="phone-namber" className={styles["purchasing-processes__label"]}>شماره موبایل یاایمیل خود را وارد
                    کنید</label>
                <input type="text" id="phone-namber" ref={phoneNumberValue} onBlur={looseFocusHandler} className={`${styles["purchasing-processes__input"]} ${error && styles["purchasing-processes__error"]}`} />
            </div>
            <Button text="ورود به فرانت هوکس" onClick={nextStepHandler} />
        </div>
    )
}
export default Authentication;