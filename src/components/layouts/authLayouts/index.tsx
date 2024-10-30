import Link from 'next/link';
import styles from './authLayouts.module.scss'
import { Dispatch, SetStateAction } from 'react';

type PropsType = {
    title?: string,
    children: React.ReactNode;
    link: string;
    linkText?: string;
    setToaster: Dispatch<SetStateAction<{}>>
}

const AuthLayouts = (props: PropsType) => {
    const { title, children, link, linkText } = props;
    return (
        <section className={styles.auth}>
            <h1 className={styles.auth__title}>{title}</h1>
            <div className={styles.auth__form}>
                {children}
            </div>
            <span className={styles.auth__link}>{linkText}<Link href={link}>here</Link></span>
        </section>
    )
}

export default AuthLayouts;