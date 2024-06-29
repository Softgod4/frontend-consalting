import StarSale from './StarSale';
import { TileProps } from './TileProps';
import styles from './BigTile.module.scss';

const BigTile: React.FC<TileProps> = ({
    interval,
    price,
    description,
    discount,
    isSelected,
    onClick
}) => {
    return (
        <div className={isSelected ? styles.active : styles.tile} onClick={onClick}>
            <StarSale CompPercentageDiscount="-30%" />
            <article>
                <h3>{interval}</h3>
                <div className={styles.mainPrice}>
                    <h4>{price}</h4>
                    <p>
                        <del>{discount}</del>
                    </p>
                </div>
            </article>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default BigTile;
