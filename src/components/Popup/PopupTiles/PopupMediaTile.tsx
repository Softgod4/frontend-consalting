import PopupSale from '../PopupTiles/PopupSale';
import { TileProps } from '../../Tiles/TileProps';
import styles from './PopupMediaTile.module.scss';

const PopupMediaTile: React.FC<TileProps> = ({
    interval,
    price,
    discount,
    isSelected,
    onClick,
    PercentageDiscount
}) => {
    return (
        <div className={isSelected ? styles.active : styles.tile} onClick={onClick}>
            <div className={styles.mainText}>
                <span>{interval}</span>
                <article>
                    <p>{price}</p>
                    <PopupSale CompPercentageDiscount={PercentageDiscount} />
                </article>
            </div>
            <div className={styles.mainCheck}>
                {isSelected ? (
                    <span className={styles.btnActive}>
                        <span></span>
                    </span>
                ) : (
                    <span className={styles.btn}></span>
                )}
                <p>{discount}</p>
            </div>
        </div>
    );
};

export default PopupMediaTile;
