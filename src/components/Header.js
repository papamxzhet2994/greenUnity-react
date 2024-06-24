import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isNavClosing, setIsNavClosing] = useState(false);

    const toggleNav = () => {
        if (isNavOpen) {
            setIsNavClosing(true);
            setTimeout(() => {
                setIsNavOpen(false);
                setIsNavClosing(false);
            }, 500);
        } else {
            setIsNavOpen(true);
        }
    };

    return (
        <header className="header">
            <div className={`header-logo ${isNavOpen ? 'hidden' : ''}`}>
                <Link to="/"><img src="../logo.svg" alt="Eco Organization" style={{width: '100%'}}/></Link>
            </div>
            <div className={`header-nav ${isNavOpen ? 'active' : ''} ${isNavClosing ? 'closing' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={toggleNav}>Главная</Link></li>
                    <li><Link to="/about" onClick={toggleNav}>О нас</Link></li>
                    <li><Link to="/projects" onClick={toggleNav}>Проекты</Link></li>
                    <li><Link to="/gallery" onClick={toggleNav}>Галерея</Link></li>
                    <li><Link to="/contact" onClick={toggleNav}>Связаться с нами</Link></li>
                </ul>
            </div>
            <div className={`header-toggle ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>
                <i className={`fas ${isNavOpen ? 'fa-times' : 'fa-grip-lines'}`}></i>
            </div>
        </header>
    );
}

export default Header;
