import { useEffect } from 'react';
import Modal from 'react-modal';
import s from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ image, onClose }) => {
  useEffect(() => {
    const handleEsc = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <Modal isOpen={!!image} onRequestClose={onClose} className={s.modal}>
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>{image.alt_description}</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default ImageModal;