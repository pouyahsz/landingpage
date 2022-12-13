import { useRef, useState } from 'react';
import Button from '../../components/common/Button';
import styles from './style.module.scss';
function CompletingInformations({ onChangeStep }) {
    const [error, setError] = useState(false);
    const emailInput = useRef();
    const nameInput = useRef();
    function nextStepHandler() {

        if (emailInput.current.value && nameInput.current.value) {
            onChangeStep("order info");
        }

    }
    return (
        <div className={styles["purchasing-processes__input-box"]}>
            <div className={styles["purchasing-processes__title-container"]}>
                <h2 className={styles["purchasing-processes__title"]}>فرانت هوکس</h2>
            </div>
            <div className={styles["purchasing-processes__input-container"]}>
                <label htmlFor="phone-namber" className={styles["purchasing-processes__label"]}>نام و نام خانوادگی</label>
                <input type="text" id="phone-namber" ref={nameInput} className={styles["purchasing-processes__input"]} />
            </div>
            <div className={styles["purchasing-processes__input-container"]}>
                <label htmlFor="phone-namber" className={styles["purchasing-processes__label"]}>ایمیل</label>
                <input type="text" id="phone-namber" ref={emailInput} className={styles["purchasing-processes__input"]} />
            </div>
            <Button text="ورود به فرانت هوکس" onClick={nextStepHandler} />
        </div>


    )
}

export default CompletingInformations;