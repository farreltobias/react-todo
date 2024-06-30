import { useState } from 'react'

import { Form } from './components/form'
import { Header } from './components/header'
import { List } from './components/list'
import { Task } from './components/task'

import './global.css'
import styles from './app.module.css'

export type Task = {
  id: string
  name: string
  isDone: boolean
}

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  const tasksCreated = tasks.length
  const tasksDone = tasks.filter((task) => task.isDone).length

  return (
    <main className={styles.wrapper}>
      <Header />

      <div className={styles.container}>
        <Form tasks={tasks} setTasks={setTasks} />

        <div className={styles['list-container']}>
          <div className={styles['list-header']}>
            <div>
              <h2>Tarefas criadas</h2>
              <div>{tasksCreated}</div>
            </div>
            <div>
              <p>Concluídas</p>
              <div>
                {tasksCreated === 0 ? '0' : `${tasksDone} de ${tasksCreated}`}
              </div>
            </div>
          </div>
          {tasksCreated === 0 && <List.Empty />}
          {tasksCreated > 0 && <List.Root tasks={tasks} setTasks={setTasks} />}
        </div>
      </div>
    </main>
  )
}
