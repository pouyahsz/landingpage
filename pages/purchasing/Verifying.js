import { useEffect, useRef } from 'react';
import Button from '../../components/common/Button';
import styles from './style.module.scss';
function Verifying({ onChangeStep }) {
    const firstCharacter = useRef();
    const secondCharacter = useRef();
    const thirdCharacter = useRef();
    const forthCharacter = useRef();
    const fifthCharacter = useRef();
    const sixthCharacter = useRef();
    useEffect(() => {
        firstCharacter.current.focus();
    }, [])
    function firstCharacterHandler(e) {
        e.target.select();
        secondCharacter.current.focus();

    }
    function secondCharacterHandler(e) {
        e.target.select();
        thirdCharacter.current.focus();


    }
    function thirdCharacterHandler(e) {
        e.target.select();
        forthCharacter.current.focus();

    }
    function forthCharacterHandler(e) {
        e.target.select();
        fifthCharacter.current.focus();

    }
    function fifthCharacterHandler(e) {
        e.target.select();
        sixthCharacter.current.focus();

    }
    function sixthCharacterHandler(e) {
        e.target.select();

    }

    function firstCharacterDeleteHandler(e) {
        if (e.key === "Backspace" && e.target.value) {
            firstCharacter.current.value = "";
        }
    }
    function secondCharacterDeleteHandler(e) {
        if (e.key === "Backspace" && !e.target.value) {
            firstCharacter.current.focus();
            firstCharacter.current.value = "";
        }
        else if (e.key === "Backspace" && e.target.value) {
            secondCharacter.current.value = "";
        }
    }
    function thirdCharacterDeleteHandler(e) {
        if (e.key === "Backspace" && !e.target.value) {
            secondCharacter.current.focus();
            secondCharacter.current.value = "";
        }
        else if (e.key === "Backspace" && e.target.value) {
            thirdCharacter.current.value = "";
        }
    }
    function forthCharacterDeleteHandler(e) {
        if (e.key === "Backspace" && !e.target.value) {
            thirdCharacter.current.focus();
            thirdCharacter.current.value = "";
        }
        else if (e.key === "Backspace" && e.target.value) {
            forthCharacter.current.value = "";
        }
    }
    function fifthCharacterDeleteHandler(e) {
        if (e.key === "Backspace" && !e.target.value) {
            forthCharacter.current.focus();
            forthCharacter.current.value = "";
        }
        else if (e.key === "Backspace" && e.target.value) {
            fifthCharacter.current.value = "";
        }
    }
    function sixthCharacterDeleteHandler(e) {
        if (e.key === "Backspace" && !e.target.value) {
            fifthCharacter.current.focus();
            fifthCharacter.current.value = "";
        }
        else if (e.key === "Backspace" && e.target.value) {
            sixthCharacter.current.value = "";
        }

    }
    function nextStepHandler() {
        onChangeStep("completing informations")
    }
    function selectHandler(e) {
        e.target.select();
    }

    return (
        <div className={styles["purchasing-processes__input-box"]}>
            <div className={styles["purchasing-processes__title-container"]}>
                <h2 className={styles["purchasing-processes__title"]}>فرانت هوکس</h2>
            </div>
            <p className={styles["purchasing-processes__verifying-code"]}>کد تایید برای شماره موبایل <span>09915856088</span> ارسال شد
            </p>

            <div className={styles["purchasing-processes__verifying-inputs"]}>
                <label htmlFor="verifying" className={styles["purchasing-processes__label"]}>کد تایید را وارد کنید</label>
                <div className={styles["purchasing-processes__verifying-inputs-container"]}>
                    <input type="text" id="verifying" ref={sixthCharacter} onChange={sixthCharacterHandler} onKeyUp={sixthCharacterDeleteHandler} onClick={selectHandler} className={styles["purchasing-processes__verifying-input"]} />
                    <input type="text" id="verifying" ref={fifthCharacter} onChange={fifthCharacterHandler} onKeyUp={fifthCharacterDeleteHandler} onClick={selectHandler} className={styles["purchasing-processes__verifying-input"]} />
                    <input type="text" id="verifying" ref={forthCharacter} onChange={forthCharacterHandler} onKeyUp={forthCharacterDeleteHandler} onClick={selectHandler} className={styles["purchasing-processes__verifying-input"]} />
                    <input type="text" id="verifying" ref={thirdCharacter} onChange={thirdCharacterHandler} onKeyUp={thirdCharacterDeleteHandler} onClick={selectHandler} className={styles["purchasing-processes__verifying-input"]} />
                    <input type="text" id="verifying" ref={secondCharacter} onChange={secondCharacterHandler} onKeyUp={secondCharacterDeleteHandler} onClick={selectHandler} className={styles["purchasing-processes__verifying-input"]} />
                    <input type="text" id="verifying" ref={firstCharacter} onChange={firstCharacterHandler} onKeyUp={firstCharacterDeleteHandler} onClick={selectHandler} className={styles["purchasing-processes__verifying-input"]} />
                </div>

            </div>
            <Button text="ورود به فرانت هوکس" onClick={nextStepHandler} />
        </div>
    )
}

export default Verifying;