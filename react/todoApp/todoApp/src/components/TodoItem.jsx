import styles from "./todoitem.module.css"
export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("this is deleted", item)
    setTodos(todos.filter((todo) => todo !== item))
  }

  return (
    <div>
      <div className={styles.item}>
        <h3 className={styles.itemname}>
          {item}{" "}
          <span>
            <button
              key={item}
              onClick={() => handleDelete(item)}
              className={styles.deleteButton}
            >
              x
            </button>
          </span>
        </h3>
        <hr className={styles.line} />
      </div>
    </div>
  )
}
