import React, { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.animate-in');
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight - 100) {
                    section.classList.add('visible');
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ParallaxProvider>
            <div className="home">
                <div className="section parallax"
                     style={{backgroundImage: 'url(https://img.freepik.com/free-vector/ecology-concept-paper-style_23-2148436094.jpg?t=st=1717327920~exp=1717331520~hmac=758699df3b6f0555fcaa42e7e4825d17b09291f684bd1d8fa18c75eb73047120&w=1380;)'}}>
                    <h1 className="title">GreenUnity</h1>
                    <div className="content animate-in glass-effect">
                        <h1>Добро пожаловать в наш природный уголок</h1>
                        <p>Ощутите красоту и спокойствие природы как никогда раньше.</p>
                    </div>

                    <div className="suggestions">
                        <i className="fas fa-chevron-down"></i>
                    </div>
                </div>

                <div className="section" style={{backgroundColor: '#f2f2f2'}}>
                    <div className="about-section">
                        <h2>О нас</h2>
                        <div className="cards">
                            <div className="card">
                                <img src="https://img.icons8.com/fluent/48/000000/forest.png" alt="Природа"/>
                                <h3>Природа</h3>
                                <p>Мы заботимся о сохранении окружающей среды.</p>
                            </div>
                            <div className="card">
                                <img src="https://img.icons8.com/fluent/48/000000/nature.png" alt="Активности"/>
                                <h3>Активности</h3>
                                <p>Пешие прогулки, наблюдение за птицами и многое другое.</p>
                            </div>
                            <div className="card">
                                <img src="https://img.icons8.com/fluent/48/000000/community-grants.png" alt="Сообщество"/>
                                <h3>Сообщество</h3>
                                <p>Присоединяйтесь к нашему дружному сообществу.</p>
                            </div>
                        </div>
                        <Link to="/about" className="more-info-link">Подробнее</Link>
                    </div>
                </div>

                <div className="section parallax"
                     style={{backgroundImage: 'url(https://img.freepik.com/free-vector/peaceful-hill-forest-tree-mountains-rock-beautiful-landscape-outdoors-adventure-green-silhouette-illustration_1150-39395.jpg?t=st=1717318842~exp=1717322442~hmac=d9c217e61a997331e9ea38daa66aa424c7712eff43792a92a54605598f89b6ce&w=1380;)'}}>
                    <div className="content animate-in glass-effect">
                        <h2>Наши мероприятия</h2>
                        <p>Присоединяйтесь к нашим экскурсиям, наблюдению за звездами и другим мероприятиям.</p>
                    </div>
                </div>

                <div className="section" style={{backgroundColor: '#f2f2f2'}}>
                    <div className="news-container">
                        <h2>Новости</h2>
                        <div className="news">
                            <div className="news-item">
                                <img src="https://via.placeholder.com/300x200" alt="Новость 1"/>
                                <div className="news-content">
                                    <h3>Новость 1</h3>
                                    <p>Описание новости 1. Это важное событие произошло недавно.</p>
                                    <a href="/news-1">Читать дальше</a>
                                </div>
                            </div>
                            <div className="news-item">
                                <img src="https://via.placeholder.com/300x200" alt="Новость 2"/>
                                <div className="news-content">
                                    <h3>Новость 2</h3>
                                    <p>Описание новости 2. Это важное событие произошло недавно.</p>
                                    <a href="/news-2">Читать дальше</a>
                                </div>
                            </div>
                            <div className="news-item">
                                <img src="https://via.placeholder.com/300x200" alt="Новость 3"/>
                                <div className="news-content">
                                    <h3>Новость 3</h3>
                                    <p>Описание новости 3. Это важное событие произошло недавно.</p>
                                    <a href="/news-3">Читать дальше</a>
                                </div>
                            </div>
                        </div>
                        <Link to="/news" className="more-info-link">Показать все новости</Link>
                    </div>
                </div>

                <div className="section parallax"
                     style={{backgroundImage: 'url(https://img.freepik.com/free-vector/evergreen-trees-lake-spring-landscape_23-2148427474.jpg?t=st=1717318954~exp=1717322554~hmac=02b6af3f35e7e92b54fcdfa68aefd9a0f3025127a48362caeb7abccb2a459c76&w=1380;)'}}>
                    <div className="content animate-in glass-effect">
                        <h2>Присоединяйтесь к нам</h2>
                        <p>Станьте частью нашего сообщества и наслаждайтесь красотой природы.</p>
                    </div>
                </div>
            </div>
        </ParallaxProvider>
    );
}

export default Home;
