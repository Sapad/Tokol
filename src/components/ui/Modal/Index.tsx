import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.scss';

type PropsType = {
    children: React.ReactNode;
    onClose: any;
};

const Modal = (props: PropsType) => {
    const { children, onClose } = props;
    const ref: any = useRef();

    // jika mengklik di luar ref maka div akan tertutup
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            // jika ada ref current dan dia tidak mengandung ref current tersebut
            if (ref.current && !ref.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className={styles.modal}>
            <div className={styles.modal__main} ref={ref}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
