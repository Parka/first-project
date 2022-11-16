import styles from "./styles.module.css";
import pelota from "./pelota.png";
import search from "./Search.png";
const Header = (props) => {
    return (
        // hacer otro div para image , y date ---> flex
        // necesito hacer otro div que englobe , search,login y button ---> 
        <div className={styles.main} >

            <div className={styles.date}>

                <img className={styles.icon} src={pelota} alt="icono"/>
                <span>Thursday, February 25, 2021</span>

            </div>
            <div className={styles.image}></div>
            <div className={styles.right}>
                <img className={styles.search} src={search} alt="search icon"/>
                <div className={styles.login}>Sign in</div>
                <button className={styles.button}>Suscribe </button>
            </div>


        </div>
    )

};

export default Header;