import styles from './style.module.scss';
import Image from 'next/image';
const BlogCard = () => {
    return (
        <div className={styles["blog-card"]}>
            <div className={styles["blog-card__container"]}>
                <div className={styles["blog-card__image"]}>
                    <Image src={"/assets/images/search-console-481x310.jpg"} alt={"search console"} width={400} height={220} className={styles["blog-card__image-content"]} />
                </div>
                <div className={styles["blog-card__header"]}>
                    <div className={styles["blog-card__category"]}>
                        <span className={styles["blog-card__category_content"]}>سئو</span>
                    </div>
                    <div className={styles["blog-card__title"]}>
                        <h3 className={styles["blog-card__title-content"]}>دوره جامع گوگل سرچ کنسول</h3>
                    </div>
                </div>
                <div className={styles["blog-card__body"]}>
                    <div className={styles["blog-card__paragraph"]}>
                        <p className={styles["blog-card__paragraph-content"]}>در این دوره قدم به قدم کار با ابزار گوگل سرچ کنسول را یاد می‌گیرید. از نصب و راه‌اندازی گرفته تا بررسی کامل وضعیت سایت، عیب‌یابی و آموزش امکانات پیشرفته سرچ کنسول گوگل را در این دوره گنجانده‌ایم.</p>
                    </div>
                    <div className={styles["blog-card__date-author"]}>
                        <p className={styles["blog-card__date-author-content"]}></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;