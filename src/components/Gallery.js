import React, { useState } from 'react';
import Modal from 'react-modal';
import './Gallery.css';

Modal.setAppElement('#root');

function Gallery() {
    const images = [
        'images/bg1.jpg',
        'images/image1.jpg',
        'images/image2.jpg',
        'images/bg1.jpg'
    ];

    const videos = [
        '',
        ''
    ];

    const [isImageOpen, setIsImageOpen] = useState(false);
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [selectedMedia, setSelectedMedia] = useState('');

    const openImageModal = (src) => {
        setSelectedMedia(src);
        setIsImageOpen(true);
    };

    const openVideoModal = (src) => {
        setSelectedMedia(src);
        setIsVideoOpen(true);
    };

    const closeModal = () => {
        setIsImageOpen(false);
        setIsVideoOpen(false);
        setSelectedMedia('');
    };

    return (
        <div className="gallery">
            <h2>Галерея</h2>
            <section className="gallery-section">
                <h3>Изображения</h3>
                <div className="image-list">
                    {images.map((src, index) => (
                        <div key={index} className="image-item" onClick={() => openImageModal(src)}>
                            <img src={src} alt={`Gallery ${index}`} />
                        </div>
                    ))}
                </div>
            </section>
            <section className="gallery-section">
                <h3>Видео</h3>
                <div className="video-list">
                    {videos.map((src, index) => (
                        <div key={index} className="video-item" onClick={() => openVideoModal(src)}>
                            <iframe
                                width="100%"
                                height="200"
                                src={src}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={`video-${index}`}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <Modal
                isOpen={isImageOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className="modal"
                overlayClassName="overlay"
            >
                <button onClick={closeModal} className="close-button">&times;</button>
                <img src={selectedMedia} alt="Selected" className="modal-image" />
            </Modal>
            <Modal
                isOpen={isVideoOpen}
                onRequestClose={closeModal}
                contentLabel="Video Modal"
                className="modal"
                overlayClassName="overlay"
            >
                <button onClick={closeModal} className="close-button">&times;</button>
                <iframe
                    width="100%"
                    height="400"
                    src={selectedMedia}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Selected Video"
                    className="modal-video"
                />
            </Modal>
        </div>
    );
}

export default Gallery;
