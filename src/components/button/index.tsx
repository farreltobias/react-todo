import clsx from 'clsx'

import styles from './styles.module.css'

type Props = React.PropsWithChildren<{
  variant?: 'default' | 'icon'
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<Props> = ({
  children,
  variant = 'default',
  ...props
}) => {
  const style = styles[variant]

  return (
    <button className={clsx(styles.button, style)} {...props}>
      {children}
    </button>
  )
}
