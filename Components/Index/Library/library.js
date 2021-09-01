import styles from './library.module.scss';
import Artist from "../../../UI/Artist/artist";
import {useState} from "react";

const Library = props => {

    const {artists} = props;
    const [transform, setTransform] = useState(0);

    return(
        <div className={styles.library}>
            <div className={styles.top}>
                <div className={styles.text}>
                    <p>Library</p>
                    <h2>Explore Top Artists</h2>
                </div>

                <div className={styles.change}>
                    <div onClick={()=>setTransform(transform === 0 ? transform : transform+382)} className={styles.prev} >
                        <span><i className="fas fa-chevron-left" /></span>
                    </div>
                    <div onClick={()=>setTransform(transform > -382*(artists.length-3) ? transform-382 : transform)} className={styles.next} >
                        <span><i className="fas fa-chevron-right" /></span>
                    </div>
                </div>
            </div>

            <div style={{transform: `translateX(${transform}px)`}} className={styles.artists}>
                {artists.map(artist => (
                    <Artist key={artist.name} image={'/thumbnails/' + artist.image + '.jpg'} name={artist.name} total={artist.songs} id={artist.id} />
                ))}
            </div>
        </div>
    )
}

export default Library;