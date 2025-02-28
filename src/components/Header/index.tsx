import { useAppSelector } from "../../store/hooks"

const Header = () => {
    const player = useAppSelector(state => state.player)

    const module = player.course?.modules[player.currentModuleIndex]

    const moduleTitle = module?.title
    const lessonTitle = module?.lessons[player.currentLessonIndex].title
    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">{lessonTitle}</h1>
            <span className="text-sm text-zinc-400">Módulo "{moduleTitle}"</span>
        </div>
    )
}

export default Header