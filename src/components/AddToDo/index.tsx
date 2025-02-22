import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToDo } from '../../store'

const AddToDo = () => {
    const [newTodo, setNewTodo] = useState('')

    const dispatch = useDispatch()

    function handleNewTodo(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const payload = (e.currentTarget.elements.namedItem('todo') as HTMLInputElement).value
        
        dispatch(addToDo(payload))

        setNewTodo('')
    }

    return (
        <form onSubmit={handleNewTodo}>
            <input
                type="text"
                name="todo"
                placeholder="Novo to-do"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />

            <button type="submit">Adicionar</button>
        </form>
    )
}

export default AddToDo