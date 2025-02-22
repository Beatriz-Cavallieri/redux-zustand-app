import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit"
import AddToDo from "../components/AddToDo"
import { TypedUseSelectorHook, useSelector } from "react-redux"

const initialState = ["Beber água", "Lavar roupa"]

const todoSlice = createSlice({
    initialState,
    name: 'todo',
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            state = state.push(action.payload)
        }
    }
})


export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
})

export const addToDo = todoSlice.actions.add

export type RootState = ReturnType<typeof store.getState>
