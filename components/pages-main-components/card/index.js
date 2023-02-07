import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
const BlogCard = ({ blogContent }) => {
    const router = useRouter();
    function showBlogHandler() {
        router.push(`${router.asPath}/${blogContent.blogId}`);
        console.log(router)
    }
    return (
        <div className={styles["blog-card"]} onClick={showBlogHandler}>
            <div className={styles["blog-card__container"]}>
                <div className={styles["blog-card__image"]}>
                    <Image src={"/assets/images/search-console-481x310.jpg"} alt={"search console"} width={400} height={220} className={styles["blog-card__image-content"]} />
                </div>
                <div className={styles["blog-card__header"]}>
                    <div className={styles["blog-card__category"]}>
                        <Link href="/blog/seo" className={styles["blog-card__category_content"]}><span>#</span>سئو</Link>
                    </div>
                    <div className={styles["blog-card__title"]}>
                        <h3 className={styles["blog-card__title-content"]}>دوره جامع گوگل سرچ کنسول</h3>
                    </div>
                </div>
                <div className={styles["blog-card__body"]}>
                    <div className={styles["blog-card__paragraph"]}>
                        <p className={styles["blog-card__paragraph-content"]}>در این دوره قدم به قدم کار با ابزار گوگل سرچ کنسول را یاد می‌گیرید. از نصب و راه‌اندازی گرفته تا بررسی کامل وضعیت سایت، عیب‌یابی و آموزش امکانات پیشرفته سرچ کنسول گوگل را در این دوره گنجانده‌ایم.</p>
                    </div>
                </div>
                <div className={styles["blog-card__footer"]}>
                    <div className={styles["blog-card__reading-duration"]}>
                        <span className={styles["blog-card__reading-duration-content"]}>20 دقیقه</span>
                        <Image src={"/assets/images/clock.svg"} alt={"clock"} width={22} height={22} className={styles["blog-card__reading-duration-icon"]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;