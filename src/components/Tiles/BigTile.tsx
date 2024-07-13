import StarSale from './StarSale';
import { TileProps } from './TileProps';
import styles from './BigTile.module.scss';
import useTimeoutStore from '../../TimeoutStore';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BigTile: React.FC<TileProps> = ({
    interval,
    price,
    description,
    discount,
    isSelected,
    onClick
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
            <StarSale CompPercentageDiscount="-70%" />
            <article>
                <h3>{interval}</h3>
                <div className={styles.mainPrice}>
                    <h4>{show ? price : discount}</h4>
                    <p ref={discountsRef}>
                        <del>{discount}</del>
                    </p>
                </div>
            </article>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default BigTile;
