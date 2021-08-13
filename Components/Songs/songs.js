import styles from './songs.module.scss';
import Song from "../../UI/Song/song";
import {useRouter} from "next/router";

const Songs = props => {

    const router = useRouter();
    const page = router.query.page;

    return(
        <div className={styles.songs}>
            <div className={styles.top}>
                <h1>{props.title} <span>(1-9 of 23)</span></h1>
                <div className={styles.input}>
                    <input type='text' name='search' placeholder='Search'/>
                    <span><i className="fas fa-chevron-right" /></span>
                </div>
            </div>

            <div className={styles.allSongs}>

                <Song
                    title='Faasle - By Quratulain Balouch & Kaavish' image='/qb.jpg'
                    artist='Coke Studio' likes='238' liked views='2.5k' />

                <Song
                    title='GOAT - Sidhu Moose Wala' image='/sidhu.jpg'
                    artist='Sidhu Moose Wala' likes='128' views='2.3k' />

                <Song
                    title='Blank Space - Taylor Swift' image='/taylor.jpg'
                    artist='Taylor Swift' likes='331' views='3.1k' />

                <Song
                    title='Faasle - By Quratulain Balouch & Kaavish' image='/qb.jpg'
                    artist='Coke Studio' likes='238' liked views='2.5k' />

                <Song
                    title='GOAT - Sidhu Moose Wala' image='/sidhu.jpg'
                    artist='Sidhu Moose Wala' likes='128' views='2.3k' />

                <Song
                    title='Blank Space - Taylor Swift' image='/taylor.jpg'
                    artist='Taylor Swift' likes='331' views='3.1k' />

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

            <div className={styles.pages}>
                <p>2</p>
                <p>3</p>
                <p>Next</p>
            </div>
        </div>
    )
}

export default Songs;