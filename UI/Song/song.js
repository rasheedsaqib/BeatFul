import styles from './song.module.scss';
import Link from "next/link";

const Song = props => {
    return(
        <div className={styles.song}>
            <div className={styles.image}>
                <Link href='/songs/1'><a>
                    <img src={props.image} />
                </a></Link>
                <span style={{opacity: props.liked ? 1 : 0.4}}><i className="fas fa-heart" /></span>
            </div>
            <div className={styles.details}>
                <h2>{props.title}</h2>
                <p>{props.artist}</p>

                <div className={styles.bottom}>
                    <div className={styles.likes}>
                        <span><i className="fas fa-heart" /></span>
                        <p>{props.likes}</p>
                    </div>
                    <p>({props.views} Views)</p>
                </div>

            </div>

        </div>
    )
}

export default Song;