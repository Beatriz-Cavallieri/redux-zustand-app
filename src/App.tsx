import { Provider } from "react-redux"
import { store } from "./store"
import ToDoList from "./components/ToDoList"
import AddToDo from "./components/AddToDo"
import './styles/global.css'

function App() {

  return (
      <Provider store={store}>
        <ToDoList />
        <AddToDo />
      </Provider>
  )
}

export default App
