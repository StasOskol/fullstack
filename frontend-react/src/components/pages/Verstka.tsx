import CardCinema from '../components/CardCinema';
import './Verstka.scss';

const Verstka = () => {
    return <div className='wrp'>
        <header className='header'>
            <nav className='header-menu'>
                <ul className='header-menu-list'>
                    <li className='header-menu-list-el'>Главная</li>
                    <li className='header-menu-list-el'> O кино</li>
                    <li className='header-menu-list-el'> Кадры</li>
                    <li className='header-menu-list-el'> Персонажи</li>
                </ul>
                <div className='header-menu-wrp'>
                    <button className='header-menu-wrp-btn'>Поддержка</button>
                </div>
            </nav>
            <article className='header-first'>
                <figure className='header-first-wrp'>
                    <h1 className='header-first-wrp-title'>Star Warseclipse™</h1>
                    <p className='header-first-wrp-description'>Новый приключенческий экшен c несколькими действующими персонажами и разветвленным повествованием,
                        события которого происходят в эпоху расцвета республики - от Quantic Dream и Lucasfilm Games.
                        Находится сейчас на ранней стадии разработки.</p>
                    <div className='header-first-wrp-btn'>
                        <button className='header-first-wrp-btn-text'>посмотреть трейлер</button>
                    </div>
                </figure>
            </article>
        </header>
        <main className='main'>
            <figure className='main-cinema'>
                <h3 className='main-cinema-title'>
                    Bce еще не можете определиться c выбором кино?
                </h3>
                <figure className='main-cinema-carucel'>
                    <button className='main-cinema-carucel-btn'>
                        <svg width="66" height="77" viewBox="0 0 66 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 38.1051L65.829 -1.52588e-05L65.829 76.2102L0 38.1051Z" fill="#6F2B14" />
                        </svg> 
                    </button>
                    <figure className='main-cinema-carucel-poster'>
                        <CardCinema
                            text='Звёздные войны: Эпизод 1 – Скрытая угроза'
                            url='/jpgs/cinema-one.jpg'
                        />
                        <CardCinema
                            text='Звёздные войны: Эпизод 2 – Атака клонов'
                            url='/jpgs/cinema-two.jpg'
                        />
                        <CardCinema
                            text='Звёздные войны: Эпизод 3 – Месть ситхов'
                            url='/jpgs/cinema-three.jpg'
                        />
                        <CardCinema
                            text='Звёздные войны: Эпизод 4 – Новая надежда'
                            url='/jpgs/cinema-four.jpg'
                        />
                        <CardCinema
                            text='Звёздные войны: Эпизод 5 – Империя наносит ответный...'
                            url='/jpgs/cinema-five.jpg'
                        />
                    </figure>
                    <button className='main-cinema-carucel-btn'>
                        <svg width="66" height="77" viewBox="0 0 66 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M65.829 38.1051L-3.05176e-05 76.2102L-3.05176e-05 -1.52588e-05L65.829 38.1051Z" fill="#6F2B14" />
                        </svg>
                    </button>
                </figure>
            </figure>
            <aside>
                <h4>У каждого выбора есть</h4>
                <p>Любое принятое вами решение может иметь драматические последствия для вашего путешествия.
                    Образ жизни на Внешнем кольце находится под угрозой, и вы должны выбрать свой путь.</p>
            </aside>
            <figure>
                <figcaption>
                    <h3>Кадры из кино</h3>
                </figcaption>
                <p>"тут кадры"</p>
                <button>Раскрыть Ещё</button>
            </figure>
            <figure>
                <figcaption>
                    <h3>Посмотреть трейлер</h3>
                </figcaption>
                <p>"тут видео"</p>
            </figure>
            <article>
                <h2>Звёзные войны</h2>
                <p>«Делай до конца. Или не делай совем. Нет такого слова „Пытаться“»
                    Мастер Йода</p>
            </article>
            <figure>
                <figcaption>
                    <h3>Персонажи</h3>
                </figcaption>
                <p>"тут персонажи"</p>
            </figure>
            <aside>
                <h2>Если остались вопросы по "Звездным войнам" мы на них ответим</h2>
                <p>«Да пребудет c тобой Сила»</p>
                <form action="/submit" method="post">
                    <input type="text" name="question" placeholder="Ваш Вопрос" />
                    <input type="submit" value="Отправить" />
                </form>
            </aside>
        </main>
        <footer>
            <div>
                <nav>
                    <a href="#">Discord</a>
                    <a href="#">YouTube</a>
                    <a href="#">Facebook</a>
                    <a href="#">Telegram</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                    <a href="#">Reddit</a>
                    <a href="#">Gmail</a>
                </nav>
                <h2>Star Wars Eclipse™</h2>
                <h5>STAR WARS © & ™ Lucasfilm Ltd.
                    All Rights Reserved.
                    © 2023 Quantic Dream.
                    Quantic Dream and the Quantic Dream logo are trademarks of Quantic Dream.
                    All Rights Reserved.
                    All other marks belong to their respective owners.</h5>
            </div>
        </footer>
    </div>
}

export default Verstka