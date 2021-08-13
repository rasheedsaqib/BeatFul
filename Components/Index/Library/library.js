import styles from './library.module.scss';
import Artist from "../../../UI/Artist/artist";

const Library = props => {
    return(
        <div className={styles.library}>
            <div className={styles.top}>
                <div className={styles.text}>
                    <p>Library</p>
                    <h2>Explore Top Artists</h2>
                </div>

                <div className={styles.change}>
                    <div className={styles.prev} >
                        <span><i className="fas fa-chevron-left" /></span>
                    </div>
                    <div className={styles.next} >
                        <span><i className="fas fa-chevron-right" /></span>
                    </div>
                </div>
            </div>

            <div className={styles.artists}>
                <Artist image='taylor.jpg' name='Taylor Swift' total='23' />
                <Artist image='qb.jpg' name='Quratulain Balouch' total='10' />
                <Artist image='sidhu.jpg' name='Sidhu Moose Wala' total='13' />
            </div>
        </div>
    )
}

export default Library;