import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Button from '../../components/common/Button';
import InputBox from '../../components/common/InputBox';
import PurchasingSteps from '../../components/common/PurchasingSteps';
import styles from './style.module.scss';
import { useSelector } from 'react-redux';
function Verifying() {
    const firstCharacter = useRef();
    const secondCharacter = useRef();
    const thirdCharacter = useRef();
    const forthCharacter = useRef();
    const fifthCharacter = useRef();
    const sixthCharacter = useRef();
    const user = useSelector(state => state.user.userInfo);
    const router = useRouter();
    const [error, setError] = useState(false);
    useEffect(() => {
        firstCharacter.current.focus();
    }, [])
    function firstCharacterHandler(e) {
        if (e.target.value) {
            secondCharacter.current.select();
            secondCharacter.current.focus();
        }
    }
    function secondCharacterHandler(e) {
        if (e.target.value) {
            thirdCharacter.current.select();
            thirdCharacter.current.focus();
        }

    }
    function thirdCharacterHandler(e) {
        if (e.target.value) {
            forthCharacter.current.select();
            forthCharacter.current.focus();
        }
    }
    function forthCharacterHandler(e) {
        if (e.target.value) {
            fifthCharacter.current.select();
            fifthCharacter.current.focus();
        }

    }
    function fifthCharacterHandler(e) {
        if (e.target.value) {
            sixthCharacter.current.select();
            sixthCharacter.current.focus();
        }


    }
    function sixthCharacterHandler(e) {
        e.target.select();

    }

    function firstCharacterKeyStrokeHandler(e) {
        if (e.key === "Backspace") {
            firstCharacter.current.value = "";
        }
        if (e.keyCode == 39) {
            secondCharacter.current.focus();
            secondCharacter.current.select();
        }
    }
    function secondCharacterKeyStrokeHandler(e) {
        if (e.key === "Backspace") {
            firstCharacter.current.focus();
            firstCharacter.current.select();
        }
        if (e.keyCode == 39) {
            thirdCharacter.current.focus();
            thirdCharacter.current.select();
        }
        if (e.keyCode == 37) {
            firstCharacter.current.focus();
            firstCharacter.current.select();
        }
    }
    function thirdCharacterKeyStrokeHandler(e) {
        if (e.key === "Backspace") {
            secondCharacter.current.focus();
            secondCharacter.current.select();
        }
        if (e.keyCode == 39) {
            forthCharacter.current.focus();
            forthCharacter.current.select();
        }
        if (e.keyCode == 37) {
            secondCharacter.current.focus();
            secondCharacter.current.select();
        }
    }
    function forthCharacterKeyStrokeHandler(e) {
        if (e.key === "Backspace") {
            thirdCharacter.current.focus();
            thirdCharacter.current.select();
        }
        if (e.keyCode == 39) {
            fifthCharacter.current.focus();
            fifthCharacter.current.select();
        }
        if (e.keyCode == 37) {
            thirdCharacter.current.focus();
            thirdCharacter.current.select();
        }
    }
    function fifthCharacterKeyStrokeHandler(e) {
        if (e.key === "Backspace") {
            forthCharacter.current.focus();
            forthCharacter.current.select();
        }
        if (e.keyCode == 39) {
            sixthCharacter.current.focus();
            sixthCharacter.current.select();
        }
        if (e.keyCode == 37) {
            forthCharacter.current.focus();
            forthCharacter.current.select();
        }
    }
    function sixthCharacterKeyStrokeHandler(e) {
        if (e.key === "Backspace") {
            fifthCharacter.current.focus();
            fifthCharacter.current.select();
        }
        if (e.keyCode == 37) {
            fifthCharacter.current.focus();
            fifthCharacter.current.select();
        }

    }
    function nextStepHandler() {
        if (firstCharacter.current.value && secondCharacter.current.value && thirdCharacter.current.value && forthCharacter.current.value && fifthCharacter.current.value && sixthCharacter.current.value) {
            router.replace("/complete-info");
        } else {
            setError(true);
        }
    }
    function selectHandler(e) {
        e.target.select();
        setError(false);
    }

    return (
        <PurchasingSteps step={"Phone-number-confirmation"}>

            <section className={styles["phone-number-section"]}>
                <InputBox>
                    <p className={styles["purchasing-processes__verifying-code"]}>کد تایید برای شماره موبایل <span>{user.phoneNumber}</span> ارسال شد
                    </p>

                    <div className={styles["purchasing-processes__verifying-inputs"]}>
                        <label htmlFor="verifying" className={styles["purchasing-processes__label"]}>کد تایید را وارد کنید</label>
                        <div className={styles["purchasing-processes__verifying-inputs-container"]}>
                            <input type="number" id="verifying" ref={sixthCharacter} onInput={sixthCharacterHandler} onKeyUp={sixthCharacterKeyStrokeHandler} onClick={selectHandler} className={`${styles["purchasing-processes__verifying-input"]} ${error && !sixthCharacter.current.value ? styles["purchasing-processes__error"] : ""}`} />
                            <input type="number" id="verifying" ref={fifthCharacter} onInput={fifthCharacterHandler} onKeyUp={fifthCharacterKeyStrokeHandler} onClick={selectHandler} className={`${styles["purchasing-processes__verifying-input"]} ${error && !fifthCharacter.current.value ? styles["purchasing-processes__error"] : ""}`} />
                            <input type="number" id="verifying" ref={forthCharacter} onInput={forthCharacterHandler} onKeyUp={forthCharacterKeyStrokeHandler} onClick={selectHandler} className={`${styles["purchasing-processes__verifying-input"]} ${error && !forthCharacter.current.value ? styles["purchasing-processes__error"] : ""}`} />
                            <input type="number" id="verifying" ref={thirdCharacter} onInput={thirdCharacterHandler} onKeyUp={thirdCharacterKeyStrokeHandler} onClick={selectHandler} className={`${styles["purchasing-processes__verifying-input"]} ${error && !thirdCharacter.current.value ? styles["purchasing-processes__error"] : ""}`} />
                            <input type="number" id="verifying" ref={secondCharacter} onInput={secondCharacterHandler} onKeyUp={secondCharacterKeyStrokeHandler} onClick={selectHandler} className={`${styles["purchasing-processes__verifying-input"]} ${error && !secondCharacter.current.value ? styles["purchasing-processes__error"] : ""}`} />
                            <input type="number" id="verifying" ref={firstCharacter} onInput={firstCharacterHandler} onKeyUp={firstCharacterKeyStrokeHandler} onClick={selectHandler} className={`${styles["purchasing-processes__verifying-input"]} ${error && !firstCharacter.current.value ? styles["purchasing-processes__error"] : ""}`} />
                        </div>

                    </div>
                    <Button text="ورود به فرانت هوکس" onClick={nextStepHandler} />
                </InputBox>
            </section>


        </PurchasingSteps >
    )
}

export default Verifying;