import {useEffect, useRef, useState} from "react";

import styles from './song.module.scss';
import Wave from "./Wave/wave";

const Song = props => {

    const {song} = props;
    let audio = useRef(null);

    const [playing, setPlaying] = useState(true);
    const [currentTime, setCurrentTime] = useState('00:00');

    useEffect(()=>{
       audio.addEventListener('ended', ()=>{
           setPlaying(false);
       });
    });

    useEffect(()=>{
        const ac = new AbortController();
        audio.addEventListener('timeupdate', context => {
            const durationSeconds = (context.target.duration % 60).toFixed(0);
            const durationMinutes = ((context.target.duration / 60) % 60).toFixed(0);

            setCurrentTime(new Date(Math.floor(context.target.currentTime * 1000)).toISOString().substr(14, 5)
                + ' / '+ (durationMinutes<10 ? '0'+durationMinutes : durationMinutes) + ':' + (durationSeconds<10 ? '0'+durationSeconds : durationSeconds));
        });

        return ac.abort();

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

    const increaseCurrentTime = () => {
        if(audio.currentTime < (audio.duration - 6)){
            audio.currentTime += 5;
        }
    }

    const decreaseCurrentTime = () => {
        if(audio.currentTime > 6){
            audio.currentTime -= 5;
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
                        <p>({song.views < 1000 ? song.views : (song.views/1000).toFixed(1)+ 'k'} Views)</p>
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
                    <Wave playing={playing} />
                    <div className={styles.line} />
                </div>
                <div className={styles.actions}>
                    <span onClick={()=>decreaseCurrentTime()} className={styles.prev}><i className="fas fa-step-backward" /></span>
                    <span onClick={()=>togglePlay()} className={styles.play}> { playing ? (<i className="fas fa-pause"/>) : (<i className="fas fa-play" />) } </span>
                    <span onClick={()=>increaseCurrentTime()} className={styles.next}><i className="fas fa-step-forward" /> </span>
                </div>
                <p>{currentTime}</p>
            </div>
        </div>
    )
}

export default Song;