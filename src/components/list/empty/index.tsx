import { ClipboardText } from '@phosphor-icons/react'

import styles from './styles.module.css'

export const Empty: React.FC = () => {
  return (
    <div className={styles.empty}>
      <ClipboardText size={56} weight="thin" />
      <p>
        <span>Você ainda não tem tarefas cadastradas</span>
        <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}
