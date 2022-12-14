import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import Button from '../../components/common/Button';
import InputBox from '../../components/common/InputBox';
import PurchasingSteps from '../../components/common/PurchasingSteps';
import styles from '../style.module.scss';
function CompletingInformations() {
    const [emailError, setEmailError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const emailInput = useRef();
    const nameInput = useRef();
    const router = useRouter();
    function nextStepHandler() {
        if (emailInput.current.value && nameInput.current.value) {
            router.replace("/order-receipt");
        }
        if (!emailInput.current.value) {
            setEmailError(true);
        }
        if (!nameInput.current.value) {
            setNameError(true);
        }

    }
    function looseEmailInputFocusHandler(e) {
        setEmailError(false);
    }
    function looseNameInputFocusHandler(e) {
        setNameError(false);
    }
    return (
        <PurchasingSteps step={"complete-info"}>
            <InputBox>
                <div className={styles["purchasing-processes__input-container"]}>
                    <label htmlFor="name" className={styles["purchasing-processes__label"]}>نام و نام خانوادگی</label>
                    <input type="text" id="name" onBlur={looseNameInputFocusHandler} onInput={looseNameInputFocusHandler} ref={nameInput} className={`${styles["purchasing-processes__input"]} ${nameError ? styles["purchasing-processes__error"] : ""}`} />
                </div>
                <div className={styles["purchasing-processes__input-container"]}>
                    <label htmlFor="email" className={styles["purchasing-processes__label"]}>ایمیل</label>
                    <input type="text" id="email" onBlur={looseEmailInputFocusHandler} onInput={looseEmailInputFocusHandler} ref={emailInput} className={`${styles["purchasing-processes__input"]} ${emailError ? styles["purchasing-processes__error"] : ""}`} />
                </div>
                <Button text="ورود به فرانت هوکس" onClick={nextStepHandler} />
            </InputBox>
        </PurchasingSteps>



    )
}

export default CompletingInformations;