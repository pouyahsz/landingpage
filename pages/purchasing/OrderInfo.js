import Button from '../../components/common/Button';
import styles from './style.module.scss';

export default function OrderInfo() {
    return (
        <div className={styles["order-info"]}>
            <div className={styles["order-info__container"]}>
                <div className={styles["order-info__customer"]}>
                    <div className={styles["order-info__title-container"]}>
                        <h3 className={styles["order-info__title"]}>جزییات صورتحساب</h3>
                    </div>
                    <div className={styles["order-info__specifications"]}>
                        <p className={styles["order-info__specifications-item"]}>نام  <span className={styles["order-info__specifications-data"]}>{"پویا حسنعلی زاده"}</span></p>
                        <p className={styles["order-info__specifications-item"]}>ایمیل  <span className={styles["order-info__specifications-data"]}>{"hasanalizadehpouya@gmail.com"}</span></p>
                        <p className={styles["order-info__specifications-item"]}>شماره موبایل  <span className={styles["order-info__specifications-data"]}>{"09915856088"}</span></p>
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
                            <p className={styles["order-info__product-specifications-info"]}>دوره جامع و پیشرفته جاوااسکریپت</p>
                            <p className={styles["order-info__product-specifications-info"]}
                            >۱,۵۳۹,۰۰۰ تومان</p>
                        </div>
                    </div>
                    <div className={styles["order-info__total-cost"]}>
                        <p className={styles["order-info__total-cost-amount"]}>مجموع</p>
                        <p className={styles["order-info__total-cost-amount"]}>۱,۵۳۹,۰۰۰ تومان</p>
                    </div>
                </div>
            </div>

            <Button text="ثبت سفارش" />
        </div>
    )
}