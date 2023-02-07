import styles from './style.module.scss';
import React from 'react';
import BlogCard from '../../../components/pages-main-components/card';
import Link from 'next/link';
import { useRouter } from 'next/router';
const BlogType = () => {
    const router = useRouter();
    const blogType = router.query.blogType;
    if (blogType === "all") {
        console.log("first")
    }
    return (
        <div className={styles["blog"]}>
            <div className={styles["blog__container"]}>
                <div className={styles["blog__title-section"]}>
                    <div className="d">
                        <h1 className={styles["blog__title"]}>فرانت هوکس</h1>
                        <p className={styles["blog__description"]}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                    </div>
                </div>
                <div className={styles["blog__categories-container"]}>
                    <ul className={styles["blog__categories"]}>
                        <li className={styles['blog__categorie']}><Link scroll={false} href="/blog/all" className={`${styles["blog__categorie-button"]} ${blogType === "all" ? styles["blog__categorie-button--active"] : ""}`}>همه</Link></li>
                        <li className={styles['blog__categorie']}><Link scroll={false} href="/blog/seo" className={`${styles["blog__categorie-button"]} ${blogType === "seo" ? styles["blog__categorie-button--active"] : ""}`}>سئو</Link></li>
                        <li className={styles['blog__categorie']}><Link scroll={false} href="/blog/java-script" className={`${styles["blog__categorie-button"]} ${blogType === "java-script" ? styles["blog__categorie-button--active"] : ""}`}>جاواسکریپت</Link></li>
                        <li className={styles['blog__categorie']}><Link scroll={false} href="/blog/resume" className={`${styles["blog__categorie-button"]} ${blogType === "resume" ? styles["blog__categorie-button--active"] : ""}`}>رزومه</Link></li>
                        <li className={styles['blog__categorie']}><Link scroll={false} href="/blog/next" className={`${styles["blog__categorie-button"]} ${blogType === "next" ? styles["blog__categorie-button--active"] : ""}`}>نکست </Link></li>
                        <li className={styles['blog__categorie']}><Link scroll={false} href="/blog/react" className={`${styles["blog__categorie-button"]} ${blogType === "react" ? styles["blog__categorie-button--active"] : ""}`}>ری اکت</Link></li>
                    </ul>
                </div>
                <div className={styles["blog__cards"]}>
                    <BlogCard blogContent={{ blogId: "m1" }} />
                    <BlogCard blogContent={{ blogId: "m2" }} />
                    <BlogCard blogContent={{ blogId: "m3" }} />
                </div>

            </div>
        </div>
    )
}
export default BlogType;
