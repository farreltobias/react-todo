import { Check } from '@phosphor-icons/react'

import styles from './styles.module.css'

export const Checkbox: React.FC = () => {
  return (
    <div id="checkbox" className={styles.checkbox}>
      <div>
        <Check size={12} />
      </div>
    </div>
  )
}
