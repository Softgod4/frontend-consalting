import StarSale from './StarSale';
import { TileProps } from './TileProps';
import styles from './MediaTile.module.scss';
import useTimeoutStore from '../../TimeoutStore';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MediaTile: React.FC<TileProps> = ({
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
            <StarSale CompPercentageDiscount="-30%" />
            <article>
                <div className={styles.text}>
                    <h3>{interval}</h3>
                    <p className={styles.description}>{description}</p>
                </div>

                <div className={styles.price}>
                    <article>
                        <h4>{show ? price : discount}</h4>
                        <p ref={discountsRef}>
                            <del>{discount}</del>
                        </p>
                    </article>
                </div>
            </article>
        </div>
    );
};

export default MediaTile;
