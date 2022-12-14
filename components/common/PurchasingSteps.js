import Image from 'next/image';
import styles from './purchasingProcess.module.scss';
function PurchasingSteps({ step, children }) {
    return (
        <>
            <div className={styles["purchasing-processes__steps-counter"]}>
                <div className={`${styles["purchasing-processes__step"]} ${styles["purchasing-processes--first-step"]}`}>
                    <div className={`${styles["purchasing-processes__counter-container"]} ${styles["purchasing-processes__counter-checked"]}`}>
                        <span className={`${styles["purchasing-processes__counter"]}`}>{step === "Phone-number-confirmation" || step === "loging-info" ? 1 : <Image
                            src="/assets/images/check-solid.svg"
                            alt="check"
                            width={12}
                            height={12}
                        />}</span>
                    </div>
                </div>
                <div className={`${styles["purchasing-processes__step"]} ${styles["purchasing-processes--second-step"]}`}>
                    <div className={`${styles["purchasing-processes__counter-container"]} ${step === "complete-info" || step === "order-receipt" ? styles["purchasing-processes__counter-checked"] : ""}`}>
                        <span className={styles["purchasing-processes__counter"]}>{step === "order-receipt" ? <Image
                            src="/assets/images/check-solid.svg"
                            alt="check"
                            width={12}
                            height={12}
                        /> : 2}</span>
                    </div>
                </div>
                <div className={`${styles["purchasing-processes__step"]} ${styles["purchasing-processes--third-step"]}`}>
                    <div className={`${styles["purchasing-processes__counter-container"]} ${step === "order-receipt" ? styles["purchasing-processes__counter-checked"] : ""}`}>
                        <span className={styles["purchasing-processes__counter"]}>3</span>
                    </div>
                </div>
            </div>
            <div className={styles["purchasing-processes__steps-name"]}>
                <div className={styles["purchasing-processes--first-name-container"]}>
                    <span className={styles["purchasing-processes__name"]}>احراز هویت</span>
                </div>
                <div className={styles["purchasing-processes--second-name-container"]}>
                    <span className={styles["purchasing-processes__name"]}>تکمیل اطلاعات</span>
                </div>
                <div className={styles["purchasing-processes--third-name-container"]}>
                    <span className={styles["purchasing-processes__name"]}>ثبت سفارش</span>
                </div>
            </div>
            {children}
        </>
    )
}
export default PurchasingSteps;