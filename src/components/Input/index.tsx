import styles from './style.module.css'

type Props = React.InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<Props> = (props) => {
  return <input type="text" className={styles.input} {...props} />
}
