import styles from './artists.module.scss';
import Artist from "../../UI/Artist/artist";

const Artists = props => {
    return(
        <div className={styles.artists}>
            <div className={styles.top}>
                <h1>Artists <span>(1-9 of 23)</span></h1>
                <div className={styles.input}>
                    <input type='text' name='search' placeholder='Search'/>
                    <span><i className="fas fa-chevron-right" /></span>
                </div>
            </div>

            <div className={styles.allArtists}>
                <Artist image='taylor.jpg' name='Taylor Swift' total='23' />
                <Artist image='qb.jpg' name='Quratulain Balouch' total='10' />
                <Artist image='sidhu.jpg' name='Sidhu Moose Wala' total='13' />


                <Artist image='taylor.jpg' name='Taylor Swift' total='23' />
                <Artist image='qb.jpg' name='Quratulain Balouch' total='10' />
                <Artist image='sidhu.jpg' name='Sidhu Moose Wala' total='13' />


                <Artist image='taylor.jpg' name='Taylor Swift' total='23' />
                <Artist image='qb.jpg' name='Quratulain Balouch' total='10' />
                <Artist image='sidhu.jpg' name='Sidhu Moose Wala' total='13' />

            </div>

            <div className={styles.pages}>
                <p>2</p>
                <p>3</p>
                <p>Next</p>
            </div>
        </div>
    )
}

export default Artists;