import styles from './reviews.module.scss';

const Reviews = props => {
    return(
        <div className={styles.reviews}>
            <div className={styles.text}>
                <p className={styles.heading}>Reviews</p>
                <h2>What Our Customers <br />
                    Say About Us.</h2>
                <p>"I'm a freelancer & really like using BeatFul for playing background music while I'm doing my work. Thanks BeatFul!"</p>
                <p className={styles.name}>Alisha Joseph <span>(Freelancer)</span></p>
                <p className={styles.stars}>
                    <span><i className="fas fa-star" /></span>
                    <span><i className="fas fa-star" /></span>
                    <span><i className="fas fa-star" /></span>
                    <span><i className="fas fa-star" /></span>
                    <span><i className="fas fa-star" /></span>
                </p>
            </div>
            <div className={styles.image}>
                <img src='/world.png' />
            </div>
        </div>
    )
}

export default Reviews;