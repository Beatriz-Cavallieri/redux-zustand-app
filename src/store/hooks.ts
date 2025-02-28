import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { RootState, store } from "."

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useCurrentLesson = () => {
    return useAppSelector(state => {
      const { currentModuleIndex, currentLessonIndex } = state.player
  
      const currentModule = state.player.course?.modules[currentModuleIndex]
      const currentLesson = currentModule?.lessons[currentLessonIndex]
  
      return { currentModule, currentLesson }
    })
  }