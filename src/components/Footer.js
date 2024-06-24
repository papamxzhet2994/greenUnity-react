import React, { useState } from 'react';
import './Footer.css';
import {toast, Toaster} from "react-hot-toast";

function Footer() {

    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Отправлено:', {email});
        toast.success('Вы подписались на рассылку!');
        setEmail('');
    }
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-info">
                    <h4>Контакты</h4>
                    <p>Email: info@greenunity.com</p>
                    <p>Телефон: +123 456 7890</p>
                </div>
                <div className="footer-social">
                    <h4>Мы в соцсетях</h4>
                    <ul className="social-links">
                        <li><a href="#"><i className="fab fa-vk fa-2x"></i></a></li>
                        <li><a href="#"><i className="fab fa-telegram fa-2x"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram fa-2x"></i></a></li>
                    </ul>
                </div>
                <div className="footer-newsletter">
                    <h4>Подписаться на новости</h4>
                    <form onSubmit={handleSubmit} >
                        <input type="email" placeholder="Ваш email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        <button type="submit">Подписаться</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 GreenUnity. Все права защищены.</p>
            </div>
            <Toaster />
        </footer>
    );
}

export default Footer;
