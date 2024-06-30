import { Task as TaskType } from '../../../app'
import { Task } from '../../task'

import styles from './styles.module.css'

type Props = {
  tasks: TaskType[]
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
}

export const List: React.FC<Props> = ({ tasks, setTasks }) => {
  const markTaskAsDone = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task,
    )

    setTasks(updatedTasks)
  }

  const deleteTask = (id: string) => {
    const tasksWithoutDeletedTask = tasks.filter((task) => task.id !== id)

    setTasks(tasksWithoutDeletedTask)
  }

  return (
    <ul className={styles.tasks}>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            task={task}
            onDeleteTask={deleteTask}
            onToggleTask={markTaskAsDone}
          />
        </li>
      ))}
    </ul>
  )
}
