import styles from './InputBox.module.scss';
function InputBox({ children }) {

    return (
        <div className={styles["purchasing-processes__input-box"]}>
            <div className={styles["purchasing-processes__title-container"]}>
                <h2 className={styles["purchasing-processes__title"]}>فرانت هوکس</h2>
            </div>
            {children}
        </div>

    )
}

export default InputBox;