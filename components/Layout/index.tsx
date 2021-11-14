import Navbar from "../Navbar/Navbar"
import styles from './style.module.css'

export default function Index({ children }) {
    return (
        <div className={styles.container}>
            <Navbar />
            {children}
            <footer>
                <p>This is footer</p>
            </footer>
        </div>
    )
}
