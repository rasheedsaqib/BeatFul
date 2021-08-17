import styles from './artists.module.scss';
import Artist from "../../UI/Artist/artist";
import Song from "../../UI/Song/song";
import {useRouter} from "next/router";
import Link from "next/link";

const Artists = props => {

    const router = useRouter();
    let page = +router.query.page;

    if(!page){
        page = 0;
    }

    const {artists} = props;
    const start = page*9;

    return(
        <div className={styles.artists}>
            <div className={styles.top}>
                <h1>Artists <span>{`(${start+1}-${artists.length < 9 ? artists.length : start+9} of ${artists.length})`}</span></h1>
                <div className={styles.input}>
                    <input type='text' name='search' placeholder='Search'/>
                    <span><i className="fas fa-chevron-right" /></span>
                </div>
            </div>

            <div className={styles.allArtists}>

                {
                    artists.map((artist, index) => {
                        if(index >= start && index < start+9){
                            return(
                                <Artist key={artist.name} image={'/thumbnails/' + artist.image + '.jpg'} name={artist.name} total={artist.songs} id={artist.id} />
                            )
                        }
                    })
                }

            </div>

            <div className={styles.pages}>
                {page !== 0 ? <Link href={`/songs?page=${page-1}`}><a>Previous</a></Link> : null}
                {page+1 !== Math.floor(artists.length/9) && artists.length>9 ? <Link href={`/songs?page=${page+1}`}><a>Next</a></Link> : null}
            </div>
        </div>
    )
}

export default Artists;