import { useAppSelector } from "../../store/hooks"

const Header = () => {
    const { modules, currentLesson, currentModule } = useAppSelector(state => state.player)
    const moduleTitle = modules[currentModule].title
    const lessonTitle = modules[currentModule].lessons[currentLesson].title
    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">{lessonTitle}</h1>
            <span className="text-sm text-zinc-400">Módulo "{moduleTitle}"</span>
        </div>
    )
}

export default Header