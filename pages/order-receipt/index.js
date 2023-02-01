import Button from '../../components/common/Button';
import PurchasingSteps from '../../components/common/PurchasingSteps';
import styles from './style.module.scss';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SetUserInformation from '../../components/common/setuserInformation';

export default function OrderInfo() {
    const currentProgressbarStatus = "order-receipt";
    const nextProgressbarStatus = "extra-info";
    const [user, setUser] = useState({})
    const [product, setProduct] = useState({})
    const router = useRouter();

    useEffect(() => {
        const temp = {};
        setProduct(JSON.parse(localStorage.getItem("product")))
        temp.userName = localStorage.getItem("name");
        temp.userEmail = localStorage.getItem("email");
        temp.phoneNumber = localStorage.getItem("phone-number");
        temp.postalCode = localStorage.getItem("postal-code");
        temp.nationalCode = localStorage.getItem("national-code");
        setUser(temp);

    }, [])
    const totalPrice = (product.price * (1 - product.discount / 100));
    function nextStepHandler() {
        document.cookie = `step=${nextProgressbarStatus}`
        router.replace(`/${nextProgressbarStatus}`);
    }
    return (
        <SetUserInformation>
            <PurchasingSteps step={currentProgressbarStatus}>
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
                                    <p className={styles["order-info__product-specifications-info"]}>{product.title}</p>
                                    <p className={styles["order-info__product-specifications-info"]}
                                    >{product.price && product.price.toLocaleString('fa-IR')} تومان</p>
                                </div>
                            </div>
                            <div className={styles["order-info__total-cost"]}>
                                <p className={styles["order-info__total-cost-amount"]}>مجموع</p>
                                <p className={styles["order-info__total-cost-amount"]}>{totalPrice.toLocaleString('fa-IR')} تومان</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles["button-container"]}>
                        <Button text="ثبت سفارش" onClick={nextStepHandler} />
                    </div>

                </div>
            </PurchasingSteps>

        </SetUserInformation>

    )
}
export async function getServerSideProps(context) {
    const cookies = context.req.headers.cookie;
    const step = cookies.slice(5);
    if (step !== "order-receipt") {
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