import Header from "./header/Header";
import Footer from "./footer/Footer";
import styles from './layout.module.scss';
const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <div className={styles["layout__children-container"]}>
                {children}

            </div>
            <Footer />
        </div>
    )
}
export default Layout;