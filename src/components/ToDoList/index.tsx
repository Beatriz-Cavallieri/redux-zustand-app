import { useAppSelector } from "../../store/hooks"

const ToDoList = () => {
    const todos = useAppSelector(store => store.todo)
  return (
    <ul>
    {todos.map(todo => <li key={todo}>{todo}</li>)}
  </ul>
  )
}

export default ToDoList