import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Button from '../../components/common/Button';
import InputBox from '../../components/common/InputBox';
import PurchasingSteps from '../../components/common/PurchasingSteps';
import TextInput from '../../components/common/TextInput';
import styles from './style.module.scss';
import { useDispatch } from 'react-redux';
import { addPhoneNumber, clearUserInfo, setStep } from '../../store/userSlice';
import SetUserInformation from '../../components/common/SetuserInformation';

function Authentication() {
    const currentProgressbarStatus = "loging-info";
    const nextProgressbarStatus = "Phone-number-confirmation";
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
            document.cookie = `step=${nextProgressbarStatus}`;
            localStorage.setItem("phone-number", phoneNumberValue.current.value.toString());
            router.push(`/${nextProgressbarStatus}`);
        } else {
            phoneNumberValue.current.focus();
            setError(true);

        }
    }
    return (
        <SetUserInformation>
            <PurchasingSteps step={currentProgressbarStatus}>
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
        </SetUserInformation>


    )
}
export async function getServerSideProps(context) {
    const cookies = context.req.headers.cookie;
    const step = cookies.slice(5);
    if (step !== "loging-info") {
        return {
            redirect: {
                destination: `/${step}`,
                permanent: false,
            }
        }
    }
    return {
        props: {}
    }

}

export default Authentication;