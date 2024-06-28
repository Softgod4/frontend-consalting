import Navbar from '../src/components/Navbar/Navbar';
import Container from './components/Container/Container';
import styles from '../src/assets/Main.module.scss';
import SmallTile from './components/Tiles/SmallTile';
import BigTile from './components/Tiles/BigTile';

const App = () => {
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
                            />
                            <SmallTile
                                interval="1 МЕСЯЦ"
                                price="699&#8381;"
                                description="Привести тело впорядок 💪🏻"
                                discount="1690&#8381;"
                            />
                            <SmallTile
                                interval="3 МЕСЯЦА"
                                price="2990&#8381;"
                                description="Изменить образ жизни 🔥"
                                discount="5990&#8381;"
                            />
                            <BigTile
                                interval="НАВСЕГДА"
                                price="5990&#8381;"
                                description="Всегда быть в форме и поддерживать своё здоровье ⭐️"
                                discount="18 990&#8381;"
                            />
                        </div>
                        <div className={styles.footer}>
                            <p>
                                Следуя плану на 3 месяца, люди получают в 2 раза лучший результат,
                                чем за 1 месяц
                            </p>
                            <form>
                                <div>
                                    <input type="text" />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
};

export default App;
