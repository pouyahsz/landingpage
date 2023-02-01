import Header from "./header/header";
import Footer from "./footer/footer";
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