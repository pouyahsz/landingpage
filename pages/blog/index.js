import styles from './style.module.scss';
import React from 'react';
import BlogCard from '../../components/pages-main-components/card';
const Blog = () => {
    return (
        <div className={styles["blog"]}>
            <div className={styles["blog__container"]}>
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    )
}
export default Blog;
