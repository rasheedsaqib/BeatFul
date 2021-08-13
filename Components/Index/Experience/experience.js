import styles from './experience.module.scss';

const Experience = props => {
    return(
        <div className={styles.experience}>
            <div className={styles.image}>
                <img src='/services.png' />
                <div className={styles.review}>
                    <p>How was your experience?</p>
                    <p className={styles.emoji}> <span>😡</span> <span>😢</span> <span>😊</span> <span>😃</span> <span>😘</span></p>
                </div>
            </div>

            <div className={styles.text}>
                <p className={styles.heading}>Experience</p>
                <h2>With Our Experience <br />
                    We Will Serve You.</h2>
                <p>Since we first opened, we have always prioritized to provide of world class quality music of famous artists to our users.</p>

                <div className={styles.details}>
                    <div className={styles.detail}>
                        <h3>43</h3>
                        <p>Artists</p>
                    </div>

                    <div className={styles.detail}>
                        <h3>530+</h3>
                        <p>Songs</p>
                    </div>

                    <div className={styles.detail}>
                        <h3>50k+</h3>
                        <p>Views</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;