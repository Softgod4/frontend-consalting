import { TileProps } from './TileProps';
import styles from './SmallTile.module.scss';
import StarSale from './StarSale';
import { useEffect, useRef } from 'react';
import useTimeoutStore from '../../TimeoutStore';
import gsap from 'gsap';

const SmallTile: React.FC<TileProps> = ({
    interval,
    price,
    description,
    discount,
    isSelected,
    onClick,
    PercentageDiscount
}) => {
    const show = useTimeoutStore((state) => state.show);
    const discountsRef: React.RefObject<HTMLParagraphElement> = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!show) {
            const element = discountsRef.current;
            gsap.to(element, {
                position: 'relative',
                opacity: 0,
                duration: 0.5,
                top: '-15px'
            });
        }
    }, [show]);

    return (
        <div className={isSelected ? styles.active : styles.tile} onClick={onClick}>
            <StarSale CompPercentageDiscount={PercentageDiscount} />
            <article>
                <h3>{interval}</h3>
                <h4 className={styles.mainPrice}>{show ? price : discount}</h4>
                <p ref={discountsRef}>
                    <del>{discount}</del>
                </p>
            </article>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default SmallTile;
