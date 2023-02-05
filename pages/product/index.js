import Image from 'next/image';
import Head from 'next/head';
import styles from './style.module.scss';
import { COURSE_DUMMY_DATA } from '../../dummy-data';
import Button from '../../components/common/Button';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../store/basketSlice';
import useTranslation from 'next-translate/useTranslation'

const Product = (props) => {
    const nextProgressbarStatus = "loging-info";
    const dispatch = useDispatch();
    const router = useRouter();
    const { t: text } = useTranslation();
    function paymentHandler() {
        dispatch(addToBasket(COURSE_DUMMY_DATA))
        localStorage.setItem("product", JSON.stringify(COURSE_DUMMY_DATA));
        document.cookie = `step=${nextProgressbarStatus}`;
        router.push(`/${nextProgressbarStatus}`);
    }
    return (
        <div className={styles["product-section__container"]}>
            <Head>
                <title>{props.title}</title>
                <meta name='description' content={props.description} />
            </Head>
            <h1 className={styles["product-section__header"]}>
                {text("common:title")}
            </h1>
            <div className={styles["product-section__content"]}>
                <div className={styles["product-section__info"]}>
                    <div className={styles["product-section__image"]}>
                        <Image src={props.image} alt={props.title} width={700} height={380} />
                    </div>
                    <div className={styles["product-section__content"]}>

                        <p className={styles["product-section__description"]}>
                            {props.description}
                        </p>
                    </div>
                </div>
                <div className={styles["product-section__price-container"]}>
                    <div className={styles["product-section__price"]}>
                        <span className={styles["product-section__price-label"]}>
                            هزینه آموزش
                        </span>
                        <span className={styles["product-section__price-amount"]}>{props.price.toLocaleString("fa-IR")} تومان</span>
                    </div>
                    <div className={styles["product-section__discount"]}>
                        <span className={styles["product-section__discount-label"]}>
                            قیمت با تخفیف
                        </span>
                        <span className={styles["product-section__discount-amount"]}>{(props.price * (1 - props.discount / 100)).toLocaleString("fa-IR")} تومان</span>
                    </div>
                    <div className={styles["product-section__students"]}>
                        <span className={styles["product-section__students-label"]}>
                            تعداد دانشجو
                        </span>
                        <span className={styles["product-section__students-amount"]}>{props.students}</span>
                    </div>
                    <Button text="پرداخت" onClick={paymentHandler} />

                </div>
            </div>

        </div>
    )
}

export async function getStaticProps(context) {
    return {
        props: COURSE_DUMMY_DATA
    }

}

export default Product;