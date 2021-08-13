import styles from './hero.module.scss';
import Link from "next/link";
import HeroImage from "./HeroImage/heroImage";

const Hero = props => {
    return (
        <div className={styles.hero}>
            <div className={styles.left}>
                <div className={styles.line2}>
                    <img src='/line2.png' />
                </div>

                <h1>The Sound of <br />
                    a new generation.</h1>
                <p>Providing you the medicine of Music, <br />
                    your mind & soul needs!</p>
                <Link href='/songs'><a>Explore</a></Link>
            </div>

            <div className={styles.right}>
                <HeroImage />
            </div>
        </div>
    )
}

export default Hero;