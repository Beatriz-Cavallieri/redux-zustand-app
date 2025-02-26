import { ChevronDown } from "lucide-react"
import Lesson from "../Lesson"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible"
import { useAppSelector } from "../../store/hooks"
import { useDispatch } from "react-redux"
import { play } from "../../store/slices/player"

interface ModuleProps {
    moduleIndex: number
    title: string
    amountOfLessons: number
}

const Module = ({ moduleIndex, title, amountOfLessons }: ModuleProps) => {
    const lessons = useAppSelector(state => state.player.modules[moduleIndex].lessons)
    const { currentLesson, currentModule } = useAppSelector(state => state.player)

    const dispatch = useDispatch()

    const onPlay = (lessonIndex: number) => {
        dispatch(play([moduleIndex, lessonIndex]))
    }

    return (
        <Collapsible className="group">
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
                    {lessons.map((lesson, index) => (
                        <Lesson
                            key={index}
                            title={lesson.title}
                            duration={lesson.duration}
                            onPlay={() => onPlay(index)}
                            isCurrent={moduleIndex == currentModule && index == currentLesson} />
                    )
                    )}
                </nav>
            </CollapsibleContent>
        </Collapsible>
    )
}

export default Module