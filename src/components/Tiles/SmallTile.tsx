import { TileProps } from './TileProps';
import styles from './SmallTile.module.scss';
import StarSale from './StarSale';

const SmallTile: React.FC<TileProps> = ({ interval, price, description, discount }) => {
    return (
        <div className={styles.tile}>
            <StarSale CompPercentageDiscount="-30%" />
            <article>
                <h3>{interval}</h3>
                <h4 className={styles.mainPrice}>{price}</h4>
                <p>
                    <del>{discount}</del>
                </p>
            </article>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default SmallTile;
