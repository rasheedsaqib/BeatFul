import styles from './artist.module.scss';
import Link from "next/link";

const Artist = props => {
    return(
        <div className={styles.artist}>
            <div className={styles.image}>
                <Link href='/songs'><a>
                    <img src={props.image} />
                </a></Link>
            </div>
            <div className={styles.details}>
                <h2>{props.name}</h2>
                <p>{props.total} songs</p>
            </div>

        </div>
    )
}

export default Artist;