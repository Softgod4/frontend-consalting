import styles from './StarSale.module.scss';
import useTimeoutStore from '../../TimeoutStore';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface StarProps {
    CompPercentageDiscount: string;
}

const StarSale: React.FC<StarProps> = ({ CompPercentageDiscount }) => {
    const show = useTimeoutStore((state) => state.show);
    const dotsRef: React.RefObject<HTMLParagraphElement> = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!show) {
            const element = dotsRef.current;
            gsap.to(element, {
                opacity: 0,
                scale: 0,
                rotation: 360,
                duration: 1.5
            });
        }
    }, [show]);

    return (
        <span className={styles.main} ref={dotsRef}>
            <p>{CompPercentageDiscount}</p>
        </span>
    );
};

export default StarSale;
