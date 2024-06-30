import { Trash } from '@phosphor-icons/react'

import { Task as TaskType } from '../../app'
import { Button } from '../button'

import { Checkbox } from './checkbox'

import styles from './styles.module.css'

type Props = {
  task: TaskType
  onDeleteTask: (id: string) => void
  onToggleTask: (id: string) => void
}

export const Task: React.FC<Props> = ({
  task: { id, name, isDone },
  onDeleteTask,
  onToggleTask,
}) => {
  const handleDeleteTask = () => {
    onDeleteTask(id)
  }

  const handleToggleTask = () => {
    onToggleTask(id)
  }

  return (
    <label className={styles.task}>
      <input type="checkbox" checked={isDone} onChange={handleToggleTask} />
      <Checkbox />
      <span>{name}</span>
      <Button variant="icon" onClick={handleDeleteTask}>
        <Trash />
      </Button>
    </label>
  )
}
