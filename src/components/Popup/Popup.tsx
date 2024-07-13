import { useEffect, useRef, useState } from 'react';
import styles from './Popup.module.scss';
import usePopupStore from './PopupStore';
import gsap from 'gsap';
import PopupTile from './PopupTiles/PopupTile';
import PopupMediaTile from './PopupTiles/PopupMediaTile';
import tilesData from './PopupTileData';

const Popup: React.FC<{}> = () => {
    const [selectedTile, setSelectedTile] = useState<number | null>(null);
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(window.innerWidth < 1200);
    const { PopupToggleShow, PopupShow } = usePopupStore();

    const closeRef: React.RefObject<HTMLParagraphElement> = useRef<HTMLParagraphElement>(null);
    const closeBtnAnimation: React.RefObject<HTMLParagraphElement> =
        useRef<HTMLParagraphElement>(null);

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 1000);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const close = closeRef.current;

        if (PopupShow) {
            gsap.from(close, {
                opacity: 0,
                duration: 0.5
            });
            gsap.to(close, {
                opacity: 1,
                duration: 0.5
            });
        }
    }, [PopupShow]);

    const hoverAnimationClose = () => {
        const close = closeBtnAnimation.current;
        gsap.to(close, {
            rotation: 180,
            duration: 1
        });
    };

    const handleTileClick = (tileId: number) => {
        setSelectedTile(tileId);
    };

    return (
        <div className={styles.popup} onClick={(e) => e.stopPropagation()} ref={closeRef}>
            <div className={styles.popupContent}>
                <div className={styles.signboard}>
                    <p>горящее предложение</p>
                </div>
                <span
                    onClick={() => PopupToggleShow()}
                    onMouseEnter={() => hoverAnimationClose()}
                    ref={closeBtnAnimation}
                >
                    <img src="/close.svg" alt="close-btn" />
                </span>
                <article className={styles.mainText}>
                    <h3>
                        НЕ УПУСТИ СВОЙ <span>ПОСЛЕДНИЙ ШАНС</span>
                    </h3>
                    <p>
                        Мы знаем, как трудно начать.. <span>Поэтому!</span>
                    </p>
                    <div className={styles.mainSales}>
                        <p>
                            Дарим скидку для <span>лёгкого старта</span> 🏃‍♂️
                        </p>
                    </div>
                </article>
                <div className={styles.tiles}>
                    <p>Посмотри, что мы для тебя приготовили 🔥</p>
                    <div>
                        {tilesData.map((tile, index) => {
                            const TileComponent = isSmallScreen ? PopupMediaTile : PopupTile;
                            const tileProps = isSmallScreen ? tile.small : tile.large;
                            return (
                                <TileComponent
                                    key={index}
                                    interval={tileProps.interval}
                                    price={tileProps.price + '₽'}
                                    description={tileProps.description}
                                    discount={tileProps.discount + '₽'}
                                    PercentageDiscount={tileProps.precentage}
                                    isSelected={selectedTile === tileProps.id}
                                    onClick={() => handleTileClick(tileProps.id)}
                                />
                            );
                        })}
                    </div>
                </div>
                <button className={styles.popupButton}>Начать тренироваться</button>
            </div>
        </div>
    );
};

export default Popup;
