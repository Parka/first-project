import styles from "./styles.module.css";
const Header = (props) => {
    return (
        // hacer otro div para image , y date
// necesito hacer otro div que englobe , search,login y button
        <div className={styles.main} >
           
            <div className={styles.date}>
            <div className={styles.image}></div>
            <span>Thursday, February 25, 2021</span>

            </div>
            <div className={styles.search}></div>
            <div className={styles.login}></div>
            <div className={styles.button}> </div>
            Headerline

        </div>
    )

};

export default Header;