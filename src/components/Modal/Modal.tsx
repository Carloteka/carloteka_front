import css from './Modal.module.scss';
import { useEffect } from 'react';

interface ModalProps {
  children: React.ReactNode[];
  onClose: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.code === 'Escape') {
        onClose();
      }
    }

    document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflowY = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.nodeName === 'DIV' && target?.className.includes('overlay')) {
      onClose();
    }
  };

  return (
    <div className="backdrop overlay" onMouseDown={handleBackdropClick}>
      <div className={css.modalBox}>{children}</div>
    </div>
  );
};
