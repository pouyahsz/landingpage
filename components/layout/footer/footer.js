import Image from 'next/image';
import styles from './footer.module.scss'
const Footer = () => {
    return (

        <footer className={styles.footer}>
            <div className={styles["footer__social-medias"]}>
                <a href="#"><Image src="/assets/images/instagram.svg" alt='instagram logo' width={60} height={60} className={styles["footer__social-media-icon"]} /></a>
                <a href="#"><Image src="/assets/images/youtube.svg" alt='youtube logo' width={60} height={60} className={styles["footer__social-media-icon"]} /></a>
                <a href="#"><Image src="/assets/images/linkedin.svg" alt='linkedin logo' width={60} height={60} className={styles["footer__social-media-icon"]} /></a>
                <a href="#"><Image src="/assets/images/twitter.svg" alt='twitter logo' width={60} height={60} className={styles["footer__social-media-icon"]} /></a>
            </div>
            <div className={styles["footer__copywrite"]}>
                <p className={styles["footer__copywrite-text"]}>&copy; تمام حقوق محفوظ است</p>
            </div>
        </footer>
    )

}
export default Footer;