import Container from './components/Container/Container';
import styles from '../src/assets/Main.module.scss';
import SmallTile from './components/Tiles/SmallTile';
import BigTile from './components/Tiles/BigTile';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap/all';
import Navbar from './components/Navbar/Navbar';

const App = () => {
    const [selectedTile, setSelectedTile] = useState<number | null>(null);

    const buttonMain: React.RefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null);

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
                            <SmallTile
                                interval="1 НЕДЕЛЯ"
                                price="699&#8381;"
                                description="Чтобы просто начать 👍🏻"
                                discount="999&#8381;"
                                isSelected={selectedTile === 1}
                                onClick={() => handleTileClick(1)}
                            />
                            <SmallTile
                                interval="1 МЕСЯЦ"
                                price="699&#8381;"
                                description="Привести тело впорядок 💪🏻"
                                discount="1690&#8381;"
                                isSelected={selectedTile === 2}
                                onClick={() => handleTileClick(2)}
                            />
                            <SmallTile
                                interval="3 МЕСЯЦА"
                                price="2990&#8381;"
                                description="Изменить образ жизни 🔥"
                                discount="5990&#8381;"
                                isSelected={selectedTile === 3}
                                onClick={() => handleTileClick(3)}
                            />
                            <BigTile
                                interval="НАВСЕГДА"
                                price="5990&#8381;"
                                description="Всегда быть в форме и поддерживать своё здоровье ⭐️"
                                discount="18 990&#8381;"
                                isSelected={selectedTile === 4}
                                onClick={() => handleTileClick(4)}
                            />
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
