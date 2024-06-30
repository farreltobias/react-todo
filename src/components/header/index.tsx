import { Rocket } from '@phosphor-icons/react'

import styles from './styles.module.css'

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className="title">
        <Rocket size={36} color="var(--blue)" />
        <div>
          <span>to</span>
          <span>do</span>
        </div>
      </h1>
    </header>
  )
}
