import Image from 'next/image';
import React from 'react'
import styles from './style.module.scss';
const BlogDetail = ({ image, alt, title, category, content }) => {

    return (
        <div className={styles["blog-detail"]}>
            <div className={styles["blog-detail__header"]}>
                <div className={styles["blog-detail__title-container"]}>
                    <div className={styles["blog-detail__title-category"]}>
                        {category.map((element, index) => {
                            return (
                                <span key={index} className={styles["blog-detail__title-chip"]}>{element}</span>
                            )
                        })}
                    </div>
                    <h1 className={styles["blog-detail__title"]}>{title}</h1>

                </div>
                <div className={styles["blog-detail__image-container"]}>
                    <Image src={`/assets/images/${image}`} alt={alt} width={700} height={400} className={styles["blog-detail__image"]} />
                </div>
            </div>
            <div className={styles["blog-detail__body"]}>
                <p>
                    {content}
                </p>
            </div>
        </div>
    )
}
export async function getStaticPaths() {
    return {
        paths: [

        ],
        fallback: true
    }
}

export async function getStaticProps(context) {
    const dummyData = {
        image: "search-console-481x310.jpg",
        alt: "search-console",
        title: "دوره جامع گوگل سرچ کنسول",
        category: ["سئو"],
        content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."

    }
    return {
        props: dummyData
    }
}

export default BlogDetail;
