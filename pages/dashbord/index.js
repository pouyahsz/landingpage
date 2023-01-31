import styles from './style.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Dashbord = () => {
    const [user, setUser] = useState({});
    const [product, setProduct] = useState({});
    useEffect(() => {
        const temp = {}
        setProduct(JSON.parse(localStorage.getItem("product")))
        temp.userName = localStorage.getItem("name");
        temp.userEmail = localStorage.getItem("email");
        temp.phoneNumber = localStorage.getItem("phone-number");
        temp.postalCode = localStorage.getItem("postal-code");
        temp.nationalCode = localStorage.getItem("national-code");
        setUser(temp)

    }, [])
    return (

        <div className={styles["user-info"]}>
            <div className={styles["user-info__container"]}>
                <div className="user-info__greeting">
                    <p>سلام <span>{user.userName}</span> در لیست زیر میتونی اطلاعات مربوط به دوره هارو ببینی </p>
                </div>
                <h3>دوره های ثبت نام شده</h3>
                <div className={styles["user-info__list"]}>
                    <div className={styles["user-info__list-container"]}>
                        <div className={styles["user-info__list-header"]}>
                            <div className={styles["user-info__list-header-container"]}>
                                <div></div>
                                <h5>عنوان دوره</h5>
                                <h5>هزینه پرداخت شده</h5>
                                <h5>لینک کانال تلگرام دوره</h5>
                            </div>
                        </div>
                        <div className={styles["user-info__courses"]} key={product.id}>
                            <div className={styles["user-info__courses-container"]}>
                                <div className={styles["user-info__course-image"]}>
                                    <Image src={product.image} alt={product.title} width={100} height={70} />
                                </div>
                                <div className={styles["user-info__course-title"]}>
                                    <p>{product.title}</p>
                                </div>
                                <div className={styles["user-info__course-price"]}>
                                    <p>{product.price * (1 - product.discount / 100)}</p>
                                </div>
                                <div className={styles["user-info__course-telegram-chanel"]}>
                                    <a href={product.telegramChanel}>{product.telegramChanel}</a>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>


            </div>
        </div >
    )
}


export default Dashbord;