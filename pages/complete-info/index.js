import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import Button from '../../components/common/Button';
import InputBox from '../../components/common/InputBox';
import PurchasingSteps from '../../components/common/PurchasingSteps';
import TextInput from '../../components/common/TextInput';
import styles from './style.module.scss';
import { useDispatch } from 'react-redux';
import { addUserName, addUserEmail } from '../../store/userSlice';

function CompletingInformations() {
    const [emailError, setEmailError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const emailInput = useRef();
    const nameInput = useRef();
    const router = useRouter();
    const dispatch = useDispatch();
    function nextStepHandler() {
        if (emailInput.current.value.includes("@") && nameInput.current.value) {
            router.replace("/order-receipt");
            dispatch(addUserName(nameInput.current.value));
            dispatch(addUserEmail(emailInput.current.value));
        }
        if (nameInput.current.value) {
            setNameError(false);
        }
        if (emailInput.current.value.includes("@")) {
            setEmailError(false);
        }
        if (!emailInput.current.value || !emailInput.current.value.includes("@")) {
            setEmailError(true);
        }
        if (!nameInput.current.value) {
            setNameError(true);
        }

    }
    return (
        <PurchasingSteps step={"complete-info"}>
            <div className={styles["conplete-info-section"]}>
                <InputBox>
                    <div className={styles["purchasing-processes__input-container"]}>
                        <TextInput type="text" ref={nameInput} onLooseFocus={setNameError} errorStatus={nameError} id="name" labelText="نام و نام خانوادگی" />
                    </div>
                    <div className={styles["purchasing-processes__input-container"]}>
                        <TextInput type="text" ref={emailInput} onLooseFocus={setEmailError} errorStatus={emailError} id="email" labelText="ایمیل" />
                    </div>
                    <Button text="ورود به فرانت هوکس" onClick={nextStepHandler} />
                </InputBox>
            </div>
        </PurchasingSteps>



    )
}

export default CompletingInformations;