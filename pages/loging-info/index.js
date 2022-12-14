import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import Button from '../../components/common/Button';
import InputBox from '../../components/common/InputBox';
import PurchasingSteps from '../../components/common/PurchasingSteps';
import styles from './style.module.scss';
function Authentication() {
    const [error, setError] = useState(false);
    const phoneNumberValue = useRef();
    const router = useRouter();
    function nextStepHandler() {
        if (phoneNumberValue.current.value.length === 11) {
            setError(false);
            router.push("/Phone-number-confirmation");
        } else {
            phoneNumberValue.current.focus();
            setError(true);
        }
    }
    function looseFocusHandler() {
        setError(false);
    }
    return (
        <PurchasingSteps step={"loging-info"}>
            <InputBox>
                <div className={styles["purchasing-processes__operation-name-container"]}>
                    <h4 className={styles["purchasing-processes__operation-name"]}>ورود / ثبت نام</h4>
                </div>
                <div className={styles["purchasing-processes__input-container"]}>
                    <label htmlFor="phone-namber" className={styles["purchasing-processes__label"]}>شماره موبایل یاایمیل خود را وارد
                        کنید</label>
                    <input type="number" id="phone-namber" ref={phoneNumberValue} onBlur={looseFocusHandler} className={`${styles["purchasing-processes__input"]} ${error && styles["purchasing-processes__error"]}`} />
                </div>
                <Button text="ورود به فرانت هوکس" onClick={nextStepHandler} />
            </InputBox>

        </PurchasingSteps >

    )
}
export default Authentication;