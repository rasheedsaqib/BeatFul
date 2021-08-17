import styles from './song.module.scss';
import {useEffect, useRef, useState} from "react";

const Song = props => {

    const {song} = props;
    let audio = useRef(null);

    const [playing, setPlaying] = useState(true);
    const [currentTime, setCurrentTime] = useState('00:00');

    useEffect(()=>{
        audio.addEventListener('timeupdate', context => {
            const s = parseInt(context.target.duration % 60);
            const m = parseInt((context.target.duration / 60) % 60);

            setCurrentTime(new Date(Math.floor(context.target.currentTime * 1000)).toISOString().substr(14, 5) + ' / ' + (m<10 ? '0'+m : m) +':'+ s);
        })
    }, [currentTime]);

    const togglePlay = ()=>{
        if (playing){
            audio.pause();
            setPlaying(false);
        }
        else {
            audio.play();
            setPlaying(true);
        }
    }

    return(
        <div className={styles.song}>

            <audio autoPlay ref={el=>audio=el} src={`/audios/${song.id}.mp3`}>
                Your browser does not support the
                <code>audio</code> element.
            </audio>

            <div className={styles.details}>
                <div className={styles.name}>
                    <h1>{song.title} <br /> <span>{song.artist}</span></h1>

                    <div className={styles.bottom}>
                        <div className={styles.likes}>
                            <span><i className="fas fa-heart" /></span>
                            <p>{song.likes}</p>
                        </div>
                        <p>({song.views} Views)</p>
                    </div>

                </div>

                <div className={styles.cd}>
                    <div className={playing ? styles.disk + ' ' + styles.rotateDisk : styles.disk}>
                        <div className={styles.outer} />
                        <div style={{backgroundImage: `url(/thumbnails/${song.id}.jpg)`}} className={styles.middle} />
                        <div className={styles.inner} >
                            <img src='/logo.svg' />
                        </div>
                    </div>

                    <div style={{backgroundImage: `url(/thumbnails/${song.id}.jpg)`}} className={styles.cover} />
                </div>
            </div>

            <div className={styles.controller}>
                <div className={styles.duration}>
                    <img src='/wave.png' />
                    <div className={styles.line} />
                </div>
                <div className={styles.actions}>
                    <span className={styles.prev}><i className="fas fa-step-backward" /></span>
                    <span onClick={()=>togglePlay()} className={styles.play}> { playing ? (<i className="fas fa-pause"/>) : (<i className="fas fa-play" />) } </span>
                    <span className={styles.next}><i className="fas fa-step-forward" /> </span>
                </div>
                <p>{currentTime}</p>
            </div>
        </div>
    )
}

export default Song;