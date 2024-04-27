import styles from "./form.module.css"
import { useState } from "react"

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    setTodos([...todos, todo])
    setTodo("")
  }

  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.moderninput}
            placeholder="Enter To Item..."
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            value={todo}
          />
          <button className={styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  )
}
