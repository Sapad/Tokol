import { signIn, signOut, useSession } from "next-auth/react"
import styles from './Navbar.module.scss'
const Navbar = () => {
    const { data } = useSession();

    return (
        <div className={styles.navbar}>
            <button onClick={() => data ? signOut() : signIn()} className={styles.navbar__button}>{data ? "Logout" : "Login"}</button>
        </div>
    )
}

export default Navbar;