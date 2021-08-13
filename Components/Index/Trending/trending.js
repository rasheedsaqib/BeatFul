import styles from './trending.module.scss';
import Song from "../../../UI/Song/song";

const Trending = props => {
    return(
        <div className={styles.trending}>
            <div className={styles.top}>
                <div className={styles.text}>
                    <p>Trending</p>
                    <h2>Explore Top Music</h2>
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

            <div className={styles.songs}>
                <Song
                    title='Faasle - By Quratulain Balouch & Kaavish' image='/qb.jpg'
                    artist='Coke Studio' likes='238' liked views='2.5k' />

                <Song
                    title='GOAT - Sidhu Moose Wala' image='/sidhu.jpg'
                    artist='Sidhu Moose Wala' likes='128' views='2.3k' />

                <Song
                    title='Blank Space - Taylor Swift' image='/taylor.jpg'
                    artist='Taylor Swift' likes='331' views='3.1k' />
            </div>
        </div>
    )
}

export default Trending;