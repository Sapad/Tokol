import styles from './Toster.module.scss';
import { useEffect, useRef, useState } from 'react';

type PropsType = {
    variants?: string
    message?: string
    setToster: any
}

const ToasterVariant: any = {
    success: {
        title: 'Success',
        icon: 'bx-check-circle',
        color: '#a3d9a5',
        barColor: '#3f9242'
    },
    danger: {
        title: 'Danger',
        icon: 'bx-check-circle',
        color: '#f39b9a',
        barColor: '#bb2525'
    },
    warning: {
        title: 'Warning',
        icon: 'bx-check-circle',
        color: '#f8e3a2',
        barColor: '#e9b949'
    },

}

const Toster = (props: PropsType) => {
    const { variants = 'warning', message, setToster } = props;
    const [lengthBar, setLengthBar] = useState(100);
    const timerRef = useRef<any>(null);

    const timerStart = () => {
        timerRef.current = setInterval(() => {
            setLengthBar((prevLength) => prevLength - 0.15);
        }, 1);
    };

    useEffect(() => {
        timerStart();
        return () => clearInterval(timerRef.current);
    }, [])

    return (
        <div className={`${styles.toster} ${styles[`toster--${variants}`]}`}>
            <div className={styles.toster__main}>
                <div className={styles.toster__main__icon}>
                    <i className={`bx ${ToasterVariant[variants].icon}`} style={{ color: ToasterVariant[variants].barColor }} />
                </div>
                <div className={styles.toster__main__text}>
                    <p className={styles.toster__main__text__title}>{ToasterVariant[variants].title}</p>
                    <p className={styles.toster__main__text__message}>{message}</p>
                </div>
                <i className={`bx bx-x ${styles.toster__main__close}`} onClick={() => setToster({})} />
            </div>
            <div className={`${styles.toster__timer} `} style={{ backgroundColor: ToasterVariant[variants].color }}>
                <div style={{ width: `${lengthBar}%`, height: '100%', backgroundColor: ToasterVariant[variants].barColor, }} />
            </div>
        </div>
    )
}

export default Toster