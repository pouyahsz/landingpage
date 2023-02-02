import styles from './button.module.scss';
function Button({ text, onClick }) {

    return (
        <button className={styles["purchasing-processes__button"]} onClick={onClick}>{text}</button>
    )
}

export default Button;