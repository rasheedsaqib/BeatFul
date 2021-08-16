import styles from './song.module.scss';
import {useEffect, useState} from "react";
import axios from "axios";

const Song = props => {

    const {song} = props;

    return(
        <div className={styles.song}>
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
                    <div className={styles.disk + ' ' + styles.rotateDisk}>
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
                    <span className={styles.play}><i className="fas fa-play" /></span>
                    <span className={styles.next}><i className="fas fa-step-forward" /></span>
                </div>
                <p>01:06/03:46</p>
            </div>
        </div>
    )
}

export default Song;