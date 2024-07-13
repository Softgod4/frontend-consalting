import Container from './components/Container/Container';
import styles from '../src/assets/Main.module.scss';
import SmallTile from './components/Tiles/SmallTile';
import BigTile from './components/Tiles/BigTile';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap/all';
import Navbar from './components/Navbar/Navbar';
import MediaTile from './components/Tiles/MediaTile';
import tilesData from './TilesData';
import Popup from './components/Popup/Popup';
import usePopupStore from '../src/components/Popup/PopupStore';

const App = () => {
    const [selectedTile, setSelectedTile] = useState<number | null>(null);
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(window.innerWidth < 1200);
    const buttonMain: React.RefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null);
    const { PopupShow } = usePopupStore();

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 1000);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const element = buttonMain.current;
        gsap.to(element, {
            backgroundColor: '#fc5b45',
            duration: 1,
            repeat: -1,
            yoyo: true
        });
    });

    const handleTileClick = (tileId: number) => {
        setSelectedTile(tileId);
    };

    return (
        <>
            {PopupShow ? <Popup /> : ''}
            <Navbar />
            <Container>
                <article className={styles.title}>
                    <h1>ВЫБЕРИТЕ ПОДХОДЯЩИЙ ТАРИФНЫЙ ПЛАН</h1>
                </article>

                <section className={styles.main}>
                    <div className={styles.picture}>
                        <img src="/main-img.svg" alt="main-img" />
                        <span></span>
                    </div>

                    <div className={styles.text}>
                        <div className={styles.tiles}>
                            {tilesData.map((tile, index) => {
                                const TileComponent = isSmallScreen ? MediaTile : SmallTile;
                                const tileProps = isSmallScreen ? tile.large : tile.small;
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

                            {isSmallScreen ? (
                                <MediaTile
                                    interval="НАВСЕГДА"
                                    price="5990&#8381;"
                                    description="Всегда быть в форме ⭐️"
                                    discount="18 990&#8381;"
                                    isSelected={selectedTile === 4}
                                    onClick={() => handleTileClick(4)}
                                    PercentageDiscount="-70%"
                                />
                            ) : (
                                <BigTile
                                    interval="НАВСЕГДА"
                                    price="5990&#8381;"
                                    description="Всегда быть в форме ⭐️"
                                    discount="18 990&#8381;"
                                    isSelected={selectedTile === 4}
                                    onClick={() => handleTileClick(4)}
                                />
                            )}
                        </div>
                        <div className={styles.footer}>
                            <p>
                                Следуя плану на 3 месяца, люди получают в 2 раза лучший результат,
                                чем за 1 месяц
                            </p>
                            <form className={styles.rules}>
                                <label>
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                    <span>
                                        Я соглашаюсь с <a href="#">Правилами сервиса</a> и условиями{' '}
                                        <a href="#">Публичной оферты.</a>
                                    </span>
                                </label>

                                <button ref={buttonMain} type="button">
                                    КУПИТЬ
                                </button>

                                <p className={styles.description}>
                                    Нажимая «Купить», Пользователь соглашается на автоматическое
                                    списание денежных средств по истечению купленного периода.
                                    Дальнейшие списания по тарифам участвующим в акции
                                    осуществляются по полной стоимости согласно оферте.
                                </p>
                            </form>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
};

export default App;
