import styles from './style.module.scss';
import { useSelector } from 'react-redux';
import Image from 'next/image';

const Dashbord = () => {
    const user = useSelector(state => state.user.userInfo);
    const basket = useSelector(state => state.basket.selectedItems);
    return (

        <div className={styles["user-info"]}>
            <div className={styles["user-info__container"]}>
                <div className="user-info__greeting">
                    <p>سلام <span>{user.userName}</span> در لیست زیر میتونی اطلاعات مربوط به دوره هارو ببینی </p>
                </div>
                {/* <div className="user-info__telegram-chanel">
                    <p>لینک دوره : <a href={basket[0].telegramChanel}>{basket[0].telegramChanel}</a></p>
                </div> */}
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
                        {basket.map((element) => {
                            return (
                                <div className={styles["user-info__courses"]} key={element.id}>
                                    <div className={styles["user-info__courses-container"]}>
                                        <div className={styles["user-info__course-image"]}>
                                            <Image src={element.image} alt={element.title} width={100} height={70} />
                                        </div>
                                        <div className={styles["user-info__course-title"]}>
                                            <p>{element.title}</p>
                                        </div>
                                        <div className={styles["user-info__course-price"]}>
                                            <p>{element.price * (1 - element.discount / 100)}</p>
                                        </div>
                                        <div className={styles["user-info__course-telegram-chanel"]}>
                                            <a href={element.telegramChanel}>{element.telegramChanel}</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>



                </div>


            </div>
        </div >
    )
}


export default Dashbord;