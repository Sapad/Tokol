import styles from './Button.module.scss'

type PropsType = {
    type: "submit" | "reset" | "button" | undefined;
    onClick?: () => void;
    children: React.ReactNode;
    variant?: string,
    className?: string
};

const Button = (props: PropsType) => {
    const { type, onClick, children, variant = 'primary', className } = props
    return (
        <button type={type} className={`${styles.button} ${styles[variant]} ${className}`} onClick={onClick}>
            <span>{children}</span>
        </button>

    )
}

export default Button;