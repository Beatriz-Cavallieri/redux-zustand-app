import { createSlice } from "@reduxjs/toolkit"

interface Course {
  id: number
  modules: Array<{
    id: number
    title: string
    lessons: Array<{
      id: string
      title: string
      duration: string
    }>
  }>
}

export interface PlayerState {
  course: Course | null;
  currentModuleIndex: number;
  currentLessonIndex: number;
}

const initialState: PlayerState = {
  currentModuleIndex: 0,
  currentLessonIndex: 0,
  course: {
    id: 1,
    modules: [
      {
        id: 1,
        title: 'Iniciando com React',
        lessons: [
          { id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' },
          { id: 'w-DW4DhDfcw', title: 'Estilização do Post', duration: '10:05' },
          { id: 'D83-55LUdKE', title: 'Componente: Header', duration: '06:33' },
          { id: 'W_ATsETujaY', title: 'Componente: Sidebar', duration: '09:12' },
          { id: 'Pj8dPeameYo', title: 'CSS Global', duration: '03:23' },
          { id: '8KBq2vhwbac', title: 'Form de comentários', duration: '11:34' },
        ],
      },
      {
        id: 2,
        title: 'Estrutura da aplicação',
        lessons: [
          { id: 'gE48FQXRZ_o', title: 'Componente: Comment', duration: '13:45' },
          { id: 'Ng_Vk4tBl0g', title: 'Responsividade', duration: '10:05' },
          { id: 'h5JA3wfuW1k', title: 'Interações no JSX', duration: '06:33' },
          { id: '1G0vSTqWELg', title: 'Utilizando estado', duration: '09:12' },
        ],
      },
    ]
  }
}

const playerSlice = createSlice({
  initialState,
  name: 'lessons',
  reducers: {
    play: (state, action) => {
      state.currentModuleIndex = action.payload[0]
      state.currentLessonIndex = action.payload[1]
    },
    next: (state) => {
      const nextLesson = state.currentLessonIndex + 1
      if (state.course?.modules[state.currentModuleIndex].lessons[nextLesson]) {
        state.currentLessonIndex = nextLesson
      } else {
        const nextModule = state.currentModuleIndex + 1
        if (state.course?.modules[nextModule]) {
          state.currentModuleIndex = nextModule
          state.currentLessonIndex = 0
        }
      }
    }
  }
})

export const player = playerSlice.reducer
export const { play, next } = playerSlice.actions