import styles from './input.module.scss'

type PropsTypes = {
    label?: string,
    name: string,
    type: string,
    placeholder?: string,
    defaultValue?: string,
    disabled?: boolean
}

const Input = (props: PropsTypes) => {
    const { label, name, type, placeholder, defaultValue, disabled } = props
    return (
        <div className={styles.item}>
            {label && <label htmlFor={name}>{label}</label>}
            <input type={type} name={name} id={name}
                placeholder={placeholder} className={styles.input} defaultValue={defaultValue}
                disabled={disabled} />
        </div>
    )

}

export default Input