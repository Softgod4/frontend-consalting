import styles from './Navbar.module.scss';
import Timer from '../Timer/Timer';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <article>
                <h2>Скидка действует: </h2>
                <Timer />
            </article>
        </div>
    );
};

export default Navbar;
