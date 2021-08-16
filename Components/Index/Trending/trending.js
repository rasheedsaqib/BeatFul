import styles from './trending.module.scss';
import Song from "../../../UI/Song/song";
import {useState} from "react";

const Trending = props => {

    const {trending} = props;
    const [transform, setTransform] = useState(0);

    return(
        <div className={styles.trending}>
            <div className={styles.top}>
                <div className={styles.text}>
                    <p>Trending</p>
                    <h2>Explore Top Music</h2>
                </div>

                <div className={styles.change}>
                    <div onClick={()=>setTransform(transform === 0 ? transform : transform+382)} className={styles.prev} >
                        <span><i className="fas fa-chevron-left" /></span>
                    </div>
                    <div onClick={()=>setTransform(transform > -382*(trending.length-3) ? transform-382 : transform)} className={styles.next} >
                        <span><i className="fas fa-chevron-right" /></span>
                    </div>
                </div>
            </div>

            <div style={{transform: `translateX(${transform}px)`}} className={styles.songs}>
                {trending.map(song => (
                    <Song
                        key={song.id} id={song.id} title={song.title} image={`/thumbnails/${song.id}.jpg`}
                        artist={song.artist} likes={song.likes} views={song.views} />
                ))}
            </div>
        </div>
    )
}

export default Trending;