import { RiRefreshLine, RiDeleteBin2Line } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodosActions.module.css'

function TodosActions({ resetTodos, deleteCompletedTodos, completedTodosExists }) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos} >
        <RiRefreshLine />
      </Button>
      <Button title="Delet Completed Todos" onClick={deleteCompletedTodos} disabled={!completedTodosExists} >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodosActions
