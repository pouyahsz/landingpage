import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import Button from '../../components/common/Button';
import InputBox from '../../components/common/InputBox';
import PurchasingSteps from '../../components/common/PurchasingSteps';
import TextInput from '../../components/common/TextInput';
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
    return (
        <PurchasingSteps step={"complete-info"}>
            <InputBox>
                <div className={styles["purchasing-processes__input-container"]}>
                    <TextInput type="text" ref={nameInput} onLooseFocus={setNameError} errorStatus={nameError} id="name" labelText="نام و نام خانوادگی" />
                </div>
                <div className={styles["purchasing-processes__input-container"]}>
                    <TextInput type="text" ref={emailInput} onLooseFocus={setEmailError} errorStatus={emailError} id="email" labelText="ایمیل" />
                </div>
                <Button text="ورود به فرانت هوکس" onClick={nextStepHandler} />
            </InputBox>
        </PurchasingSteps>



    )
}

export default CompletingInformations;