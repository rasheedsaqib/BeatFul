import styles from './footer.module.scss';
import withWidth from "../../HOC/withWidth/withWidth";

const Footer = props => {
    return(
        <div className={styles.footer}>

            <div className={styles.columns}>
                <div className={styles.column}>
                    <h3>BeatFul</h3>
                    <p>Providing you the medicine of Music, <br />
                        your mind & soul needs!</p>
                </div>

                <div className={styles.column}>
                    <h3>Weekly Top Chart</h3>
                    <ul>
                        <li>Quratulain Balouch</li>
                        <li>Sidhu Moose Wala</li>
                        <li>Taylor Swift </li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>About</h3>
                    <ul>
                        <li>About</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3>Social Media</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>SnapChat</li>
                    </ul>
                </div>
            </div>

            <p className={styles.end}>Coded with <span><i className="fas fa-heart" /></span> | BeatFull 2021</p>

        </div>
    )
}

export default withWidth(Footer, '#FDFDFB');