import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialState = ["Beber água", "Lavar roupa"]

const todoSlice = createSlice({
    initialState,
    name: 'todo',
    reducers: {}
})


export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
})


export type RootState = ReturnType<typeof store.getState>