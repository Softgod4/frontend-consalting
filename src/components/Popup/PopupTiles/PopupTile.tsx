import PopupSale from '../PopupTiles/PopupSale';
import { TileProps } from '../../Tiles/TileProps';
import styles from './PopupTile.module.scss';

const PopupTile: React.FC<TileProps> = ({
    interval,
    price,
    discount,
    isSelected,
    onClick,
    PercentageDiscount
}) => {
    return (
        <div className={isSelected ? styles.active : styles.tile} onClick={onClick}>
            <article>
                <div className={styles.mainPrice}>
                    <p>{interval}</p>
                    {isSelected ? (
                        <span className={styles.btnActive}>
                            <span></span>
                        </span>
                    ) : (
                        <span className={styles.btn}></span>
                    )}
                </div>
                <span>{discount}</span>
            </article>
            <span className={styles.line}></span>
            <div className={styles.priceFooter}>
                <p>{price}</p>
                <PopupSale CompPercentageDiscount={PercentageDiscount} />
            </div>
        </div>
    );
};

export default PopupTile;
