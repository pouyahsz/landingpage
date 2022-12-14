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
        if (e.target.value) {
            e.target.select();
            secondCharacter.current.focus();
        }
    }
    function secondCharacterHandler(e) {
        if (e.target.value) {
            e.target.select();
            thirdCharacter.current.focus();
        }

    }
    function thirdCharacterHandler(e) {
        if (e.target.value) {
            e.target.select();
            forthCharacter.current.focus();
        }
    }
    function forthCharacterHandler(e) {
        if (e.target.value) {
            e.target.select();
            fifthCharacter.current.focus();
        }

    }
    function fifthCharacterHandler(e) {
        if (e.target.value) {
            e.target.select();
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
                    <input type="number" id="verifying" ref={sixthCharacter} onInput={sixthCharacterHandler} onKeyUp={sixthCharacterKeyStrokeHandler} onClick={selectHandler} className={styles["purchasing-processes__verifying-input"]} />
                    <input type="number" id="verifying" ref={fifthCharacter} onInput={fifthCharacterHandler} onKeyUp={fifthCharacterKeyStrokeHandler} onClick={selectHandler} className={styles["purchasing-processes__verifying-input"]} />
                    <input type="number" id="verifying" ref={forthCharacter} onInput={forthCharacterHandler} onKeyUp={forthCharacterKeyStrokeHandler} onClick={selectHandler} className={styles["purchasing-processes__verifying-input"]} />
                    <input type="number" id="verifying" ref={thirdCharacter} onInput={thirdCharacterHandler} onKeyUp={thirdCharacterKeyStrokeHandler} onClick={selectHandler} className={styles["purchasing-processes__verifying-input"]} />
                    <input type="number" id="verifying" ref={secondCharacter} onInput={secondCharacterHandler} onKeyUp={secondCharacterKeyStrokeHandler} onClick={selectHandler} className={styles["purchasing-processes__verifying-input"]} />
                    <input type="number" id="verifying" ref={firstCharacter} onInput={firstCharacterHandler} onKeyUp={firstCharacterKeyStrokeHandler} onClick={selectHandler} className={styles["purchasing-processes__verifying-input"]} />
                </div>

            </div>
            <Button text="ورود به فرانت هوکس" onClick={nextStepHandler} />
        </div>
    )
}

export default Verifying;