import styles from './heroImage.module.scss'

const HeroImage = props => {
    return(
        <div className={styles.image}>
            <div className={styles.qb} />
            <div className={styles.pink} />
            <div className={styles.light} />
            <div className={styles.black} />
            <img src='/line1.png' />
        </div>
    )
}

export default HeroImage;