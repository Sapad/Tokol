import Link from 'next/link';
import styles from './authLayouts.module.scss'

type PropsType = {
    error?: string,
    title?: string,
    children: React.ReactNode;
    link: string;
    linkText?: string;
}

const AuthLayouts = (props: PropsType) => {
    const { error, title, children, link, linkText } = props;
    return (
        <section className={styles.auth}>
            <h1 className={styles.auth__title}>{title}</h1>
            {error && <p className={styles.auth__error}>{error}</p>}
            <div className={styles.auth__form}>
                {children}
            </div>
            <span className={styles.auth__link}>{linkText}<Link href={link}>here</Link></span>
        </section>
    )
}

export default AuthLayouts;