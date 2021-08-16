import styles from './songs.module.scss';
import Song from "../../UI/Song/song";
import {useRouter} from "next/router";
import Link from "next/link";

const Songs = props => {

    const router = useRouter();
    let page = +router.query.page;

    if(!page){
        page = 0;
    }

    const { songs } = props;
    const start = page*9;

    if(page >= Math.floor(songs.length/9)){
        // router.push('/404');
    }

    return(
        <div className={styles.songs}>
            <div className={styles.top}>
                <h1>{props.title} <span>{`(${start+1}-${songs.length < 9 ? songs.length : start+9} of ${songs.length})`}</span></h1>
                <div className={styles.input}>
                    <input type='text' name='search' placeholder='Search'/>
                    <span><i className="fas fa-chevron-right" /></span>
                </div>
            </div>

            <div className={styles.allSongs}>

                {
                    songs.map((song, index) => {
                        if(index >= start && index < start+9){
                            return(
                                <Song
                                    key={song.id} id={song.id} title={song.title} image={`/thumbnails/${song.id}.jpg`}
                                    artist={song.artist} likes={song.likes} views={song.views} />
                            )
                        }
                    })
                }

            </div>

            <div className={styles.pages}>
                {page !== 0 ? <Link href={`/songs?page=${page-1}`}><a>Previous</a></Link> : null}
                {page+1 !== Math.floor(songs.length/9) && songs.length>9 ? <Link href={`/songs?page=${page+1}`}><a>Next</a></Link> : null}
            </div>
        </div>
    )
}

export default Songs;