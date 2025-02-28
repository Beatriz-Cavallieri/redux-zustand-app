import { TypedUseSelectorHook, useSelector } from "react-redux"
import { RootState } from "."

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useCurrentLesson = () => {
    return useAppSelector(state => {
      const { currentModuleIndex, currentLessonIndex } = state.player
  
      const currentModule = state.player.course?.modules[currentModuleIndex]
      const currentLesson = currentModule?.lessons[currentLessonIndex]
  
      return { currentModule, currentLesson }
    })
  }