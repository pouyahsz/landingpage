import styles from './header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
const Header = () => {
    const [menuStatus, setMenuStatus] = useState(false);
    const router = useRouter();
    function openMenuHandler() {
        setMenuStatus((prevState) => !prevState);
    }
    return (
        <header className={styles.header}>
            <div className={styles["wide-header"]}>
                <div className={styles["wide-header__container"]}>
                    <div className={styles["wide-header__logo-container"]}>
                        <Image src="/assets/images/butter.png" alt="butter logo" height="150" width="150" className={styles["wide-header__logo"]} />
                    </div>
                    <nav className={styles["wide-header__navigation-bar"]}>
                        <ul className={styles["wide-header__list"]}>
                            <Link href="#"><li className={styles["wide-header__list-items"]}>صفحه نخست</li></Link>

                            <Link href="#"><li className={styles["wide-header__list-items"]}>محصولات</li></Link>
                            <Link href="#"><li className={styles["wide-header__list-items"]}>درباره ما</li></Link>
                            <Link href="#"><li className={styles["wide-header__list-items"]}>تماس با ما</li></Link>

                        </ul>
                    </nav>
                    <div className={styles["wide-header__user-account"]}>
                        {/* {router.locales.map((locale) => { return <Link href={router.asPath} locale={locale} key={locale}>{locale}</Link> }

                        )} */}
                        <Image src="/assets/images/user.svg" alt="user logo" height="90" width="90" className={styles["wide-header__user-account-logo"]} />
                    </div>
                </div>
            </div>
            <div className={styles["narrow-header"]}>
                <div className={styles["narrow-header__container"]}>
                    <div className={styles["narrow-header__navigation-bar"]}>
                        <div className={styles["narrow-header__bars"]}>
                            <button className={styles["narrow-header__bars-button"]} onClick={openMenuHandler}>
                                {!menuStatus && <Image src="/assets/images/bars.svg" alt="hamburger menu" height="90" width="90" className={styles["narrow-header__bars"]} />}
                                {menuStatus && <Image src="/assets/images/close.svg" alt="hamburger menu" height="90" width="90" className={styles["narrow-header__bars"]} />}

                            </button>
                            <div className={menuStatus ? `${styles["narrow-header_navigation-container"]} ${styles["narrow-header_navigation-container--open"]}` : `${styles["narrow-header_navigation-container"]} ${styles["narrow-header_navigation-container--close"]}`}>
                                <nav className={styles["narrow-header_navigation-bar"]}>
                                    <ul className={styles["narrow-header__list"]}>
                                        <li className={styles["narrow-header__list-items"]}><Link href="#">صفحه نخست</Link></li>
                                        <li className={styles["narrow-header__list-items"]}><Link href="#">محصولات</Link></li>
                                        <li className={styles["narrow-header__list-items"]}><Link href="#">درباره ما</Link></li>
                                        <li className={styles["narrow-header__list-items"]}><Link href="#">تماس با ما</Link></li>
                                    </ul>
                                </nav>
                            </div>

                        </div>
                    </div>
                    <div className={styles["narrow-header__logo-container"]}>
                        <Image src="/assets/images/butter.png" alt="butter logo" height="110" width="150" className={styles["narrow-header__logo"]} />
                    </div>
                    <div className={styles["narrow-header__user-account"]}>
                        <Image src="/assets/images/user.svg" alt="user logo" height="90" width="90" className={styles["narrow-header__user-account-logo"]} />
                    </div>

                </div>
            </div>

        </header>
    )
}

export default Header;