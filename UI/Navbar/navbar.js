import styles from './navbar.module.scss';
import Link from "next/link";
import withWidth from "../../HOC/withWidth/withWidth";

const Navbar = props => {
    return(
        <div className={styles.navbar}>

            <Link href='/'>
                <a> <img src='/logo2.svg' /> </a>
            </Link>

            <ul>
                <li> <Link href='/trending'>
                    <a>Trending</a>
                </Link> </li>

                <li> <Link href='/library'>
                    <a>Library</a>
                </Link> </li>

                <li> <Link href='/'>
                    <a>Experience</a>
                </Link> </li>

                <li> <Link href='/'>
                    <a>About</a>
                </Link> </li>

                <li> <Link href='/'>
                    <a>Contact</a>
                </Link> </li>
            </ul>
        </div>
    )
}

export default withWidth(Navbar);