import { PlayCircle, Video as VideoIcon } from "lucide-react"

interface LessonProps {
    title: string,
    duration: string,
    onPlay: () => void,
    isCurrent?: boolean
}

const Lesson = ({ title, duration, onPlay, isCurrent = false }: LessonProps) => {
    return (
        <button
            disabled={isCurrent}
            data-active={isCurrent}
            onClick={onPlay}
            className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100">
            {isCurrent
                ? <PlayCircle className="w-4 h-4 text-emerald-400" />
                : <VideoIcon className="w-4 h-4 text-zinc-500" />}
            <span>{title}</span>
            <span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
        </button>
    )
}

export default Lesson