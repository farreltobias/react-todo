import { useState } from 'react'

import { PlusCircle } from '@phosphor-icons/react'

import { Task } from '../../app'
import { Button } from '../button'
import { Input } from '../Input'

import styles from './styles.module.css'

type Props = {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export const Form: React.FC<Props> = ({ tasks, setTasks }) => {
  const [taskName, setTaskName] = useState<string>('')

  const handleTaskCreation = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newTask: Task = {
      id: String(Date.now()), // This is not a good practice, but it's fine for this example
      name: taskName,
      isDone: false,
    }

    setTasks([...tasks, newTask])
    setTaskName('')
  }

  const handleTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('')
    setTaskName(event.target.value)
  }

  const handleTaskNameInvalid = (
    event: React.InvalidEvent<HTMLInputElement>,
  ) => {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const isTaskNameEmpty = taskName.length === 0

  return (
    <form className={styles.form} onSubmit={handleTaskCreation}>
      <Input
        placeholder="Adicione uma nova tarefa"
        value={taskName}
        onChange={handleTaskNameChange}
        onInvalid={handleTaskNameInvalid}
        required
      />
      <Button type="submit" disabled={isTaskNameEmpty}>
        Criar
        <PlusCircle />
      </Button>
    </form>
  )
}
