import { ChevronDown } from "lucide-react"
import Lesson from "../Lesson"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { play } from "../../store/slices/player"

interface ModuleProps {
    moduleIndex: number
    title: string
    amountOfLessons: number
}

const Module = ({ moduleIndex, title, amountOfLessons }: ModuleProps) => {
    const lessons = useAppSelector(state => state.player.course?.modules[moduleIndex].lessons)
    const { currentLessonIndex, currentModuleIndex } = useAppSelector(state => state.player)

    const dispatch = useAppDispatch()

    const onPlay = (lessonIndex: number) => {
        dispatch(play([moduleIndex, lessonIndex]))
    }

    return (
        <Collapsible defaultOpen={moduleIndex == 0} className="group">
            <CollapsibleTrigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
                    {moduleIndex + 1}
                </div>

                <div className="flex flex-col gap-1 text-left">
                    <strong className="text-sm">{title}</strong>
                    <span className="text-xs text-zinc-400">{amountOfLessons} aulas</span>
                </div>

                <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent>
                <nav className="relative flex flex-col gap-4 p-6">
                    {lessons && lessons.map((lesson, index) => (
                        <Lesson
                            key={index}
                            title={lesson.title}
                            duration={lesson.duration}
                            onPlay={() => onPlay(index)}
                            isCurrent={moduleIndex == currentModuleIndex && index == currentLessonIndex} />
                    )
                    )}
                </nav>
            </CollapsibleContent>
        </Collapsible>
    )
}

export default Module