import { useEffect, useState, useRef } from 'react';
import styles from '../Timer/Timer.module.scss';
import gsap from 'gsap';

const Timer: React.FC<{}> = () => {
    const [second, setSecond] = useState(35);
    const [minutes, setMinutes] = useState(0);
    const [stop, setStop] = useState(false);

    const dotsRef: React.RefObject<HTMLParagraphElement> = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (second == 30) {
            const element = dotsRef.current;
            gsap.to(element, {
                opacity: 0.7,
                duration: 1.2,
                repeat: 30,
                yoyo: true
            });
        }
    }, [second]);

    useEffect(() => {
        if (stop) return;
        const intervalId = setInterval(() => {
            setSecond((prevSecond) => {
                if (prevSecond === 0) {
                    setMinutes((prevMinutes) => {
                        if (prevMinutes === 0) {
                            setStop(true);
                            return prevMinutes;
                        }
                        return prevMinutes - 1;
                    });
                    return 59;
                }
                return prevSecond - 1;
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [stop]);

    useEffect(() => {
        if (minutes === 0 && second === 0) {
            setStop(true);
        }
    }, [minutes, second]);

    return (
        <div className={styles.timer} ref={dotsRef}>
            <article>
                <p className={second <= 30 && minutes === 0 ? styles.warningCount : styles.count}>
                    {minutes <= 9 ? `0${minutes}` : minutes}
                </p>
                <p className={styles.text}>минут</p>
            </article>
            <p className={second <= 30 && minutes === 0 ? styles.warningDots : styles.dots}>:</p>
            <article>
                <p className={second <= 30 && minutes === 0 ? styles.warningCount : styles.count}>
                    {second <= 9 ? `0${second}` : second}
                </p>
                <p className={styles.text}>секунд</p>
            </article>
        </div>
    );
};

export default Timer;