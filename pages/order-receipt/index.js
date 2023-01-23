import Button from '../../components/common/Button';
import PurchasingSteps from '../../components/common/PurchasingSteps';
import styles from './style.module.scss';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

export default function OrderInfo() {
    const user = useSelector((state) => state.user.userInfo);
    const basket = useSelector((state) => state.basket.selectedItems);
    const router = useRouter();
    const totalPrice = basket[0].price * (1 - basket[0].discount / 100);
    function nextStepHandler() {
        router.replace("extra-info");
    }
    return (
        <PurchasingSteps step={"order-receipt"}>
            <div className={styles["order-info"]}>
                <div className={styles["order-info__container"]}>
                    <div className={styles["order-info__customer"]}>
                        <div className={styles["order-info__title-container"]}>
                            <h3 className={styles["order-info__title"]}>جزییات صورتحساب</h3>
                        </div>
                        <div className={styles["order-info__specifications"]}>
                            <p className={styles["order-info__specifications-item"]}>نام  <span className={styles["order-info__specifications-data"]}>{user.userName}</span></p>
                            <p className={styles["order-info__specifications-item"]}>ایمیل  <span className={styles["order-info__specifications-data"]}>{user.userEmail}</span></p>
                            <p className={styles["order-info__specifications-item"]}>شماره موبایل  <span className={styles["order-info__specifications-data"]}>{user.phoneNumber}</span></p>
                        </div>

                    </div>
                    <div className={styles["order-info__product"]}>
                        <div className={styles["order-info__title-container"]}>
                            <h3 className={styles["order-info__title"]}>سفارش شما</h3>
                        </div>
                        <div className={styles["order-info__product-specifications"]}>
                            <div className={styles["order-info__product-specifications-titles"]}>
                                <p className={styles["order-info__product-specifications-title"]}>محصول</p>
                                <p className={styles["order-info__product-specifications-title"]}
                                >جمع جزء</p>
                            </div>
                            <div className={styles["order-info__product-specifications-content"]}>
                                <p className={styles["order-info__product-specifications-info"]}>{basket[0].title}</p>
                                <p className={styles["order-info__product-specifications-info"]}
                                >{basket[0].price.toLocaleString("fa-IR")} تومان</p>
                            </div>
                        </div>
                        <div className={styles["order-info__total-cost"]}>
                            <p className={styles["order-info__total-cost-amount"]}>مجموع</p>
                            <p className={styles["order-info__total-cost-amount"]}>{totalPrice.toLocaleString("fa-IR")} تومان</p>
                        </div>
                    </div>
                </div>
                <div className={styles["button-container"]}>
                    <Button text="ثبت سفارش" onClick={nextStepHandler} />
                </div>

            </div>
        </PurchasingSteps>
    )
}