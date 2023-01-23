import InputBox from '../../components/common/InputBox';
import TextInput from '../../components/common/TextInput';
import styles from './style.module.scss';
import { useRef, useState } from 'react';
import Button from '../../components/common/Button';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addUserPostalCode, addUserNationalCode } from '../../store/userSlice';


const ExtraInfo = () => {
    const nationalCodeRef = useRef();
    const postalCodeRef = useRef();
    const [nationalCodeError, setNationalCodeError] = useState(false);
    const [postalCodeError, setPostalCodeError] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    function nextStepHandler() {
        if (nationalCodeRef.current.value && postalCodeRef.current.value) {
            router.replace("./dashbord");
            dispatch(addUserNationalCode(nationalCodeRef.current.value));
            dispatch(addUserPostalCode(postalCodeRef.current.value));

        }
        if (nationalCodeRef.current.value.trim() === "" && postalCodeRef.current.value.trim() === "") {
            setNationalCodeError(true);
            setPostalCodeError(true);
        }
        if (nationalCodeRef.current.value.trim() === "" && postalCodeRef.current.value.trim() !== "") {
            setNationalCodeError(true);
            setPostalCodeError(false);

        }
        if (postalCodeRef.current.value.trim() === "" && nationalCodeRef.current.value.trim() !== "") {
            setPostalCodeError(true);
            setNationalCodeError(false);

        }
    }
    return (
        <section className={styles["extra-info-section"]}>
            <InputBox>
                <div className={styles["purchasing-processes__input-container"]}>
                    <TextInput type="number" ref={nationalCodeRef} onLooseFocus={setNationalCodeError} errorStatus={nationalCodeError} id="national-code" labelText="کد ملی" />
                </div>
                <div className={styles["purchasing-processes__input-container"]}>
                    <TextInput type="number" ref={postalCodeRef} onLooseFocus={setPostalCodeError} errorStatus={postalCodeError} id="postal-code" labelText="کد پستی" />
                </div>
                <Button text="ثبت اطلاعات" onClick={nextStepHandler} />
            </InputBox>
        </section>

    )
}

export default ExtraInfo;