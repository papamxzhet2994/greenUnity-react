import React, { useState } from 'react';
import {toast, Toaster} from 'react-hot-toast';
import './Contact.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Отправлено:", { name, email, message });
        toast.success('Сообщение отправлено успешно!');
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact">
            <h2>Свяжитесь с нами</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <label>
                    Имя:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Сообщение:
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
                </label>
                <button type="submit">Отправить</button>
            </form>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
}

export default Contact;
