import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Button from '../../components/common/Button';
import InputBox from '../../components/common/InputBox';
import PurchasingSteps from '../../components/common/PurchasingSteps';
import TextInput from '../../components/common/TextInput';
import styles from './style.module.scss';
import { useDispatch } from 'react-redux';
import { addPhoneNumber, clearUserInfo } from '../../store/userSlice';

function Authentication() {
    const [error, setError] = useState(false);
    const phoneNumberValue = useRef();
    const router = useRouter();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(clearUserInfo());
    }, [dispatch])
    function nextStepHandler() {
        if (phoneNumberValue.current.value.length === 11) {
            setError(false);
            dispatch(addPhoneNumber(phoneNumberValue.current.value));
            router.push("/Phone-number-confirmation");
        } else {
            phoneNumberValue.current.focus();
            setError(true);
        }
    }
    return (
        <PurchasingSteps step={"loging-info"}>
            <section className={styles["loging-info-section"]}>
                <InputBox>
                    <div className={styles["purchasing-processes__operation-name-container"]}>
                        <h4 className={styles["purchasing-processes__operation-name"]}>ورود / ثبت نام</h4>
                    </div>
                    <div className={styles["purchasing-processes__input-container"]}>
                        <TextInput type="number" ref={phoneNumberValue} onLooseFocus={setError} errorStatus={error} id="phone-namber" labelText="شماره موبایل یاایمیل خود را وارد" />
                    </div>
                    <Button text="ورود به فرانت هوکس" onClick={nextStepHandler} />
                </InputBox>
            </section>


        </PurchasingSteps >

    )
}
export default Authentication;